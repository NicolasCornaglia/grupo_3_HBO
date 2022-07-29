const fs = require('fs');
const path = require('path');
const {validatorResult} = require('express-validator')
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/users.json'), 'utf-8'));

let controller = {
    processRegister:(req, res) => {
                const resultValidation = validationResult(req);
                if (resultValidation.errors.length > 0) {
                    return res.render("userRegisterForm", {
                        errors: resultValidation.mapped(),
                        OldData: req.body
                    });
                let userInDb = User.findByField("mail", req.body.mail);
                    if (userInDb) {
                    return res.render("userRegisterForm", {
                        errors: { mail: { msg: "Este mail ya se encuentra registrado" } },
                        OldData: req.body
                        });
                    }
                }
    }
    
}

module.exports = controller