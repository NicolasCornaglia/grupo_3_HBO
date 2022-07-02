const items = require('../../views');


const controller = {
   display: (req,res) => {
      return res.render('productCart.ejs', {items: items})
   }
}

module.exports = controller;