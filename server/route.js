const path = require('path');

module.exports = app => {
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