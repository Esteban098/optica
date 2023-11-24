const db = require("../../database/models");
const bcrypt = require("bcryptjs");
module.exports = {
  getListUsers: async (query) => {
    try {
      const limit = 12;
      const page = query - 1;
      const { count, rows } = await db.User.findAndCountAll({
        attributes: {
          exclude: ["password", "confirmPassword"],
        },
        offset: page * limit,
        limit: limit,
        distinct: true,
      });
      console.log(count, "count");
      console.log(rows, "row");
      return { count: count, rows: rows };
    } catch (error) {
      console.log(error);
    }
  },
  getUserById: async (id) => {
    try {
      const user = await db.User.findByPk(id, {
        raw: true,
        attributes: {
          exclude: ["password", "confirmPassword", "admin"],
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
  getUserInDb: async (email) => {
    const user = db.User.findOne({
      where: {
        email: email,
      },
      attributes: ["email", "password"],
      raw: true,
    });

    if (user) {
      return true;
    } else {
      false;
    }
  },

  ValidationPassword: async (userLogged, password) => {
    const id = userLogged.id;
    const user = await db.User.findOne({
      where: {
        id: id,
      },
      attributes: ["password", "email"],
      raw: true,
    });
    console.log(
      bcrypt.compareSync(password, user.password),
      "comparacion password"
    );
    if (bcrypt.compareSync(password, user.password)) {
      return true;
    } else {
      return false;
    }
  },
  userLogged: async (email, password) => {
    const user = await db.User.findOne({
      where: {
        email: email,
      },
      attributes: ["password", "email"],
      raw: true,
    });
    if (user) {
      console.log(
        bcrypt.compareSync(password, user.password),
        "comparacion password"
      );
    }
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
};
