function userLoggedMiddleware(req, res, next) {
    //si existe logged en locals
    res.locals.isLogged = false;
    if (req.session.userLogged) {
        res.locals.isLogged = true; //este if es para los ejs
        res.locals.userLogged = req.session.userLogged;
        //los datos de la session los paso a una variable local para user en todas las vistas
    }
    next();
}

module.exports = userLoggedMiddleware;
