const db = require('../database/models');
const sequelize = require('sequelize');
const Product = db.Product;
const Category = db.Category;
const OrderItem = db.OrderItem


const controller = {
   index: async (req, res) => {
      try {
         let [products, count] = await Promise.all([Product.findAll(), Product.count()]);
         products = products.map((product) => {
            return {
               id: product.id,
               name: product.name,
               description: product.description,
               relations: {
                  categoryId: product.category_id,
                  colorId: product.color_id,
                  materialId: product.material_id
               },
               detail: `http://localhost:3001/api/products/${product.id}`
            }
         })
         res.send({ count, products })
      } catch (error) {
         console.error("ERROR: ", error)
         res.status(404).send(error)
      }

   },
   show: async (req, res) => {
      try {
         const { id, name, description, price, image, dimensions, category_id, color_id, material_id } = await Product.findByPk(req.params.id)
         const productShow = {
            id,
            name,
            description,
            price,
            image,
            dimensions,
            relations: {
               category_id: category_id,
               color_id: color_id,
               material_id: material_id
            }
         }
         res.send(productShow)
      }
      catch (error) {
         console.error("ERROR: ", error)
         res.status(404).send(error)
      }
   },
   getAllCategories: async (req, res) => {
      try {
         let [categories, count] = await Promise.all([Category.findAll(), Category.count()]);
         categories = categories.map((category) => {
            return {
               id: category.id,
               name: category.name
            }
         })
         res.send({ count, categories })
      } catch (error) {
         console.error("ERROR: ", error)
         res.status(404).send(error)
      }
   },
   // TODO
   productsByCategory: async (req, res) => {

   },
   getAmountProductsSold: async (req, res) => {
      try {
         const amount = await OrderItem.sequelize.query('SELECT sum(quantity) as amount FROM orderitems', {
            model: OrderItem,
            mapToModel: true
         });
         console.log("Amount: ", amount)
         res.send(amount[0])
      } catch (error) {
         console.error("ERROR: ", error)
         res.status(500).send(error)
      }
   }

}

module.exports = controller;