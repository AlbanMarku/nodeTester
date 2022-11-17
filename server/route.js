const path = require('path');
const mongoose = require("mongoose");


module.exports = app => {

    const dbURI = "mongodb+srv://albanshqiptar:alban4321@myfirstcluster.jfc8lqn.mongodb.net/firstDataBase?retryWrites=true&w=majority";
    mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => console.log("connected to db", res))
    .catch((err) => console.log(err));

    app.get("/api", (req, res) => {
        res.json({ message: '👋 from Express!' });
    });

    app.get("/dlc", (req, res) => {
        res.json({ message: 'another endpoint' });
    });

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
    });
};