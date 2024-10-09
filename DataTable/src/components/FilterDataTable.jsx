import React, { useState } from "react";
import SearchBar from "./SearchBar";
import DataTable from "./DataTable";

const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };
  
  const FilterDataTable = ({ headers, data }) => {
    const [query, setQuery] = useState("");
    const [minDate, setMinDate] = useState("");
    const [maxDate, setMaxDate] = useState("");
  
    const filteredData = data
      .map(person => ({
        ...person,
        age: calculateAge(person.birthdate)
      }))
      .filter(person => {
        const { lastName, firstName, course, birthdate } = person;
  
        // Filter
        const matchesSearch =
          query === "" ||
          lastName.toLowerCase().includes(query.toLowerCase()) ||
          firstName.toLowerCase().includes(query.toLowerCase()) ||
          course.toLowerCase().includes(query.toLowerCase()) ||
          person.age.toString().includes(query);
  
        const matchesDateRange =
          (!minDate || new Date(birthdate) >= new Date(minDate)) &&
          (!maxDate || new Date(birthdate) <= new Date(maxDate));
  
        return matchesSearch && matchesDateRange;
      });
  
    return (
      <div className="container">
        <SearchBar
          query={query}
          setQuery={setQuery}
          minDate={minDate}
          setMinDate={setMinDate}
          maxDate={maxDate}
          setMaxDate={setMaxDate}
        />
        <DataTable headers={[...headers]} data={filteredData} />
      </div>
    );
  };

  export default FilterDataTable;
