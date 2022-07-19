const productController = require('../../controllers/data/productsController');

const controller = {
  
   display: (req, res) => {
      productController.obtenerPorId(req,res)
      let response = productController.obtenerPorId(req,res)

      if (!productoEncontrado){
          res.status(404).send("No se encuentra el producto");
      }
      else {
           return res.render( "productDetail",  {prod: productoEncontrado} );
      }
      console.log (response)
     
  },
}

module.exports = controller;