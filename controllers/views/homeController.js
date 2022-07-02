const items = require('../../views/home.ejs');

const controller = {
   display: (req,res) => {
      return res.render('home.ejs', {items: items})
   }
}

module.exports = controller;
