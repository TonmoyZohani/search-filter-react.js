import React, { useState } from "react";
import Table from "./Table";
import { Users } from "./users";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const keys = ["first_name", "last_name", "email"];

  // const search = (data) => {
  //   return data.filter((user) => user.first_name.toLowerCase().includes(text));
  // };

  const search = (data) => {
    return data.filter((user) => {
      return keys.some((key) => user[key].toLowerCase().includes(text));
    });
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Searching...."
        className="search"
        onChange={(e) => setText(e.target.value.toLowerCase())}
      />
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(text)
        ).map((user) => {
          return (
            <li key={user.id} className="listItem">
              {user.first_name}
            </li>
          );
        })}
      </ul> */}
      <Table users={search(Users)} />
    </div>
  );
}

export default App;
