const items = require('../data/items');

const controller = {
   display: (req,res) => {
      return res.render('home.ejs', {items: items})
   }
}

module.exports = controller;
