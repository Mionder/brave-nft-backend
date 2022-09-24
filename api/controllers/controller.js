'use strict';

const mongoose = require('mongoose'),
  Brigade = mongoose.model('Brigades'),
  User = mongoose.model('Users'),
  Nft = mongoose.model('Nfts');


// Users

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if(err)
      res.send(err);
    res.json(user);
  });
};  

exports.create_a_user = function(req, res) {
  const new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

// Tasks

exports.list_all_brigades = function(req, res) {
  Brigade.find({}, function(err, brigade) {
    if (err)
      res.send(err);
    res.json(brigade);
  });
};

exports.create_a_brigade = function(req, res) {
  const new_brigade = new Brigade(req.body);
  new_brigade.save(function(err, brigade) {
    if (err)
      res.send(err);
    res.json(brigade);
  });
};


exports.read_a_brigade = function(req, res) {
  Brigade.findById(req.params.brigadeId, function(err, brigade) {
    if (err)
      res.send(err);
    res.json(brigade);
  });
};


exports.update_a_brigade = function(req, res) {
  Brigade.findOneAndUpdate({_id: req.params.brigadeId}, req.body, {new: true}, function(err, brigade) {
    if (err)
      res.send(err);
    res.json(brigade);
  });
};


exports.delete_a_brigade = function(req, res) {
  Brigade.remove({
    _id: req.params.brigadeId
  }, function(err, brigade) {
    if (err)
      res.send(err);
    res.json({ message: 'brigade successfully deleted' });
  });
};

//Nft

exports.list_all_nft = function(req, res) {
  Nft.find({}, function(err, nft) {
    if (err)
      res.send(err);
    res.json(nft);
  });
};

exports.create_a_nft = function(req, res) {
  const new_nft = new Nft(req.body);
  new_nft.save(function(err, nft) {
    if (err)
      res.send(err);
    res.json(nft);
  });
};


exports.read_a_nft = function(req, res) {
  Nft.findById(req.params.nftId, function(err, nft) {
    if (err)
      res.send(err);
    res.json(nft);
  });
};


exports.update_a_nft = function(req, res) {
  Nft.findOneAndUpdate({_id: req.params.nftId}, req.body, {new: true}, function(err, nft) {
    if (err)
      res.send(err);
    res.json(nft);
  });
};


exports.delete_a_nft = function(req, res) {
  Nft.remove({
    _id: req.params.nftId
  }, function(err, nft) {
    if (err)
      res.send(err);
    res.json({ message: 'brigade successfully deleted' });
  });
};