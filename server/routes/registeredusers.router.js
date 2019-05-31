const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "user";`;
    if (req.isAuthenticated()) {
        pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for user:', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});



router.post('/', (req, res) => {

});



router.delete('/:id', (req, res) => {

});



router.put('/:id', (req, res) => {

});



module.exports = router;