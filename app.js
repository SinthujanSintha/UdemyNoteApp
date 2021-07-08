const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

var argv = yargs.
    command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    }).
    command('list', 'List all Notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help().
    argv;
var command = argv._[0]

if (command === 'list') {
    var allNotes = notes.getAllNotes()
    allNotes ? allNotes.forEach(note => notes.logNote(note)) : console.log("There no notes")
} else if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log("Note Created")
        notes.logNote(note)
    }
    else {
        console.log("Note title taken")
    }
} else if (command === 'read') {
    var note = notes.getNote(argv.title)
    if (note) {
        console.log("Note found")
        notes.logNote(note)
    } else {
        console.log("Note not found")
    }

} else if (command === 'remove') {
    var isRemoved = notes.removeNote(argv.title)
    var message = isRemoved ? "Note has been removed" : "Note not found"
    console.log(message)



} else {
    console.log("Command not found")
}
