const fs = require('fs');
const path = require('path');
/* const { validationResult } = require("express-validator");
const User = require("../../models/User"); //Requiero el CRUD de usuarios */
const bcrypt = require("bcryptjs");
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/users.json'), 'utf-8'));

const controller = {
    processRegister:(req, res) => {
        const body = req.body;
        const newUser = {
            id: usersData.length + 1,
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: bcrypt.hashSync(body.password, 10),
            phonenumber: body.phonenumber,
            city: body.city,
            gender: body.gender,
            category: "user",
            avatar: req.file.filename
            //created_at: new Date(),
            //updated_at: new Date()
        };
        usersData.push(newUser);
        fs.writeFileSync(path.join(__dirname, '../../DB/users.json'), JSON.stringify(usersData));
        console.log(usersData);
        return res.redirect('/');
    },
    loginProcess: (req, res) => {
        console.log(req.body);
        const userToLogin = usersData.find((user) => user.email == req.body.email)
        if (userToLogin) {
            let passwordMatch = bcrypt.compareSync(req.body.password, userToLogin.password);
            console.log(passwordMatch);
            if (passwordMatch) {
                delete userToLogin.password;
                req.session.loguedUser = userToLogin;
                if (req.body.rememberMe) {
                    res.cookie("userMail", req.body.email, { maxAge: (1000 * 2) * 60 })
                }
                return res.redirect("/")
            }
            return res.render("login", { errors: "Usuario y contraseña invalidos" });
        }
        return res.render("login", { errors: "El mail no se encuentra registrado" });
    },
    
    /*  profile: (req, res) => {
         //console.log(req.cookies.userMail);//cuando quiero obtener una cookie debo poner req ya que viajan ahi
         //console.log(req.cookies.colores)
         //console.log(req.session); //Info del usuario. Con esta info puedo moverme en las distintas vistas con la session activa. Lo que no quiero es el password, por ello borraremos 
         return res.render("userProfile", { user: req.session.usuarioLogueado })//le pasamos a la vista la variable user que va a tener del request toda la sesion del userlogged, luego debemos ir a configurar la vista porfile
     },
     logOut: (req, res) => {
         req.session.destroy(); //Borra todo lo que esta en session
         console.log(req.session)
         return res.redirect("/");
     }*/
}

module.exports = controller;