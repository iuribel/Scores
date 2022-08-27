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