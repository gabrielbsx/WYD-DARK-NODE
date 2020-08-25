const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'Coonnected!'
    });
});

module.exports = routes;