var express = require('express');
var todoController = require('../controllers/todocontroller');
var app = express();
//set up template engine
app.set('view engine', 'ejs');

//middleware, static files
app.use(express.static('./public'));
// app.use('/assets',express.static('./public'));

//fire controllers
todoController(app);


//localhost
localhost:300/assets/styles.css

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');