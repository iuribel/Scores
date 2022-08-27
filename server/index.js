const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");



const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pa$$999Na22",
  database : 'scores'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;



app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  app.post("/createTEAM", (req, res) => {
    const name_TEAM = req.body.name;
    db.query(
      "INSERT INTO TEAMS (nameTEAM, AFAVOR, ENCONTRA) VALUES (?,0,0)",
      [name_TEAM],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.get("/showTeams", (req, res) => {
    db.query("SELECT * FROM TEAMS", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.delete("/deleteTeam/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM TEAMS WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/updateTEAM", (req, res) => {
    const id = req.body.id;
    const posicion = req.body.posicion;
    const afavor = req.body.afavor;
    const encontra = req.body.encontra;
    db.query(
      "UPDATE employees SET POSICION = ?, AFAVOR = ?, ENCONTRA = ? WHERE id = ?",
      [posicion,afavor,encontra, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });