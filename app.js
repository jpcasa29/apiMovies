const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies')

app.use('/', moviesRouter);


app.listen(3000, function() {
    console.log("El servidor está corriendo");
})