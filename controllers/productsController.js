const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { validationResult } = require('express-validator');

const db = require('../database/models');
const Product = db.Product;
const Material = db.Material;
const Color = db.Color;
const Category = db.Category;

const controller = {
    displayHome: async (req, res) => {
        const products = await Product.findAll()
        return res.render('home.ejs', { products })
    },
    displayCreate: async (req, res) => {
        const materials = await Material.findAll();
        const colors = await Color.findAll();
        const categories = await Category.findAll();
        return res.status(200).render('creacion.ejs', { errors: [] , data: {materials: materials, colors: colors, categories: categories} } );
    },
    displayProductCart: (req,res) => {
        return res.render('productCart.ejs',);
    },
    createProduct: async (req, res) => {
        const materials = await Material.findAll();
        const colors = await Color.findAll();
        const categories = await Category.findAll();
        const body = req.body
        const products = await User.findAll()
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const newProduct = {
                id: products.length + 1,
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
            return res.redirect('/')
        }
        return res.render('creacion.ejs', { errors: errors.array() , data: {materials: materials, colors: colors, categories: categories}})
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
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return res.status(200).render('editarPublicacion.ejs', { 
                errors: [],
                data: { productToEdit: foundProduct, materials: materials, colors: colors, categories: categories } 
            })
        }
        return res.render('editarPublicacion.ejs', { errors: errors.array() , data: {materials: materials, colors: colors, categories: categories}})
    },

    obtenerPorId: async (req, res) => {
        const foundProduct = await Product.findByPk(req.params.id);
        res.send(foundProduct);
    },

    editProducts: async (req, res) => {
        const { name, description, price, category, image, dimensions, colors, materials } = req.body;
        const foundProduct = await Product.findByPk(req.params.id);
        const materialsDB = await Material.findAll();
        const colorsDB = await Color.findAll();
        const categoriesDB = await Category.findAll();
        const errors = validationResult(req);
        if (errors.isEmpty()) {
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

            return res.redirect('/')
        }
        return res.render('editarPublicacion.ejs', { errors: errors.array() , data: { productToEdit: foundProduct, materials: materialsDB, colors: colorsDB, categories: categoriesDB }})
    },
    detailProduct: async (req, res) => {
        const foundProduct = await Product.findByPk(req.params.id);
        const materials = await Material.findAll();
        const colors = await Color.findAll();
        const categories = await Category.findAll();
        return res.render('productDetail.ejs', { data: { product: foundProduct, materials: materials, colors: colors, categories: categories } });
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


