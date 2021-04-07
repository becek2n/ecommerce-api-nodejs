'use strict';
const db = require("../models");
const userModel = db.User;
const bcrypt = require('bcrypt');
const Op = db.Sequelize.Op;
require('dotenv').config()

exports.get = (req, res) => {
  const { page, size, search } = req.query;
  const { limit, offset } = getPagination(page, size);

  userModel.findAndCountAll({ 
    where: {
      [Op.or]: [
        {
          firstName : {
            [Op.like] : `%${search}%`
          },
        },
        {
            lastName : {
            [Op.like] : `%${search}%`
          },
        },
        {
        email : {
          [Op.like] : `%${search}%`
        },
      }]
      
    },
    order : [
      'id'
    ],
    limit,
    offset,
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", 
      responseData: getPagingData(data, 1, 5)
    });
  })
  .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: datas } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, datas };
};

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
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
      id: req.params.id
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


exports.update = (req, res) => {
  try{
    if(!req.body.id || !req.body.firstName || !req.body.lastName){
      res.status(500).json({responseCode: 500, responseMessage: "Bad request to server!", responseData: null});
    }else{
      
      if(req.files){
        let _file = req.files.fileupload;
        //save file to folder
        _file.mv("./assets/uploads/" + _file.name);
        var dataWithImage = {
          image: process.env.APP_URL + ":" + process.env.APP_PORT + "/assets/uploads/" + _file.name,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        };
      }
      
      var dataWithoutImage = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      };
      userModel.update(
          (req.files) ? dataWithImage : dataWithoutImage,
        {
          where: { id: req.body.id }
        }
      )
      .then(data => {
        res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data[0]});
      })
      .catch(err => {
        res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
      })

    }
  }catch(err){
    res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  }

}