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
/*         res.status(201).json(newProduct);
        res.send('Producto creado'); */
        res.redirect('/')
    },

    getProducts: (req, res) => {
/*         res.status(200).json(productsData); */
/*         res.send('Productos obtenidos'); */
        res.render('home.ejs', {products: productsData})
    },

    productToEdit: (req, res) => {
        let productToEditId = req.params.id;
        let productToEdit;

        for (let product of productsData) {
            if (product.id == productToEditId) {
                productToEdit = product;
            }
        }

        return res.render('editarPublicacion', { productToEdit: productToEdit} )
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
        // Guardamos en la BD los productos, incluido el editado
        fs.writeFileSync(path.join(__dirname, '../../DB/products.json'), JSON.stringify(productsData));

        /* res.status(201).json(productsData); */
        res.redirect('/') 
    },

    detailProduct: (req,res) => {
        const itemId = parseInt(req.params.id, 10);
        let itemEncontrado; 
        
        for (let i=0; i<productsData.length; i++) {
           if (productsData[i].id === itemId) {
              itemEncontrado = productsData[i];
           }
        }
  
        // si no se encuentra ningun producto
        if (!itemEncontrado) {
           res.status(404).send("No se encuentra el item");
        } 
        else {
           return res.render('productDetail', {item: itemEncontrado});
        }
    },
    destroy : (req, res) => {/*res.send("hola eliminar")*/
			let productId = parseInt(req.params.id, 10);
			for (let i = 0; i < productsData.length; i++) {
				if ( productsData[i].id === productId ) {
					productsData.splice(i, 1)
				}
			}
			res.send(`se ha borrado el producto id ${productId}`);
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
