const routes = require('express').Router();

<<<<<<< Updated upstream
routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'Coonnected!'
    });
});
=======
routes.get('/',(req, res)=>{
    res.status(200).json({ message: 'Connected!' });
})
>>>>>>> Stashed changes

module.exports = routes;