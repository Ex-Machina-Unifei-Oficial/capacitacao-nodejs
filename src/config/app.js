const { Database } = require('../database');
const { v4: uuidv4 } = require('uuid');

const database = new Database();

function getTasks(req, res) {
  const tasks = database.select('tasks');
  return res.json(tasks);
}

function addTask(req, res) {
  const { title, description, completed } = req.body;
  if (!title || !description || completed === undefined) {
    return res.status(400).send('Missing required fields'); 
  }
  const taskInfo = {
    id: uuidv4(),
    title,
    description,
    completed
  };
  database.insert('tasks', taskInfo);
  return res.status(201).send('Successful');
}

function updateTask(req, res) {
  const { id } = req.params; 
  const { title, description, completed } = req.body;
  if (!title && !description && completed === undefined) {
    return res.status(400).send('No fields to update'); 
  }
  const result = database.update('tasks', id, title, description, completed); 
  if (result) {
    return res.status(200).send('Successful');
  } else {
    return res.status(404).send('Not Found');
  }
}

function deleteTask(req, res) {
  const { id } = req.params; 
  const result = database.delete('tasks', id);
  if (result) {
    return res.status(200).send('Successful');
  } else {
    return res.status(404).send('Not Found');
  }
}

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};
