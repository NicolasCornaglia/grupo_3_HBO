const fs = require('fs');
const path = require('path');
/* const { validationResult } = require("express-validator");
const User = require("../../models/User"); //Requiero el CRUD de usuarios */
const bcrypt = require("bcryptjs");
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/users.json'), 'utf-8'));
const Sequelize = require('sequelize')
const db = require('../../database/models');
const { resolveAny } = require('dns/promises');
const User = db.User;

const controller = {
    processRegister: async (req, res) => {
        console.log("BODY: ", req.body)
        console.log("FILE: ", req.file)
        const body = req.body;
        const newUser = {
            id: usersData.length + 1,
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: bcrypt.hashSync(body.password, 10),
            phone_number: body.phonenumber,
            role: "customer",
            city: body.city,
            gender: body.gender,
            category: "user",
            avatar: `${"/images/"}${req.file.filename}`,
            created_at: new Date(),
            updated_at: new Date()
        };
        await User.create(newUser);
        console.log(usersData);
        return res.redirect('/');
    },
    loginProcess: async (req, res) => {
        const userEmail = req.body.email;
        console.log("body: " , req.body);
        const userToLogin = await User.findOne({where: {email: userEmail}});
        if (userToLogin) {
            let passwordMatch = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (passwordMatch) {
                /* delete userToLogin.password; */
                req.session.loguedUser = userToLogin;
                if (req.body.rememberMe) {
                    res.cookie("userMail", req.body.email, { maxAge: (1000 * 2) * 60 })
                }
                return res.redirect("/profile")
            }
            return res.render("login", { errors: { mail: { msg: "Las credenciales son invalidas" } } });
        }
        return res.render("login", { errors: { mail: { msg: "El mail no se encuentra registrado" } } });
    },

    profile: (req, res) => {
        //console.log(req.cookies.userMail);//cuando quiero obtener una cookie debo poner req ya que viajan ahi
        //console.log(req.cookies.colores)
        //console.log(req.session); //Info del usuario. Con esta info puedo moverme en las distintas vistas con la session activa. Lo que no quiero es el password, por ello borraremos 
        return res.render("userProfile", { user: req.session.loguedUser })//le pasamos a la vista la variable user que va a tener del request toda la sesion del userlogged, luego debemos ir a configurar la vista porfile
    },
    logOut: (req, res) => {
        res.clearCookie('userMail');
        req.session.destroy();
        return res.redirect("/");
    },
    editView: (req, res) => {
        res.render("user-edit", {user: req.session.loguedUser})
    },
    editUser: async (req, res) => {
        const user = req.session.loguedUser;
        if(user){
            const userToModify = await User.findOne({where: {email: user.email}});
            const passwordMatch = bcrypt.compareSync(req.body.currentPassword, userToModify.password);
            if (passwordMatch) {
                User.update({
                    password: bcrypt.hashSync(req.body.newPassword, 10)
                },{where: { 
                    id: userToModify.id
                }})
                res.status(204).redirect("/profile");
            };
            if (!passwordMatch) {
                res.send(500)
            }
        }
        
    }
}

module.exports = controller;