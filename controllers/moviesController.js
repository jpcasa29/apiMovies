const db = require('../database/models')
const provinciasRequest = require('../requests/provincias')

module.exports = {
    getAll: function(req, res) {
        db.Movie.findAll()
        .then(function(result) {
            return res.status(200).json(result)
        })
    },
    getById: function(req, res) {
        db.Movie.findByPk(req.params.id)
        .then(function(result) {
            return res.status(200).json(result)
        })
    },
    create: function(req, res) {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        })
        .then(function(result) {
            return res.status(201).json(result)
        })
    },
    provinciasAll: function(req, res) {
        provinciasRequest.all()
        .then(function(result) {
            return res.send(result.data)
        })
        .catch(function(error) {
            return res.json(error)
        })
    },
    provinciasOne: function(req, res) {
        provinciasRequest.byName(req.params.prov)
        .then(function(result) {
            return res.send(result.data)
        })
        .catch(function(error) {
            return res.json(error)
        })
    }
}