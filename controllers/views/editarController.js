/* 
const controller = {
   display: (req, res) => {
      let productToEditId = req.params.id;
      let body = req.body;


      

      let productToEdit = {
         id: productToEditId,
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

      return res.render('editarPublicacion', { productToEdit: productToEdit} )
   }
}

module.exports = controller; */
