const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize')
const { validationResult } = require('express-validator');

const bcrypt = require("bcryptjs");
const db = require('../database/models');
const { resolveAny } = require('dns/promises');
const User = db.User;
const Order = db.Order;

const controller = {
    displayLogin: (req, res) => {
        return res.render('login.ejs', { errors: false })
    },
    displayRegisterForm: (req, res) => {
        return res.render('register-form.ejs', { errors: [] })
    },
    processRegister: async (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const users = await User.findAll()
            const body = req.body;
            const newUser = {
                id: users.length + 1,
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
            return res.redirect('/u/login');
        }
        return res.render('register-form', { errors: errors.array() })
    },
    loginProcess: async (req, res) => {
        const userEmail = req.body.email;
        /* console.log("body: " , req.body); */
        const userToLogin = await User.findOne({ where: { email: userEmail } }); // solucionaod en el master del trabajo
        if (userToLogin) {
            let passwordMatch = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (passwordMatch) {
                /* delete userToLogin.password; */
                req.session.loggedUser = userToLogin;
                if (req.body.rememberMe) {
                    res.cookie("userMail", req.body.email, { maxAge: (1000 * 2) * 60 })
                }
                return res.redirect("/u/profile")
            }
            return res.render("login", { errors: { mail: { msg: "Las credenciales son invalidas" } } });
        }
        return res.render("login", { errors: { mail: { msg: "El mail no se encuentra registrado" } } });
    },

    displayProfile: async (req, res) => {
        let orders = await Order.findAll({
            where: {userId: req.session.loggedUser.id}
        })
        return res.render("userProfile", { user: req.session.loggedUser, orders: orders })
    },
    logOut: (req, res) => {
        res.clearCookie('userMail');
        req.session.destroy();
        return res.redirect("/");
    },
    editView: (req, res) => {
        let error = ""
        res.render("user-edit", { user: req.session.loggedUser, error })
    },
    editUser: async (req, res) => {
        const user = req.session.loggedUser;
        if (user) {
            const userToModify = await User.findOne({ where: { email: user.email } });
            const passwordMatch = bcrypt.compareSync(req.body.currentPassword, userToModify.password);
            if (passwordMatch) {
                User.update({
                    password: bcrypt.hashSync(req.body.newPassword, 10)
                }, {
                    where: {
                        id: userToModify.id
                    }
                })
                res.status(204).redirect("/u/profile");
            };
            if (!passwordMatch) {
                let error;
                error = "La contraseña actual no fue ingresada correctamente";
                res.render("user-edit", { user: req.session.loggedUser, error });
            }
        }

    }
}

module.exports = controller;