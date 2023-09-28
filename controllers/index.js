const {Product} = require("../models")

class Controller{

    static home(req,res){
        Product.findAll().then((result)=>{
            // res.send(result)
            res.render('home',{result}) 
        }).catch((err)=>{
            console.log(err);
            res.send(err)
        })
    }

}

module.exports = Controller