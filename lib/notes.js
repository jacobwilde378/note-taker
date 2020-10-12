const fs = require('fs');
const path = require('path')

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note
}

function deleteOldNote(body, notesArray) {
    console.log("delete:  " + body.id)
    return notesArray
}

module.exports = {
    createNewNote,
    deleteOldNote
}