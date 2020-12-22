'use strict';

module.exports = function(app) {

    var userController = require('../Controllers/User');
    app.route('/login').post(userController.findUserLogin);
   
};