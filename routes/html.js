//require express and create a router
const router = require('express').Router();
//require path  
const path = require('path');
//send notes to the html page   
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
//user redirected to index.html if no matching route is found
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); 
module.exports = router;
