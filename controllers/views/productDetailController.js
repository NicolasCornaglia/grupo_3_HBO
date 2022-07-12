const controller = {
   display: (req,res) => {
      return res.render('productDetail.ejs')
   },
   obtenerPorId: (req,res) => {
      const itemId = parseInt(req.params.id, 10);
      let itemEncontrado; 
      
      for (let i=0; i<itemsData.length; i++) {
         if (itemsData[i].id === itemId) {
            itemEncontrado = itemsData[i];
         }
      }

      // si no se encuentra ningun producto
      if (!itemEncontrado) {
         res.status(404).send("No se encuentra el item");
      } 
      else {
         res.render("productDetail.ejs", {item: itemEncontrado});
      }
   }   
}

module.exports = controller;