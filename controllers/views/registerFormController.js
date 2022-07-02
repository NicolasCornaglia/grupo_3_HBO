const items = require('../../views');

const controller = {
   display: (req,res) => {
      return res.render('register-form.ejs')
   }
}

module.exports = controller;