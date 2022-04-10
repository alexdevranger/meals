import React from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";
import MealTableRow from "./MealTableRow";
import Select from "react-select";

const options = [
  {
    value: "http://localhost:4000/meals/meal-list",
    label: "Today And Yesterday",
  },
  { value: "http://localhost:4000/meals/week", label: "Week" },
  { value: "http://localhost:4000/meals/twoweeks", label: "Two Weeks" },
  { value: "http://localhost:4000/meals/sixweeks", label: "Six Weeks" },
  { value: "http://localhost:4000/meals/month", label: "Month" },
  { value: "http://localhost:4000/meals/twomonths", label: "Two Months" },
];

export default function MealList() {
  const [mealList, setMealList] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState({
    label: "Today",
    value: "http://localhost:4000/meals/meal-list",
  });

  React.useEffect(() => {
    async function getTodayMeals() {
      const res = await fetch(selectedOption.value);
      const data = await res.json();
      console.log(data);
      setMealList(data);
    }
    getTodayMeals();
  }, [selectedOption]);
  function mealDataTable() {
    return mealList.map((res, i) => {
      return <MealTableRow obj={res} key={i} />;
    });
  }
  console.log(selectedOption.value);
  return (
    <Container>
      <Select
        defaultValue={options[0]}
        onChange={setSelectedOption}
        options={options}
        className="selectHolder"
      />
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="day">Day</th>
              <th className="time">Time</th>
              <th className="mealDetail">Meal Deatil</th>
              <th className="acion text-center">Action</th>
            </tr>
          </thead>
          <tbody>{mealDataTable()}</tbody>
        </Table>
      </div>
    </Container>
  );
}
