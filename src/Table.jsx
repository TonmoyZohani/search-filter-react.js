import React from "react";

const Table = ({ users }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>

        {users.map((user) => {
          return (
            <tr>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
