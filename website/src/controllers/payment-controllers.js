const db = require("../database/models");

module.exports = {
	paymentMethods: (req, res) => {
		res.render("users/payment-methods.ejs");
	},
	/*card: (req, res) => {
		res.render("users/card-page.ejs");
	},
	transfer: (req, res) => {
		res.render("users/transfer-page.ejs");
	},*/
};
