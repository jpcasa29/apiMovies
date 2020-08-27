const axios = require('axios')

module.exports = {
    all: function() {
        return axios({
            
            method: 'get',
            url: 'https://apis.datos.gob.ar/georef/api/provincias'
            
        })
    },
    byName: function(provincia) {
        return axios({
            method: 'get',
            url: 'https://apis.datos.gob.ar/georef/api/provincias',
            params: {
                nombre: provincia
            }
            
        })
    }
}