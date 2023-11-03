import React, { useState } from "react";
import './app.css'

const App = () => {

  const [dataEntry, setData] = useState("");
  const [Add, setEntry] = useState([]);

  const handleChange = (entry) => {
    const newData = entry.target.value;
    setData(newData);
  };

  const add = () => {
    setEntry((prevData) => {
      return [...prevData, dataEntry];
    });
    setData("");
  };

  const del = (index) => {
    const updatedList = Add.filter((_, i) => i !== index);
    setEntry(updatedList);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={dataEntry} />
        <button onClick={add}><span>Add</span></button>
      </div>
      <div className="list">
        <ul>
          {Add.map((entry, index) => (
            <li
              className="list"
              key={index}
              onClick={() => del(index)}
              value={entry}
            >
              {entry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
