// YourMainComponent.js
import React from 'react';
import TableComponent from "./TableComponent";

const YourMainComponent = () => {
  const data = [
    { name: 'John Doe', age: 25, city: 'New York' },
    { name: 'Jane Smith', age: 30, city: 'San Francisco' },
    // Add more data as needed
  ];

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'City', accessor: 'city' },
  ];

  return (
    <div>
      <h2>Your Data Table</h2>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default YourMainComponent;
