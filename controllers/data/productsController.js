let productsData = require('../../DB/products.json');


module.exports = {
     createProducto : (req, res) => {
        productsData.push(req.body);
        res.status(201).json(productsData);
        res.send('Producto creado');
    }
}





// function crearProducto(producto){
//     productsData.push(producto);
// }

// function getProductos(){
//     return productsData;
// }

// function getProductoById(id){
//     return productsData.find(producto => producto.id == id);
// }



module.exports = {
    crearProducto,
    getProductos,
    getProductoById
}