const fs = require('fs');
const path = require('path');
const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/products.json'), 'utf-8'));



const controller = {
    createProduct: (req, res) => {
        const body = req.body
        console.log(body);
        const newProduct = {
            id: productsData.length + 1,
            name: body.name,
            description: body.description,
            price: body.price,
            category_id: body.category,
            image: body.image,
            dimensions: body.dimensions,
            color_id: body.colors,
            material_id: body.materials,
            created_at: new Date(),
            updated_at: new Date()
        }
        productsData.push(newProduct);
        fs.writeFileSync(path.join(__dirname, '../../DB/products.json'), JSON.stringify(productsData))
        res.status(201).json(newProduct);
        res.send('Producto creado');
    },

    getProducts: (req, res) => {

        res.status(200).json(productsData);
        res.send('Productos obtenidos');
    }
}

// {
//     name: 'TEST PRODUCT',
//     description: 'TEST PRODUCT',
//     image: 'FWlfVIlWIAAZqu7.jpeg',
//     category: '1',
//     colors: '2',
//     price: '123',
//     dimensions: '1231234123',
//     materials: '1'
//   }

// {
//     "id": 1,
//     "name": "Rabbit - Legs",
//     "dimensions": "vivamus",
//     "description": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
//     "price": 2112.85,
//     "discount": 47,
//     "category_id": 3,
//     "material_id": 2,
//     "color_id": 5,
//     "image": "http://dummyimage.com/450x450.bmp/cc0000/ffffff"
// },



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
