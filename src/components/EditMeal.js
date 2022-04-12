import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
//import { Router, Route, Switch, useHistory, create } from "react-router-dom";
//import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import moment from "moment";

//const history = createBrowserHistory();

export default function EditMeal(props) {
  const history = useHistory();
  console.log(window.location);
  const editId = window.location.pathname.split("/").pop();
  console.log(editId);
  const [editFormData, setEditFormData] = React.useState({
    day: "",
    time: "",
    mealDetail: "",
    timestamp: "",
  });
  //console.log(this.props.match.params.id);
  React.useEffect(() => {
    function getMeals() {
      axios
        .get(`http://localhost:4000/meals/edit-meal/${editId}`)
        .then((res) => {
          setEditFormData({
            day: res.data.day,
            time: res.data.time,
            mealDetail: res.data.mealDetail,
            timestamp: res.data.timestamp,
          });
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getMeals();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setEditFormData((prevEditFormData) => {
      const editDayValue = document.getElementById("editDay").value;
      const editTimeValue = document.getElementById("editTime").value;
      const editMealValue = document.getElementById("editMealDetail").value;
      const editUnix = parseInt(
        moment(editDayValue, "DD-MMM-YYYY").format("X")
      );
      return {
        day: editDayValue,
        time: editTimeValue,
        mealDetail: editMealValue,
        timestamp: editUnix,
      };
    });
  };
  console.log("editFormData", editFormData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(editFormData);
    axios
      .put(`http://localhost:4000/meals/update-meal/${editId}`, editFormData)
      .then((res) => {
        console.log(res.data);
        console.log("Meal successfully updated");
      })
      .then(() => history.push("/meal-list"))
      .catch((error) => {
        console.log(error);
      });

    // // Redirect to Student List

    // this.props.history.push("/meal-list");
  }

  return (
    <div className="form-wrapper">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Day</Form.Label>
          <Form.Control
            type="text"
            id="editDay"
            value={editFormData.day}
            name="day"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Day</Form.Label>
          <Form.Control
            type="text"
            id="editTimestamp"
            value={editFormData.timestamp}
            name="timestamp"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="text"
            id="editTime"
            value={editFormData.time}
            name="time"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Meal Detail</Form.Label>
          <Form.Control
            type="text"
            id="editMealDetail"
            value={editFormData.mealDetail}
            name="mealDetail"
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="danger"
          size="lg"
          block="block"
          type="submit"
          className="mt-4"
        >
          Update Meal
        </Button>
      </Form>
    </div>
  );
}
