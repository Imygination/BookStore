const { Product } = require("../models");

class Controller {
  static home(req, res) {
    Product.findAll()
      .then((result) => {
        // res.send(result)
        res.render("home", { result });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  static successBuyProducts(req, res) {
    const { id } = req.params;
    Product.findByPk(id)
      .then((data) => {
        const product = new Product();
        let incrementStock = product.incrementStock(data.stock);
        Product.update({
            stock : incrementStock
        },{
            where: {
                id
            }
        })
      }).then((result)=>{
        res.redirect('/')
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
}

module.exports = Controller;
