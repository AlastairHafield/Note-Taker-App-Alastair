// require express and create a router
const express = require('express').Router();    
//require the db file   
const db = require('../db/db.json');        
//get existing notes
router.get('/notes', (req, res) => {
    store   
        .getNotes()
        .then((notes) => res.json(notes))
        //catch any errors
        .catch((err) => res.status(500).json(err));
});

//post new notes
router.post('/notes', (req, res) => {
    store
        .addNotes(req.body)
        .then((note) => res.json(note))
        //catch any errors
        .catch((err) => res.status(500).json(err));
});

//delete notes
router.delete('/notes/:id', (req, res) => {
    store
        .removeNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        //catch any errors
        .catch((err) => res.status(500).json(err));
});

module.exports = router;