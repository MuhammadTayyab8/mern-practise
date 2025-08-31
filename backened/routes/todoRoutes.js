const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Create new todo
router.post('/', async (req, res) => {
    const { title } = req.body;
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.json(newTodo);
});

// Update todo
router.put('/:id', async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(todo);
});

// Delete todo
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
});

module.exports = router;