const Sequelize = require('sequelize')
const db = require('../../database/models');
const Material = db.Material;

const controller = {
    createMaterial: async (req, res) => {
        
        materialsData.push(req.body);
        res.status(201).json(materials);

        res.send('Producto creado');
    },

}

module.exports = controller;
