let mongoose = require("mongoose");
const express = require("express");
const meal = express.Router();

// Student Model
const mealsSchema = require("../models/Meal");
//const { Meal } = require("../Models/Meal");

// CREATE Meal //I OVO RADI
// meal.route("/create-meal").post((req, res, next) => {
//   mealsSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

// meal.get("/allmeals", (req, res) => {
//   res.send("test");
// });

meal.post("/create-meal", (req, res) => {
  const newItem = new mealsSchema({
    day: req.body.day,
    time: req.body.time,
    mealDetail: req.body.mealDetail,
  });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((error) => {
      console.error(error);
    });
});

// READ Students
// meal.route("/meal-list").get((req, res, next) => {
//   mealsSchema.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.send(data);
//     }
//   });
// });
//ovo radi za sve meals
// meal.get("/meal-list", (req, res) => {
//   mealsSchema
//     .find({}, "-__v")
//     .sort({
//       _id: "-1",
//     })
//     .lean()
//     .exec()
//     .then((result) => {
//       console.log(result);
//       res.send(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });
// meal.get("/today", (req, res) => {
//   const current = new Date();
//   const dateToday = `${current.getDate()}.${
//     current.getMonth() + 1
//   }.${current.getFullYear()}`;

//   mealsSchema
//     .find(
//       {
//         day: dateToday,
//       },
//       "-__v"
//     )
//     .sort({
//       _id: "1",
//     })
//     .lean()
//     .exec()
//     .then((result) => {
//       console.log(result);
//       res.send(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });
meal.get("/meal-list", (req, res) => {
  const current = new Date();
  var yesterday = new Date(new Date().setDate(current.getDate() - 2));
  const oneDayAgo = `${yesterday.getDate()}.${
    yesterday.getMonth() + 1
  }.${yesterday.getFullYear()}`;
  console.log("oneDayAgo", oneDayAgo);
  mealsSchema
    .find(
      {
        day: { $gt: oneDayAgo },
      },
      "-__v"
    )
    .sort({
      _id: "1",
    })
    .lean()
    .exec()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
meal.get("/week", (req, res) => {
  const current = new Date();
  var weekAgo = new Date(new Date().setDate(current.getDate() - 8));
  console.log("weekago", weekAgo);
  const seven = `${weekAgo.getDate()}.${
    weekAgo.getMonth() + 1
  }.${weekAgo.getFullYear()}`;
  console.log("seven", seven);
  mealsSchema
    .find(
      {
        day: { $gt: seven },
      },
      "-__v"
    )
    .sort({
      _id: "1",
    })
    .lean()
    .exec()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
meal.get("/twoweeks", (req, res) => {
  const current = new Date();
  var twoweeksAgo = new Date(new Date().setDate(current.getDate() - 15));
  console.log("twoweeksAgo", twoweeksAgo);
  const twoWeeks = `${twoweeksAgo.getDate()}.${
    twoweeksAgo.getMonth() + 1
  }.${twoweeksAgo.getFullYear()}`;
  mealsSchema
    .find(
      {
        day: { $gt: twoWeeks },
      },
      "-__v"
    )
    .sort({
      _id: "1",
    })
    .lean()
    .exec()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
meal.get("/month", (req, res) => {
  const current = new Date();
  var monthAgo = new Date(new Date().setDate(current.getDate() - 31));
  console.log("monthAgo", monthAgo);
  const month = `${monthAgo.getDate()}.${
    monthAgo.getMonth() + 1
  }.${monthAgo.getFullYear()}`;
  mealsSchema
    .find(
      {
        day: { $gt: month },
      },
      "-__v"
    )
    .sort({
      _id: "1",
    })
    .lean()
    .exec()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
meal.get("/sixweeks", (req, res) => {
  const current = new Date();
  var sixweeksAgo = new Date(new Date().setDate(current.getDate() - 46));
  console.log("sixweeksAgo", sixweeksAgo);
  const sixWeeks = `${sixweeksAgo.getDate()}.${
    sixweeksAgo.getMonth() + 1
  }.${sixweeksAgo.getFullYear()}`;
  mealsSchema
    .find(
      {
        day: { $gt: sixWeeks },
      },
      "-__v"
    )
    .sort({
      _id: "1",
    })
    .lean()
    .exec()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
meal.get("/twomonths", (req, res) => {
  const current = new Date();
  var twomonthsAgo = new Date(new Date().setDate(current.getDate() - 61));
  console.log("twomonthsAgo", twomonthsAgo);
  const twomonths = `${twomonthsAgo.getDate()}.${
    twomonthsAgo.getMonth() + 1
  }.${twomonthsAgo.getFullYear()}`;
  mealsSchema
    .find(
      {
        day: { $gt: twomonths },
      },
      "-__v"
    )
    .sort({
      _id: "1",
    })
    .lean()
    .exec()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
// // Get Single Student
// meal.route("/edit-meal/:id").get((req, res, next) => {
//   mealsSchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });
meal.get("/edit-meal/:id", (req, res) => {
  mealsSchema
    .findById(req.params.id)
    .then((item) => res.json(item))
    .catch((error) => {
      console.error(error);
    });
});
meal.put("/update-meal/:id", (req, res) => {
  mealsSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((item) => {
      res.json(item);
      console.log("Meal updated successfully !");
    })
    .catch((error) => {
      console.error(error);
    });
});
// meal.get("/edit-meal/:id", (req, res) => {
//   mealsSchema
//     .find(
//       {
//         _id: req.params.id,
//       },
//       "-__v"
//     )
//     .lean()
//     .exec()
//     .then((result) => {
//       console.log(result[0]);
//       res.send(result[0]);
//     });
// });

// // Update Student
// meal.route("/update-meal/:id").put((req, res, next) => {
//   mealsSchema.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         console.log(error);
//         return next(error);
//       } else {
//         res.json(data);
//         console.log("Meal updated successfully !");
//       }
//     }
//   );
// });

// // Delete Student
meal.route("/delete-meal/:id").delete((req, res, next) => {
  mealsSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = meal;
