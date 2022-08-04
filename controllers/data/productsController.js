const fs = require('fs');
const path = require('path');
const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/products.json'), 'utf-8'));
const materialsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/materials.json'), 'utf-8'));
const colorsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/colors.json'), 'utf-8'));
const categorysData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/category.json'), 'utf-8'));

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
        res.redirect('/')
    },

    getProducts: (req, res) => {
        res.render('home.ejs', { products: productsData })
    },

    productToEdit: (req, res) => {
        let productToEditId = req.params.id;
        let productToEdit;

        for (let product of productsData) {
            if (product.id == productToEditId) {
                productToEdit = product;
            }
        }

        return res.render('editarPublicacion.ejs', { data: { productToEdit: productToEdit, materials: materialsData, colors: colorsData, categorys: categorysData } })
    },

    obtenerPorId: (req, res) => {
        const productId = parseInt(req.params.id, 10)
        let productoEncontrado;

        for (let i = 0; i < productsData.length; i++) {
            if (productsData[i].id === productId) {

                productoEncontrado = productsData[i]

            }

        }
        res.send(productoEncontrado)

    },

    editProducts: (req, res) => {
        let productToEditId = req.params.id;
        let body = req.body;
        console.log(body);
        console.log(productToEditId, 'Id del producto');

        let productToEdit = {
            name: body.name,
            description: body.description,
            price: body.price,
            category_id: body.category,
            image: body.image,
            dimensions: body.dimensions,
            color_id: body.colors,
            material_id: body.materials,
            updated_at: new Date()
        }

        for (let product of productsData) {
            if (product.id == productToEditId) {
                product.name = productToEdit.name;
                product.description = productToEdit.description;
                product.price = productToEdit.price;
                product.category_id = productToEdit.category_id;
                product.image = productToEdit.image;
                product.dimensions = productToEdit.dimensions;
                product.color_id = productToEdit.color_id;
                product.material_id = productToEdit.material_id;
                product.updated_at = new Date();
            }
        }

        fs.writeFileSync(path.join(__dirname, '../../DB/products.json'), JSON.stringify(productsData));
        res.redirect('/')
    },

    detailProduct: (req, res) => {
        const IdUrl = parseInt(req.params.id, 10);
        let productoEncontrado;

        for (let product of productsData) {
            if (product.id === IdUrl) {
                productoEncontrado = product;
            }
        }

        if (!productoEncontrado) {
            res.status(404).send("No se encuentra el producto");
        }
        else {
            return res.render('productDetail.ejs', { data: { product: productoEncontrado } }); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
    },
    destroy: (req, res) => {
        let productId = parseInt(req.params.id, 10);
        for (let i = 0; i < productsData.length; i++) {
            if (productsData[i].id === productId) {
                productsData.splice(i, 1)
            }
        }
        res.send(`se ha borrado el producto id ${productId}`);
    }
}

module.exports = controller;


