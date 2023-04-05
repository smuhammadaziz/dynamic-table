import React, { useState } from 'react';
import db from '../../db/data.json';

const capitalize = word => {
  return word[0].toUpperCase() + word.slice(1);
};

function Table() {
  const [users, setUsers] = useState(db);

  const renderUsers = () => {
    return users.map(
      ({ id, name, age, email, phone, city, state, country, zipcode, occupation }) => {
        return (
          <tr key={id}>
            <td style={{ padding: '10px', border: '1px solid black' }}>{id}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{name}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{age}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{email}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{phone}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{city}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{state}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{country}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{zipcode}</td>
            <td style={{ padding: '10px', border: '1px solid black' }}>{occupation}</td>
          </tr>
        );
      }
    );
  };

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {Object.keys(db[0]).map(key => (
            <th key={key}>{capitalize(key)}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderTable = () => {
    return (
      <table>
        {renderHeader()}
        <tbody>{renderUsers()}</tbody>
      </table>
    );
  };
  return (
    <div>
      <div style={{ margin: '50px' }}>
        <h1>Users Table</h1>
        {renderTable()}
      </div>
    </div>
  );
}

export default Table;
