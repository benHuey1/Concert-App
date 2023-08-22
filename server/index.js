const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
    localhost: "localhost",
    user: "root",
    password: "",
    database: "vibz",
});

// const jxt = require("jsonwebtoken");
// function generateAccessToken(username) {
//     return jwt.sign({ username }, process.env.TOKEN_SECRET, {
//         expiresIn: "1800s",
//     });
// }

app.use(express());

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/concerts", (req, res) => {
    const sqlSelect =
        "SELECT concerts.*,  artists.name AS artist, artists.picture AS artist_picture, style.name AS style, concert_halls.name AS concert_hall, concert_halls.city AS city, concert_halls.picture_inside AS concert_hall_picture FROM concerts JOIN artists ON concerts.artists_id = artists.id JOIN style ON artists.style_id = style.id JOIN concert_halls ON concerts.concert_halls_id = concert_halls.id";
    db.query(sqlSelect, (err, results) => {
        res.send(results);
    });
});

app.get("/artists", (req, res) => {
    const sqlSelect =
        "SELECT artists.*, style.name AS style FROM artists JOIN style ON artists.style_id = style.id";
    db.query(sqlSelect, (err, results) => {
        // preventDefault();
        // if (err) {
        //     res.status(500).send("Error retrieving data from the database");
        // } else {
        //     console.log(result);
        //     res.json(result);
        // }

        // results.forEach((result) => {
        //     result.picture = URL.createObjectURL(
        //         new Blob([result.picture], { type: "image/jpeg" })
        //     );
        // });

        res.send(results);
        // res.send(result);
    });
});

app.get("/concert-halls", (req, res) => {
    const sqlSelect = "SELECT * FROM concert_halls";
    db.query(sqlSelect, (err, results) => {
        res.send(results);
    });
});

app.post("/signup", (req, res) => {
    const values = [
        req.body.name,
        req.body.mail,
        req.body.password,
        req.body.status,
    ];
    const sqlInsert =
        "INSERT INTO users (name, mail, password, status) VALUES (?,?,?,?);";
    db.query(sqlInsert, [values], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting data into the database");
        } else {
            console.log("Successful insert");
            res.send(result);
        }
        res.send(result);
    });
});

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM table_test";
    db.query(sqlSelect, (err, result) => {
        // if (err) {
        //     res.status(500).send("Error retrieving data from the database");
        // } else {
        //     console.log(result);
        //     res.json(result);
        // }
        res.send(result);
    });
});
app.post("/api/insert", (req, res) => {
    const colonne1 = req.body.colonne1;
    const colonne2 = req.body.colonne2;
    const sqlInsert =
        "INSERT INTO table_test (colonne_1, colonne_2) VALUES (?,?);";
    db.query(sqlInsert, [colonne1, colonne2], (err, result) => {
        // if (err) {
        //     console.log(err);
        //     res.status(500).send("Error inserting data into the database");
        // } else {
        //     console.log("Successful insert");
        //     res.send(result);
        // }
        res.send(result);
    });
});

app.delete("/api/delete/:colonne1", (req, res) => {
    const name = req.params.colonne1;
    const sqlDelete = "DELETE FROM table_test WHERE colonne_1 = ?";
    db.query(sqlDelete, name, (err, result) => {
        if (err) {
            console.log(err);
        }
    });
});

app.listen(3001, () => {
    console.log("Running on port 3001");
});
