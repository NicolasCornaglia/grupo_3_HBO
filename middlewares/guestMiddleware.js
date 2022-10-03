function guestMiddleware(req, res, next) {
   if (req.session.loggedUser) { 
      return res.redirect("/u/profile")
   } 
   next();
}

module.exports = guestMiddleware;