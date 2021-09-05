const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const api = require('./routes/auth.routes');
const api1 = require('./routes/product.routes');
const dbConfig=require('./database/db');

// MongoDB conection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected')
},
    error => {
        console.log("Database can't be connected: " + error)
    }
)

// Remvoe MongoDB warning error
mongoose.set('useCreateIndex', true);

// Express settings
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());

// Serve static resources
//app.use('/public', express.static('public'));

app.use('/api', api)
app.use('/api1', api1)

// Define PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Express error handling
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});