function guestMiddleware(req, res, next) {
   if (req.session.loguedUser) { 
      return res.redirect("/u/profile")
   } 
   next();
}

module.exports = guestMiddleware;