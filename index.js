require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8002;

const db = require('./config/mongoose');
const todo_model=require('./models/todo_model');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// to connect static files like css and js
app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// to listen in a particular PORT
app.listen(PORT, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on PORT: ${PORT}`); 
})