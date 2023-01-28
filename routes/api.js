// require express and create a router
const router = require('express').Router();    
//require the db file   
const db = require('../db/store');        
//get existing notes
router.get('/notes', (req, res) => {
    db
        .getNotes()
        .then((notes) => res.json(notes))
        //catch any errors
        .catch((err) => res.status(500).json(err));
})



//post new notes
router.post('/notes', (req, res) => {
    db
        .addNotes(req.body)
        .then((note) => res.json(note))
        //catch any errors
        .catch((err) => res.status(500).json(err));
});

//delete notes
router.delete('/notes/:id', (req, res) => {
    db
        .removeNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        //catch any errors
        .catch((err) => res.status(500).json(err));
});

module.exports = router;