const path = require('path');
const User = require("./models/user");

const endpoint = app => {

    app.get("/api", (req, res) => {
        res.json({ message: '👋 from Express!' });
    });

    app.get("/add-user",(req, res) => {
        const user = new User ({
            name: "bob",
            age: 23
        });

        user.save()
        .then((result) => {
            res.send(result);
            console.log("Saved user");
        })
        .catch((err) => console.log(err))
    })

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
    });
};

module.exports = {
    endpoint
}