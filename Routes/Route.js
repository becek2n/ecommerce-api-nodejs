'use strict';

module.exports = function(app) {

    //user
    var userController = require('../controllers/user');
    app.route('/user').get(userController.get);
    app.route('/user/:id').get(userController.findOne);
    app.route('/login').post(userController.auth);
    app.route('/user').put(userController.update);

    //product
    var productController = require('../controllers/product');
    app.route('/product').get(productController.get);
    app.route('/product/:id').get(productController.getId);
    app.route('/product/category/:name').get(productController.getCategory);
    
    //brand
    var brandController = require('../controllers/brand');
    app.route('/brand').get(brandController.get);
    app.route('/brand/:id').get(brandController.getId);
    
    //category
    var categoryController = require('../controllers/category');
    app.route('/category').get(categoryController.get);
    app.route('/category/:id').get(categoryController.getId);
    
    //collection
    var collectionController = require('../controllers/category');
    app.route('/collection').get(collectionController.get);
    app.route('/collection/:id').get(collectionController.getId);
   
};