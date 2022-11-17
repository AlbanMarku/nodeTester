const express = require('express'),
    path    = require('path'),
    route   = require('./route.js'),
    app     = express(),
    port    = process.env.PORT || 8080;
    mongoose = require("mongoose")
    
app.use(express.static(path.resolve(__dirname, '../client/dist')));

const dbURI = "mongodb+srv://albanshqiptar:alban4321@myfirstcluster.jfc8lqn.mongodb.net/firstDataBase?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => {
    app.listen(port);
    route.endpoint(app);
    console.log("Connected to db!")
})
.catch((err) => console.log(err));


console.log(`API server is listening on port:${port}`);