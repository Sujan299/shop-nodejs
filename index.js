const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const adminRoutes = require('./routes/admin.js') // .js can be ignored here because that is added auto.
const shopRoutes = require("./routes/shop.js");
const app = express();
const errorController = require('./controllers/error')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))); //static file lai public samma lagdinxa
// aru extra path chahi .html file mai hunxa

app.set('view engine', 'ejs');
app.set('views','views');

app.use('/admin',adminRoutes.routes); // the program will only visit adminRoutes when url is 
//after localhost:3000/admin
app.use(shopRoutes);

app.use(errorController.get404)

app.listen(3000);