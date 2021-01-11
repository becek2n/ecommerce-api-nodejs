'use strict';

module.exports = function(app) {

    var userController = require('../Controllers/User');
    app.route('/user').get(userController.get);
    app.route('/login').post(userController.auth);
   
};