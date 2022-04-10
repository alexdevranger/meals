import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import MealList from "./components/MealList";
import CreateMeal from "./components/CreateMeal";
import EditMeal from "./components/EditMeal";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/meal-list"} className="nav-link">
                  MEALS
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/create-meal"} className="nav-link">
                    Create Meal
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/meal-list"} className="nav-link">
                    Meal List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <div className="container-fluid">
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <MealList {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-meal"
                    component={(props) => <CreateMeal {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-meal/:id"
                    component={(props) => <EditMeal {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                  <Route
                    exact
                    path="/meal-list"
                    component={(props) => <MealList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </div>
      </Router>
    </div>
  );
}

export default App;
