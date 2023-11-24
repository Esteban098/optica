const { findEmail } = require("../../utils/functions");
//middleware setea cookies del navegador (en objeto),
//guarda mi mail en el navegador y si esta en la DB me permite pasar y me deja logeado
async function rememberUserCookieMiddleware(req, res, next) {
    try {
        const emailInCookie = req.cookies.userEmail;
        // console.log(req.cookies, "fuera del if");
        if (emailInCookie) {
            //console.log("dentro del if");
            const user = await findEmail(emailInCookie);
            if (user) {
                // console.log(req.session.userLogged);
                req.session.userLogged = user;
            }
        }
    } catch (error) {
        console.log(error);
    }
    next();
}
module.exports = rememberUserCookieMiddleware;
