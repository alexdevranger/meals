import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useHistory } from "react-router-dom";

export default function CreateMeal() {
  const history = useHistory();
  const current = new Date();
  const dateToday = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;
  const datenew = new Date();
  const timeNow = `${datenew.getHours()}h${datenew.getMinutes()}m${datenew.getSeconds()}s`;

  const [formData, setFormData] = React.useState({
    day: dateToday,
    time: timeNow,
    mealDetail: "",
  });
  // //Setting up functions
  // this.onChangeStudentName = this.onChangeStudentName.bind(this);
  // this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
  // this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);

  // // Setting up state
  // this.state = {
  //   name: "",
  //   email: "",
  //   rollno: "",
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  function copyValue(e) {
    console.log(e.target.value);
    //copy(e.target.value);
  }

  //   onChangeStudentName(e) {
  //     this.setState({ name: e.target.value });
  //   }

  //   onChangeStudentEmail(e) {
  //     this.setState({ email: e.target.value });
  //   }

  //   onChangeStudentRollno(e) {
  //     this.setState({ rollno: e.target.value });
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log(formData);

  //     axios
  //       .post("http://localhost:4000/meals/create-meal", formData)
  //       .then((res) => console.log(res.data));

  //     //this.setState({ name: "", email: "", rollno: "" });
  //   }
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formData);
  //   const resultmeal = await axios.post(
  //     "http://localhost:4000/meals/create-meal",
  //     formData
  //   );
  //   console.log("dataa", resultmeal.data);
  //   //() => history.push("/meal-list")
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:4000/meals/create-meal", formData)
      .then((res) => console.log(res.data))
      .then(() => history.push("/meal-list"))
      .catch((error) => {
        console.log(error);
      });

    //() => history.push("/meal-list")
  }

  return (
    <div className="container-fluid">
      <div className="mb-5 text-center">
        <CopyToClipboard text="Sok Malina ">
          <button className="green-btn">Sok Malina</button>
        </CopyToClipboard>
        <CopyToClipboard text="Kasa ">
          <button className="green-btn">Kasa</button>
        </CopyToClipboard>
        <CopyToClipboard text="Boranija ">
          <button className="green-btn">Boranija</button>
        </CopyToClipboard>
        <CopyToClipboard text="Grasak ">
          <button className="green-btn">Grasak</button>
        </CopyToClipboard>
        <CopyToClipboard text="Pasulj ">
          <button className="green-btn">Pasulj</button>
        </CopyToClipboard>
        <CopyToClipboard text="Potaz ">
          <button className="green-btn">Potaz</button>
        </CopyToClipboard>
        <CopyToClipboard text="Cedjena pomorandza ">
          <button className="green-btn">Cedjena pomorandza</button>
        </CopyToClipboard>
        <CopyToClipboard text="Corba ">
          <button className="green-btn">Corba</button>
        </CopyToClipboard>
        <CopyToClipboard text="Kupus salata ">
          <button className="green-btn">Kupus salata</button>
        </CopyToClipboard>
        <CopyToClipboard text="Karadjordjeva ">
          <button className="green-btn">Karadjordjeva</button>
        </CopyToClipboard>
      </div>
      <div className="form-wrapper">
        <Form onSubmit={handleSubmit}>
          {/* <Form.Group controlId="Day">
            <Form.Label>Day</Form.Label>
            <Form.Control
              type="text"
              value={formData.day}
              name="day"
              onChange={handleChange}
            />
          </Form.Group> */}
          <div className="input-group mt-3">
            <span className="input-group-text w100">Day</span>
            <input
              type="text"
              className="form-control"
              value={formData.day}
              name="day"
              onChange={handleChange}
            />
          </div>

          {/* <Form.Group controlId="Time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="text"
              value={formData.time}
              name="time"
              onChange={handleChange}
            />
          </Form.Group> */}
          <div className="input-group mt-3">
            <span className="input-group-text w100">Time</span>
            <input
              type="text"
              className="form-control"
              value={formData.time}
              name="time"
              onChange={handleChange}
            />
          </div>

          {/* <Form.Group controlId="MealDetail">
            <Form.Label>Meal Detail</Form.Label>
            <Form.Control
              type="text"
              value={formData.mealDetail}
              name="mealDetail"
              onChange={handleChange}
            />
          </Form.Group> */}
          <div className="input-group mt-3">
            <span className="input-group-text w100">Meal Detail</span>
            <input
              type="text"
              className="form-control"
              value={formData.mealDetail}
              name="mealDetail"
              onChange={handleChange}
            />
          </div>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4 create-edit-btn"
          >
            Create Meal
          </Button>
        </Form>
      </div>
    </div>
  );
}
