const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const User = require("../../models/User"); //Requiero el CRUD de usuarios
const bcrypt = require("bcryptjs");
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/users.json'), 'utf-8'));

const controller = {




    login: (req, res) => {
        //console.log(req.cookies.testing);//Aca leo la cookie que setee en register
        return res.render("login", { errors: false });
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
    /*  //Verificacion return res.send(req.body); para ver que envia el formulario login
     //usamos el metodo de findByField para pasarle por parametro el mail ingresado en el form, si el usuario existe, lo devuelve.
     let userToLogin = User.findByField("email", req.body.email);

     //hacemos un if para los escenarios si encontro o no al mail que obtuvimos por body
     if (userToLogin) {
         //Si el mail existe ahora debemos validar el password:
         //Antes debemos usar bcryptjs.compareSync:
         let claveEsCorrecta = bcrypt.compareSync(req.body.password, userToLogin.password); //Esto devuelve un booleano
         if (claveEsCorrecta) {
             //Si es correcto vamos a querer usar session para guardar la sesion del usuario, pero antes borramos la password por seguridad:
             delete userToLogin.password;
             req.session.usuarioLogueado = userToLogin;
             //antes de redirigir:
             if (req.body.rememberMe) {//Si vino tildada voy a querer setear una cookie
                 res.cookie("userMail", req.body.mail, { maxAge: (1000 * 2) * 60 })
             }//Con esta cookie me voy al profile mas abajo y voy a poder loguear a la persona automaticamente para ello me voy al middleware de aplicacion del usuario previamente creado. Si tengo a alguien en una cookie quiero buscar a esa persona

             return res.redirect("/")
         }
         return res.render("login", { errors: { mail: { msg: "Las credenciales son invalidas" } } });
     }
     return res.render("login", { errors: { mail: { msg: "El mail no se encuentra registrado" } } }
     );
 } */
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