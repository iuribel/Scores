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
  const [posicion, setPosicion] = useState("");
  const [afavor, setAfavor] = useState("");
  const [encontra, setEncontra] = useState("");
  const [name, setName] = useState("");
  const [teamsList, setTeamsList] = useState([]);
  const [newafavor, setNewAfavor] = useState("");
  const [newencontra, setNewEncontra] = useState("");
  const [newposicion, setNewPosicion] = useState("");
 
  const addTEAM = () => {
    Axios.post("http://localhost:3001/createTEAM", {
      name: name,
    }).then(() => {
      console.log("equipo creado");
    }).then(() => {
      setTeamsList([
        ...teamsList,
        {
          name: name,
          posicion: posicion,
          afavor: afavor,
          encontra: encontra,
        },
      ]);
    });
  };

  const getTEAMS = () => {
    Axios.get("http://localhost:3001/showTeams").then((response) => {
      setTeamsList(response.data);
    });
  };

  const deleteTEAM = (id) => {
    Axios.delete(`http://localhost:3001/deleteTeam/${id}`)
  };

  

  const updateGolesyPosicion = (id) => {
    Axios.put("http://localhost:3001/updateTeam", { afavor: newafavor,encontra:newencontra,posicion:newposicion, id: id }).then(
      (response) => {
        setTeamsList(
          teamsList.map((val,key) => {
            return val.idTEAM == id
              ? {
                name: val.nameTEAM,
                posicion: val.POSICION,
                afavor: val.AFAVOR,
                encontra: val.ENCONTRA,
                }
              : val;
          })
        );
      }
    );
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
      <div className="TEAMS">
        <button onClick={getTEAMS}>Show Teams</button>
      </div>
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Posición</th>
          <th scope="col">´Goles a favor</th>
          <th scope="col">Goles en contra</th>
          
        </tr>
      </thead>
      <tbody>
        {teamsList.map((val, key) => {
          return (
            <tr>
              <td>{val.idTEAM}</td>
              <td>{val.nameTEAM}</td>
              <td>{val.POSICION}</td>
              <td>{val.AFAVOR}</td>
              <td>{val.ENCONTRA}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>

    


  );  
  
  

}

export default App;