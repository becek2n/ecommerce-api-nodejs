'use strict';
const db = require("../models");
const userModel = db.User;
const bcrypt = require('bcrypt');

exports.get = (req, res) => {
  userModel.findAll({ 
    raw: true
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
  })
  .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

//auth 
exports.auth = (req, res) => {
  //validate request
  if(req.body.email === null || req.body.password === null){
      res.status(500).json({
          responseCode: 500,
          responseMessage: "Error",
          responseData: 'Email or password cannot be null!',
      });
  }

  userModel.findOne({
      raw:true,
      where: {
          email: req.body.email,
      }
  })
  .then(data => {
      if (!data){
          res.status(200).json({
              responseCode: 200,
              responseMessage: "Not found",
              responseData: data,
          });
      }else{
          //compare password with async
          bcrypt.compare(req.body.password, data.password, function(err, result){
              //check result is true
              if(result == true){
                  res.status(200).json({
                      responseCode: 200,
                      responseMessage: "OK",
                      responseData: data,
                  });
              }else{
                  res.status(200).json({
                      responseCode: 200,
                      responseMessage: "Failed",
                      responseData: 'Incorrect password!',
                  });
              }
              
          })
          
      }
      
  })
  .catch(err => {
      res.status(500).json({
          responseCode: 500,
          responseMessage: "Error",
          responseData: err,
      });
  })
}

exports.findOne = (req, res) => {
  userModel.findOne({ 
    raw: true, 
    where: {
      ID: req.params.id
    }
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
  userModel.create(userData)
    .then(data => {
      res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: [data]});
    })
    .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
    });
};


