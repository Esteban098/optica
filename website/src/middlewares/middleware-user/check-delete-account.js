const { findEmail } = require("../../utils/functions");
async function checkDeleteAccount(req, res, next) {
    const user = await findEmail(req.body.email);
    if (user && user.active !== 0) {
        next();
    } else {
        req.session.checkDeleteAccount = {
            msg: "Upps, usted ya borro esta cuenta",
        };
        return res.redirect("/user/login");
    }
}
module.exports = checkDeleteAccount;
