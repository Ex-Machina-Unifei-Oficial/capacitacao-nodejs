const express = require('express');
const router = express.Router();
const { getTasks, addTask, updateTask, deleteTask } = require('./app');

router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
