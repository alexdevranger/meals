const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let mealSchema = new Schema(
  {
    day: {
      type: String,
    },
    timestamp: {
      type: Number,
    },
    time: {
      type: String,
    },
    mealDetail: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "meals",
  }
);

module.exports = mongoose.model("Meal", mealSchema);
