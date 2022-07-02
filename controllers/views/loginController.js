const items = require('../../views');

const controller = {
   display: (req,res) => {
      return res.render('login.ejs')
   }
}

module.exports = controller;