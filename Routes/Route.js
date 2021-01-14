'use strict';

module.exports = function(app) {

    //user
    var userController = require('../Controllers/user');
    app.route('/user').get(userController.get);
    app.route('/login').post(userController.auth);

    //product
    var productController = require('../Controllers/product');
    app.route('/product').get(productController.get);
    app.route('/product/:id').get(productController.getId);
    app.route('/brand').get(productController.getBrand);
    app.route('/category').get(productController.getCategory);
    app.route('/collection').get(productController.getCollection);
   
};