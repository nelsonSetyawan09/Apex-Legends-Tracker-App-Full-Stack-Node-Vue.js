const express =  require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const routeProfile = require('./routes/profile')

// load env
dotenv.config({path: './config.env'});

const app = express();

// dev logging
if (process.env.NODE_ENV == 'development'){
	app.use(morgan('dev'));		//middleware
}

// profile route
app.use('/api/v1/profile', routeProfile);

// handle production (wajib di bawa route)
if (process.env.NODE_ENV == 'production'){
	app.use(express.static(__dirname + '/public/'))	//middleware
}

// handle SPA
app.get(/.*/, (req, res) => res.sendFile(__dirname+ '/public/index.html'));

const port = process.env.PORT || 3000
app.listen(port, () =>{
	console.log(`server running in ${process.env.NODE_ENV} on port ${port}`);
});