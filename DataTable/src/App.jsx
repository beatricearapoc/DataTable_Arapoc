import React from "react";
import FilterDataTable from "./components/FilterDataTable";
import "./App.css";

const initialData = [
  { lastName: "Alcaide", firstName: "Hannah", course: "IT", birthdate: "1998/05/20" },
  { lastName: "Arapoc", firstName: "Beatrice", course: "CS", birthdate: "2000/11/12" },
  { lastName: "Floresca", firstName: "Justinne", course: "IS", birthdate: "2001/02/28" },
  { lastName: "Lim", firstName: "Joash", course: "DS", birthdate: "2001/06/15" },
  { lastName: "Natividad", firstName: "Karl", course: "IT", birthdate: "2003/10/15" },
  { lastName: "Pimentel", firstName: "Job", course: "CS", birthdate: "2002/06/15" },
  { lastName: "Pusta", firstName: "Tisha", course: "IS", birthdate: "1997/01/15" },
  { lastName: "Veneracion", firstName: "Isiah", course: "DS", birthdate: "1999/08/15" },
];

const headers = ["Last Name", "First Name", "Course", "Birthdate", "Age"];

function App() {
  return (
    <div className="App">
      <p className="main-title">Student Management System</p>
      <p className="subtitle">Data Table</p>
      <FilterDataTable headers={headers} data={initialData} />
    </div>
  );
}

export default App;
