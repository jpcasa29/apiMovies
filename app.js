const express = require('express');
const app = express();
const cors = require('cors')
const moviesRouter = require('./routes/movies')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/movies', moviesRouter);


app.listen(3000, function() {
    console.log("El servidor está corriendo");
})