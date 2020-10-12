const router = require("express").Router();
const { createNewNote, deleteOldNote, } = require("../../lib/notes.js");
const {notes} = require("../../db/db.json");

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results)
})

router.post("/notes", (req, res) => {
    req.body.id = Date.now().toString();
    const note = createNewNote(req.body, notes);
    res.json(note)
})

router.delete("/notes/:id", (req, res) => {
    const newArray = deleteOldNote(req.params.id, notes);
    res.send(newArray)
})

module.exports = router;