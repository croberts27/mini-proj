const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', async (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  const data = await readFromFile('db/diagnostics.json', 'utf-8');
  console.log(data)
  res.json(data)
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  readAndAppend(req.body, 'db/diagnostics.json')
  res.json();
});

module.exports = diagnostics;
