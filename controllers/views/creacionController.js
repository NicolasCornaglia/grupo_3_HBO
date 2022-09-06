const Sequelize = require('sequelize')
const db = require('../../database/models');
const Material = db.Material;
const Color = db.Color;
const Category = db.Category;

const controller = {
   display: async (req, res) => {
      const materials = await Material.findAll();
      const colors = await Color.findAll();
      const categories = await Category.findAll();
      return res.status(200).render('creacion.ejs', { data: {materials: materials, colors: colors, categories: categories} })
   }
}

module.exports = controller;