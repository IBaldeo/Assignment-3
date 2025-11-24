const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// shows all posted workouts
router.get('/', async (req, res) => {
  const workouts = await Workout.find().sort({ date: -1 });
  res.render('workouts/list', { workouts });
});

// makes a new workout
router.get('/new', (req, res) => {
  res.render('workouts/new');
});

// posts new workout to list
router.post('/', async (req, res) => {
  await Workout.create(req.body);
  res.redirect('/workouts');
});

// view details of particular workout
router.get('/:id', async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.render('workouts/show', { workout });
});

// edit a posted workout
router.get('/:id/edit', async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.render('workouts/edit', { workout });
});

// push the edit to the list
router.put('/:id', async (req, res) => {
  await Workout.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/workouts');
});

// removes a workout from the list (after confirmation)
router.delete('/:id', async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.redirect('/workouts');
});

module.exports = router;
