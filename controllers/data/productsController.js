let productsData = require('../../DB/products.json');

const controller = {
    crearProducto: (req, res) => {
        productsData.push(req.body);
        res.status(201).json(productsData);
        res.send('Producto creado');
    }
}

module.exports = controller;


// function crearProducto(producto){
//     productsData.push(producto);
// }

// function getProductos(){
//     return productsData;
// }

// function getProductoById(id){
//     return productsData.find(producto => producto.id == id);
// }
