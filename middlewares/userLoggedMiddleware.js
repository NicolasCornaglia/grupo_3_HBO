const User = require("../models/User"); 

//Este middleware sera de aplicacion ya que el nav-bar esta en todas las paginas

function userLoggedMiddleware(req, res, next) {
   //Pregunto si hay alguien en session para mostrar algo o no
   res.locals.isLogged = false; 

   let emailInCookie = req.cookies.userMail;
   let userFromCookie = User.findByField("email", emailInCookie);

   if (userFromCookie) {
      req.session.loguedUser = userFromCookie;
   }

   if (req.session && req.session.loguedUser) {
      res.locals.isLogged = true;
      res.locals.loguedUser = req.session.loguedUser;
   }

   next();
}

module.exports = userLoggedMiddleware;