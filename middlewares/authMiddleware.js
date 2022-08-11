function authMiddleware(req, res, next) {
   if (!req.session.loguedUser) { 
      return res.redirect("/login")
   } 
   next();
}

module.exports = authMiddleware;