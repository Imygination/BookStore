const {Product, User} = require("../models")
const bcrypt = require('bcryptjs');
const { Op } = require("sequelize");

class Controller{

    static home(req,res){
        const {name} = req.query

        const option = {
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        }


        Product.findAll(option)
        .then((result)=>{
            // res.send(result)
            res.render('home',{result}) 
        }).catch((err)=>{
            // console.log(err);
            res.send(err)
        })
    }

    static login(req, res){
        const {errors} = req.query
        res.render('log-in', {errors})
    }

    static loginUser(req, res){
        const {email, password} = req.body;
        // console.log(email, password);

        User.findOne({
            where: {email}
        })
        .then(user => {
            if(!user) {
                res.redirect(`/users?errors=invalid username or password`) 
            }
            else{
                if(!bcrypt.compareSync(password, user.password)){
                    res.redirect(`/users?errors=invalid username or password`) 
                }
                else{
                    // console.log(user.id, user.role, '<<<<<<<< user');
                    req.session.userid = user.id
                    req.session.role = user.role
                    return res.redirect('/')
                }
            }
        })
        .catch(error => {
            res.send(error)
        })

    }

    static logout(req, res){
        req.session.destroy(err => {
            if(err){
                res.send(err)
            }
            else{
                res.redirect('/')
            }
        })
    }

    static registerForm(req, res){
        const {errors} = req.query
        res.render('register', {errors})
    }
    
    static insertUser(req, res){
        const {email, password, role} = req.body
        User.create({email, password, role})
        .then(result => {
            res.redirect('/users')
        })
        .catch(error => {
            if(error.name === "SequelizeValidationError"){
                let err = error.errors.map(element => {
                  return element.message;
                })
                res.redirect(`/users/register?errors=${err}`)
                // res.send(err)
              }
              else{
                res.send(error)
              }
        })
    }

    static add(req, res){
        res.redirect('register')
    }

    static Authen(req, res, next){
        console.log(req.session);
        if(!req.session.userid){
          res.redirect('/users?errors=Need Login First')
        }
    }

}

module.exports = Controller