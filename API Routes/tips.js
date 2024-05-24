const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/notes.html', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
// i do not understand how to find this one
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a tip`);
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (username && topic && tip) {
    const newNote = {
      username,
      tip,
      topic,
      tip_id: uuid(),
    };

    readAndAppend(newNote, './db/notes.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = notes;
