const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('Wiki Home Page');
})

router.get('/about', (req, res) => {
    res.send('About this wiki');
})

module.exports = router;
