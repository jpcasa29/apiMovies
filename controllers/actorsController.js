const db = require('../database/models')


module.exports = {
    getAll: function(req, res) {
        db.Actor.findAll()
        .then(function(result) {
            return res.status(200).json(result)
        })
    },
    getById: function(req, res) {
        db.Actor.findByPk(req.params.id)
        .then(function(result) {
            return res.status(200).json(result)
        })
    },
    create: function(req, res) {
        db.Actor.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
            favorite_movie_id: req.body.favorite_movie_id,
            status: 1
            
        })
        .then(function(result) {
            return res.status(201).json(result)
        })
    }
}