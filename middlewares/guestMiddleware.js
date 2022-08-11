function guestMiddleware(req, res, next) {
   if (req.session.loguedUser) { 
      return res.redirect("/")
   } 
   next();
}

module.exports = guestMiddleware;