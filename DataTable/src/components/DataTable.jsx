import React from "react";

const DataTable = ({ headers, data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) => (
          <tr key={index}>
            <td>{person.lastName}</td>
            <td>{person.firstName}</td>
            <td>{person.course}</td>
            <td>{person.birthdate}</td>
            <td>{person.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
