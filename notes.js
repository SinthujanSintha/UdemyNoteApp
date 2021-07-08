const fs = require('fs')

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json')
        return JSON.parse(noteString)
    } catch (error) {

    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}
const addNote = (title, body) => {
    var notes = []
    note = {
        title,
        body
    }
    notes = fetchNotes()

    var duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

const getAllNotes = () => {
    return fetchNotes()
}
const getNote = (title) => {
    var notes = fetchNotes()
    var filterdNotes = notes.filter((note)=>note.title === title)
    return filterdNotes[0]
}
const removeNote = (title) => {
   var notes = fetchNotes()
   var filteredNotes = notes.filter((note)=>note.title !== title)
   saveNotes(filteredNotes)
   return notes.length !== filteredNotes.length
}
const logNote = (note)=> {
    debugger;
    console.log('___')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}
module.exports = {
    addNote,
    getAllNotes,
    getNote,
    removeNote,
    logNote
}