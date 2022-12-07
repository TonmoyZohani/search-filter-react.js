import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <>
      <h2>Question 1 - Map & Filter</h2>

      {/***************************** Filter method ********************************/}
      <div className="search">
        <h4>Search Here</h4>
        <input
          type="text"
          placeholder="Search Here..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        {users
          .filter((user) => user.name.toLowerCase().includes(query))
          .map((user) => {
            return (
              <div className="container">
                <div className="card" key={user.id}>
                  <div className="card-inner">
                    <div>
                      <p>{user.name}</p>
                      <p>{user.username}</p>
                      <button type="btn" onClick={() => removeUser(user.id)}>
                        Remove Id
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/***************************** Map method ********************************/}
      {/* {users.map((user) => {
        return (
          <div className="card" key={user.id}>
            <div className="card-inner">
              <p>{user.name}</p>
              <p>{user.username}</p>
              <button type="btn" onClick={() => removeUser(user.id)}>
                Remove Id
              </button>
            </div>
          </div>
        );
      })} */}
    </>
  );
}

export default App;
