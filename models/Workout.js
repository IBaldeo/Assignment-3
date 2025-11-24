// Mongoose schema for workouts.
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },        // ex. "Morning Run"
  type: { type: String, required: true },         // category: Cardio, Strength, Yoga, etc.
  date: { type: Date, default: Date.now },        // when the workout happened
  durationMin: { type: Number, required: true },  // its duration in minutes
  calories: { type: Number, default: 0 },         // the estimated calories burned
  notes: { type: String },                        // any addtional notes
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Workout', workoutSchema);
