'use strict';
const db = require("../models");
const productModel = db.Product;
const productImageModel = db.ProductImage;

exports.get = (req, res) => {
  productModel.findAll({ 
    raw: true
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
  })
  .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

exports.getId = (req, res) => {
  productModel.findAll({ 
    where: {
      id: req.params.id
    },
    include: [{ 
      association: 'images',
    }]
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
  })
  .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

exports.create = (req, res) => {
  var _user = req.body;
  if(!_user.fullName || !_user.phoneNumber || !_user.email || !_user.password ){
    res.status(500).json({responseCode : 500, responseMessage : "Error", responseData :  "Bad request to server."});
    return;
  }

  var userData = {
    UserName: _user.fullName,
    FullName: _user.fullName,
    Email: _user.email,
    Phone: _user.phoneNumber,
    Password: _user.password
  }
  productModel.create(userData)
    .then(data => {
      res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: [data]});
    })
    .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
    });
};


