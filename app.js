const express = require('express');
const app = express();
const cors = require('cors')
const moviesRouter = require('./routes/movies')
const actorsRouter = require('./routes/actors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/api/movies', moviesRouter);
app.use('/api/actors', actorsRouter);


app.listen(3000, function() {
    console.log("El servidor está corriendo");
})