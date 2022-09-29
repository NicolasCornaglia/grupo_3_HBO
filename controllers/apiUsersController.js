const db = require('../database/models');
const User = db.User;


const controller = {
   index: async (req, res) => {
      try {
         let [users, count] = await Promise.all([User.findAll(), User.count()]);
         users = users.map((user) => {
            return {
               id: user.id,
               name: `${user.firstname} ${user.lastname}`,
               email: user.email,
               detail: `http://localhost:3000/api/users/${user.id}`
            }
         })
         res.send({ count, users })
      } catch (error) {
         console.error("ERROR: ", error)
         res.status(404).send(error)
      }

   },
   show: async (req,res) => {
      try {
         const {id, firstname, lastname, email, phone_number, city, gender, avatar} = await User.findByPk(req.params.id)
         const userShow = {id, firstname, lastname, email, phone_number, city, gender, avatar}
         res.send(userShow)
      }
      catch (error) {
         console.error("ERROR: ", error)
         res.status(404).send(error)
      }
   }
}

module.exports = controller;