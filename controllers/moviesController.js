const db = require('../database/models')

module.exports = {
    getAll: function(req, res) {
        db.Movie.findAll()
        .then(function(result) {
            return res.json(result)
        })
    }
}