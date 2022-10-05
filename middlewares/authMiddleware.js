function authMiddleware(req, res, next) {
   if (!req.session.loggedUser) { 
      return res.redirect("/u/login")
   } 
   next();
}

module.exports = authMiddleware;