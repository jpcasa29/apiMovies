# API de Nefli

Especificación Técnica

# PELICULAS:

Para obtener todas las Peliculas: 

http://localhost:3000/api/movies

Para obtener el detalle de una sola Pelicula:

http://localhost:3000/api/movies/detail/:id  // (teniendo en cuenta que el id se puede obtener en el primer paso, consultando todas las Peliculas)

Para agregar Peliculas a la base:

http://localhost:3000/api/movies/create  

Teniendo en cuenta los siguientes parámetros:

Titulo de la Pelicula = req.body.title

Rating de la Pelicula = req.body.rating

Premios de la Pelicula = req.body.awards

Fecha de estreno = req.body.release_date (formato YYYY-MM-DD)

Duración de la Pelicula = req.body.length

# ACTORES:

Para obtener todos los Actores: 

http://localhost:3000/api/actors

Para obtener el detalle de un solo Actor:

http://localhost:3000/api/actors/detail/:id  // (teniendo en cuenta que el id se puede obtener en el primer paso, consultando todos los Actores)

Para agregar Actores a la base:

http://localhost:3000/api/actors/create  

Teniendo en cuenta los siguientes parámetros:

Nombre del Actor = req.body.first_name

Apellido del Actor = req.body.last_name

Rating del Actor = req.body.rating

Pelicula favorita del Actor = req.body.favorite_movie_id  //  (teniendo en cuenta que el id se puede obtener en el primer paso de Peliculas, consultando todas las Peliculas)

