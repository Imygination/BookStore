const { Product, Transaction, UserProfile } = require("../models");

class Controller {
  static home(req, res) {
    Product.findAll({
      order: [["name", "asc"]],
    })
      .then((result) => {
        // res.send(result)
        res.render("home", { result });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  // static BuyProducts(req, res) {
  //   const { id } = req.params;
  //   Transaction.create({
  //       includes:{
  //       model:User,
  //       attribute:{["id"]},
  //       model:Product,
  //       attribute:{["id"]}
  //   }
  //   })
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.send(err);
  //     });
  // }

  static successBuyProducts(req, res) {
    const { id } = req.params;
    Product.findByPk(id)
      .then((data) => {
        const product = new Product();
        let incrementStock = product.incrementStock(data.stock);
        Product.update(
          {
            stock: incrementStock,
          },
          {
            where: {
              id,
            },
          }
        );
      })
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  static addUserProfile(req, res) {
    res.render("add-user-profiles");
  }

  static postAddProfiles(req, res) {
    const { id } = req.params;
    res.send(req.body)  ///<<<
    UserProfile.create(
      {
        firstName,
        lastName,
        address,
        userId: id
      }
    )
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  static editUserProfile(req, res) {
    res.render("edit-user-profiles");
  }

  static postEditUserProfile(req, res) {
    const { id } = req.params;
    const { firstName, lastName, address } = req.body;
    UserProfile.findOne({
      where:{
        userId: id
      }
    })
      .then((data) => {
        UserProfile.update({
          firstName,
          lastName,
          address
        });
      })
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
}

module.exports = Controller;
