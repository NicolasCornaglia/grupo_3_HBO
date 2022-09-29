const db = require('../database/models');
const Product = db.Product;

module.exports = {
   productById: async (req,res) => {
      let product = await Product.findByPk(req.params.id);
      return res.json(product);
   }
}