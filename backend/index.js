require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Express Route
const studentRoute = require("../backend/routes/student.route");
const mealsRoute = require("../backend/routes/meals.route");

// Connecting mongoDB Database
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  //.connect("mongodb://127.0.0.1:27017/reactstudents", connectionParams)
  .connect(process.env.DB, connectionParams)
  .then((x) => {
    console.log('Connected to Mongo! Database name: "reactstudents"');
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/students", studentRoute);
app.use("/meals", mealsRoute);

// 404 Error
app.use((req, res, next) => {
  res.status(404);
  res.send({
    error: "Wrong API endpoint.",
    status: res.status,
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
