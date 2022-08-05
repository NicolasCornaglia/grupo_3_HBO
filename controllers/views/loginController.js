const controller = {
   display: (req,res) => {
      return res.render('login.ejs', {errors: false})
   }
}

module.exports = controller;