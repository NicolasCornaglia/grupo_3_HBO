const fs = require('fs');
const path = require('path');
const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/products.json'), 'utf-8'));
const materialsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/materials.json'), 'utf-8'));
const colorsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/colors.json'), 'utf-8'));
const categorysData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/category.json'), 'utf-8'));
const Sequelize = require('sequelize')

const db = require('../../database/models');
const Product = db.Product;
const Material = db.Material;
const Color = db.Color;
const Category = db.Category;

const controller = {
    createProduct: async (req, res) => {
        const body = req.body
        console.log(body);
        const newProduct = {
            name: body.name,
            description: body.description,
            price: body.price,
            category_id: body.category,
            image: `${"/images/"}${req.file.filename}`,
            dimensions: body.dimensions,
            color_id: body.colors,
            material_id: body.materials,
            created_at: new Date(),
            updated_at: new Date()
        }
        await Product.create(newProduct);
        console.log(Product)
        res.redirect('/')
    },
    getProducts: async (req, res) => {
        let products
        const search = req.query.search
        try {
            if (search) {
                products = await Product.findAll({ where: { name: { [Sequelize.Op.like]: `%${req.query.search}%` } } })
            }
            if (!search) {
                products = await Product.findAll()
            }
        } catch (error) {
            console.error("ERROR: ", error)
        }
        res.send(products)
    },

    productToEdit: async (req, res) => {
        const foundProduct = await Product.findByPk(req.params.id);
        const materials = await Material.findAll();
        const colors = await Color.findAll();
        const categories = await Category.findAll();
        return res.status(200).render('editarPublicacion.ejs', { data: { productToEdit: foundProduct, materials: materials, colors: colors, categories: categories } })
    },

    obtenerPorId: async (req, res) => {
        const foundProduct = await Product.findByPk(req.params.id);
        res.send(foundProduct);
    },

    editProducts: async (req, res) => {
        const { name, description, price, category, image, dimensions, colors, materials } = req.body;
        await Product.update({
            name,
            description,
            price,
            category,
            image,
            dimensions,
            colors,
            materials,
            updated_at: new Date()
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/')
    },

    detailProduct: async (req, res) => {
        const foundProduct = await Product.findByPk(req.params.id);
        return res.render('productDetail.ejs', { data: { product: foundProduct } });
    },
    destroy: async (req, res) => {
        await Product.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/');
    },
    search: async (req, res) => {

    }
}

module.exports = controller;


