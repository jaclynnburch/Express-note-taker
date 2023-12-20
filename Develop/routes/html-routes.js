const router = require('express').Router();
const path = require('path');

// Writes the index.html route with GET request
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/notes.html'));
});

module.exports = router;
