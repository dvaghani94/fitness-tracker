const mongoose = require("mongoose");
const schema = mongoose.schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        defaut: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an excercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
            },
            duration: {
                type: Number,
                required: "Enter the duration"
            },
            weight: {
                type: Number,
                required: "Enter the weight"
            },
            reps: {
                type: Number,
                required: "Enter the amount of reps"
            },
            sets: {
                type: Number,
                required: "Enter the number of sets"
            }
        }
    ],
})