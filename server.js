//require express 
const express = require('express');
//require routes
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');
//create app 
const app = express();
//create port
const PORT = process.env.PORT || 3001;
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//start server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
    //server url
    console.log(`http://localhost:${PORT}`);
});
