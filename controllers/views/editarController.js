
const controller = {
   display: (req,res) => {
      let productToEditId = req.params.id; 
      return res.render('editarPublicacion.ejs', {productToEditId: productToEditId})
   }
 }

 module.exports = controller;
