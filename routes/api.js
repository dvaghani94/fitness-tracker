const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// getting workout by ID

// look up .aggregate for mongoose in order to get duration

// look up .aggregate for mongoose in order to get duration range 




router.delete("/api/workouts", ({ body }, res) => {
  Workout.findbyIdAndDelete(body.id)
    .then(() => {
      return res.json(true);
    })
    .catch((err) => {
      res.json(400).json(err);
    });
});
