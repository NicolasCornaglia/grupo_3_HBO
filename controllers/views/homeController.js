const db = require('../../database/models');
const Product = db.Product;

const controller = {
   display: async (req, res) => {
      const products = await Product.findAll()
      return res.render('home.ejs', { products })
   }
}

module.exports = controller;
