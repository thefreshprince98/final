const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.List.find(req.query)
      .then(dbList => res.json(dbList))
      .catch(err => res.status(422).json(err));
  },
  findByZip: function(req, res) {
    db.List.findByZip(req.params.id)
      .then(dbList => res.json(dbList))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('DATA', req.body)
   // db.List.create(req.body)
     // .then(dbList => res.json(dbList))
      //.catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.List.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbList => res.json(dbList))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.List.findById(req.params.id)
      .then(dbList => dbList.remove())
      .then(dbList => res.json(dbList))
      .catch(err => res.status(422).json(err));
  }
};
