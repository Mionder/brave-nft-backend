'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');
  var NodeMailer = require('../../nodemailer');

  // todoList Routes
  app.route('/brigades')
    .get(todoList.list_all_brigades)
    .post(todoList.create_a_brigade);


  app.route('/brigades/:brigadeId')
    .get(todoList.read_a_brigade)
    .put(todoList.update_a_brigade)
    .delete(todoList.delete_a_brigade);

    app.route('/nft')
    .get(todoList.list_all_nft)
    .post(todoList.create_a_nft);


  app.route('/nft/:nftId')
    .get(todoList.read_a_nft)
    .put(todoList.update_a_nft)
    .delete(todoList.delete_a_nft);  


  app.route('/users')
    .get(todoList.list_all_users)
    .post(todoList.create_a_user);
    
  app.route('/users/:userId')
    .delete(todoList.delete_a_user);

  app.route('/registration')
    .post(NodeMailer.nodemailerSignIn);
};