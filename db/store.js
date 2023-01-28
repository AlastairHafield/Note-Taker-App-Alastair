// require utils
const utils = require('util');
//require uuid
const uuid = require('uuid').v1;
//require fs
const fs = require('fs');

//read fle async
const readFileAsync = utils.promisify(fs.readFile);
//write file async
const writeFileAsync = utils.promisify(fs.writeFile);
//create database class
class Db {
    //add methods
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            //parse notes
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }
    addNotes(note) {   
        //create note
        const { title, text } = note;
        const newNote = { title, text, id: uuid() };
        //get notes
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    }
    removeNotes(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    }   

};

//export database
module.exports = new Db();
