const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
const authMiddleware = require('./middleware/authMiddleware')

const ports = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(cookieParser('gjhsdsjfhds'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); 
 
app.get("/", function(req, res){
 	res.render('index', {
 		name: 'Express'
 	})
});

app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);

app.listen(ports, () => console.log("localhost:" + ports));