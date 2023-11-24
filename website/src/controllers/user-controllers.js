const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const usersServices = require("../services/users");
const { findOne } = require("../utils/functions");
const { updateProfile } = require("../services/users");

module.exports = {
  /***  REGISTER  ***/
  register: (req, res) => {
    res.render("users/register", {
      oldData: req.session.oldData,
      errors: req.session.errors,
      userData: req.session.userData,
    });
  },

  processRegister: async (req, res) => {
    const result = await usersServices.registerUser(req);
    res.redirect(result);
  },

  /***  LOGIN  ***/
  login: (req, res) => {
    res.render("users/login", {
      errors: req.session.errorsLogin,
      oldData: req.session.oldData,
      deleteAccount: req.session.checkDeleteAccount,
    });
  },
  processLogin: async (req, res) => {
    const result = await usersServices.loginUser(req, res);
    res.redirect(result);
  },

  /***  PROFILE ***/
  profile: (req, res) => {
    //leyendo la cookie, es plural porque es un objeto con varias
    res.render("users/userProfile", {
      userLogged: req.session.userLogged,
      errors: req.session.errorsFormProfile,
      oldData: req.session.dataUserProfiles,
    });
  },
  profileEdit: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const file = req.file.filename;
    const user = await findOne(id);
    //ruta de la foto qeu esta subiendo
    const validations = validationResult(req);

    if (validations.errors.length !== 0) {
      const validation = validations.mapped();
      const pathNewFile = path.resolve("public", "img", "users", file);
      req.session.errorsFormProfile = validation;
      req.session.dataUserProfiles = body;
      if (user.avatar != file) {
        // si el usuario tiene errores y no subió una nueva foto, al asignarle
        //la misma en la validación la comparo para con la db para que no me la borre
        //si es otra foto la borro porque tuvo errores, lo mismo si carga una nueva y tiene errores no se cargar porque no coincide con su foto de usuario
        fs.unlink(pathNewFile, (error) => {
          //también, en vez de pathFile se podia poner file.path que es la ruta de la foto que subió , pero como para saber mas lo hago asi
          if (error) {
            console.log(error);
          }
        });
      }
      res.redirect("/user/profile");
    } else {
      //si no hay errores
      const pathOldFile = path.resolve("public", "img", "users", user.avatar);
      if (user.avatar != file && user.avatar != "default.png") {
        //si la foto es distinta, borra la vieja
        fs.unlink(pathOldFile, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }
      const userActualice = await updateProfile(body, file, id);
      const userData = userActualice.dataValues;
      delete userData.password;
      delete userData.confirmPassword;
      delete userData.admin;
      delete userData.admin;
      delete userData.createdAt;
      delete userData.updatedAt;
      req.session.userLogged = userActualice.dataValues;
      console.log(req.session.userLogged, "userloged ");
      res.redirect("/user/profile");
    }
  },

  logout: (req, res) => {
    res.clearCookie("userEmail"); //elimina  cualquier cookie que exista con ese nombre
    req.session.destroy(); // destruye la session
    res.redirect("/");
  },
  delete: async (req, res) => {
    const user = await findOne(req.params.id);
    user.set({
      active: 0,
    });
    user.save();
    //poner alertas con jsfront
    res.clearCookie("userEmail"); //elimina  cualquier cookie que exista con ese nombre
    req.session.destroy(); // destruye la session
    res.redirect("/");
  },
};
