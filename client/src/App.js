// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import { useState } from "react";
import Axios from "axios";

/*function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}*/

function App() {
  const [name, setName] = useState("");
  const [teamsList, setTeamsList] = useState([]);
 
  const addTEAM = () => {
    Axios.post("http://localhost:3001/createTEAM", {
      name: name,
    }).then(() => {
      console.log("equipo creado");
    }).catch(error => {
      console.log(error.response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={addTEAM}>Add Team</button>
      </div>
    </div>
  );  
}

export default App;