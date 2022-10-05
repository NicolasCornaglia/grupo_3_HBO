const db = require('../database/models');
const Product = db.Product;
const Order = db.Order;

module.exports = {
   productById: async (req,res) => {
      let product = await Product.findByPk(req.params.id);
      return res.json(product);
   },
   checkout: async (req,res) => {
      let order = await Order.create(
         { ...req.body, userId: req.session.loggedUser.id},
         {
            include: Order.OrderItems,
         }
      );
      res.json({ok: true, status: 200, order: order});
   },
   order: async function (req, res) {
      let order = await Order.findByPk(req.params.id, {
        include: Order.OrderItems,
      });
      // res.send(order);
      return res.render("order", { order });
   }
}