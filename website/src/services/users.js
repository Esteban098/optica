const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { findEmail } = require("../utils/functions");
const User = db.User;

module.exports = {
  registerUser: async (req) => {
    try {
      const body = req.body;
      const file = req.file.filename;
      const pathNewFile = path.resolve("public", "img", "users", file);
      const errorsRegister = validationResult(req);
      //errorsRegister es un objeto con la propiedad errors, dicha propiedad error contiene un array de objetos con los errores
      if (!errorsRegister.isEmpty()) {
        //si tengo errores , entro aca
        req.session.errors = errorsRegister.mapped();
        req.session.oldData = body;
        if (file != "default.png") {
          fs.unlink(pathNewFile, (error) => {
            if (error) {
              console.log(error);
            }
          });
        }
        return "/user/register";
      } else {
        const password = bcryptjs.hashSync(body.password, 10);
        if (bcryptjs.compareSync(body.confirmPassword, password)) {
          body.confirmPassword = password;
          //otra verificación ademas del middleware, si las las contraseñas coinciden le asigno ese hash a confirmPassword
        }
        const user = {
          ...body,
          password: password,
          avatar: file,
          active: 1,
        };
        const createUser = await User.create({
          ...user,
        });

        req.session.userData = body; //sacar las claves para pasar a session
        if (req.file) {
          req.session.userData.avatar = file;
        }
        return "/";
      }
    } catch (error) {
      console.log(error);
    }
  },

  loginUser: async (req, res) => {
    const userToLogin = await findEmail(req.body.email);

    if (userToLogin) {
      if (bcryptjs.compareSync(req.body.password, userToLogin.password)) {
        delete userToLogin.password;
        delete userToLogin.confirmPassword;
        //por seguridad eliminamos esos datos del userLogged antes de pasarlo a session
        req.session.userLogged = userToLogin;
        req.session.validationUser = userToLogin;
        if (req.body.rememberuser) {
          res.cookie("userEmail", req.body.email, {
            maxAge: 1000 * 50,
            // una vez todo esta validado, seteo la cookie en singular porque es una sola con (nombre_cookie, valor_cookie , vida_cookie)
          });
        }
        return "/user/profile";
      } else {
        req.session.errorsLogin = {
          password: {
            msg: "Contraseña incorrecta",
          },
        };
        return "/user/login";
      }
    } else {
      req.session.errorsLogin = {
        email: {
          msg: "Las credenciales son invalidas",
        },
      };
      req.session.oldData = req.body;
      return "/user/login";
    }
  },

  updateProfile: async (body, file, id) => {
    const user = await db.User.findOne({
      where: {
        id: id,
      },
    });

    let password;
    if (body.oldPassword == "") {
      password = user.password;
    } else {
      password = bcryptjs.hashSync(body.password, 10);
    }
    await user.set({
      name: body.name,
      lastName: body.lastName,
      password: password,
      confirmPassword: password,
      streetAddress: body.streetAddress,
      avatar: file,
      active: 1,
    });
    await user.save();
    return user;
  },
};
