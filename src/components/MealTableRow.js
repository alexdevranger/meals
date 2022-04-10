import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class MealTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteMeal = this.deleteMeal.bind(this);
  }

  deleteMeal() {
    axios
      .delete("http://localhost:4000/meals/delete-meal/" + this.props.obj._id)
      .then((res) => {
        console.log("Meal successfully deleted!");
      })
      .then(() => window.location.reload(false))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td className="day">{this.props.obj.day}</td>
        <td className="time">{this.props.obj.time}</td>
        <td className="mealDetail">{this.props.obj.mealDetail}</td>
        <td className="action">
          <Link className="edit-link" to={"/edit-meal/" + this.props.obj._id}>
            Edit
          </Link>
          <Button onClick={this.deleteMeal} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
