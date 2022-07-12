let materialsData = require('../../DB/materials.json');

const controller = {
    createMaterial: (req, res) => {
        productsData.push(req.body);
        res.status(201).json(productsData);
        res.send('Producto creado');
    }
}

module.exports = controller;
