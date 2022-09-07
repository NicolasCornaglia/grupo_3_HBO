function authMiddleware(req, res, next) {
   if (!req.session.loguedUser) { 
      return res.redirect("/u/login")
   } 
   next();
}

module.exports = authMiddleware;