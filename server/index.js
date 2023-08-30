const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const session = require("express-session");
// const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

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

app.use(
    cors({
        origin: ["http://localhost:5173"],
        method: ["POST", "GET"],
        credentials: true,
    })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(
    session({
        secret: "secret", // a secret key used to encrypt the session cookie
        resave: false, // no saving if no modification (save storage and help performance )
        saveUninitialized: false,
        cookie: {
            secure: false, // "false" for http, "true" https
            maxAge: 1000 * 60 * 60 * 24, // 1000 * 60 1 minute ! 1 day = > 1000 * 60 * 60 * 24
        },
    })
);

app.get("/home", (req, res) => {
    if (req.session.name) {
        res.json({ valid: true, name: req.session.name });
    } else {
        res.json({ valid: false, name: "Mrs./Mr. Good Vibration" });
    }
});
app.get("/my-account", (req, res) => {
    if (req.session.name) {
        res.json({ valid: true, name: req.session.name });
    } else {
        res.json({ valid: false });
    }
});

app.post("/signup", (req, res) => {
    const name = req.body.name;
    const mail = req.body.mail;
    const password = req.body.password;
    const status = req.body.status;

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error hashing password");
        } else {
            const sqlInsert =
                "INSERT INTO users (name, mail, password, status) VALUES (?,?,?,?);";
            db.query(
                sqlInsert,
                [name, mail, hashedPassword, status],
                (err, result) => {
                    // db.query(sqlInsert, [values], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send(
                            "Error inserting data into the database"
                        );
                    } else {
                        console.log("Successful insert");
                        res.send(result);
                    }
                    // res.send(result);
                }
            );
        }
    });
});

const verifyUser = (req, res, next) => {
    const cookie = req.session.cookie;
    if (!cookie) {
        res.json({ message: "No cookie" });
    } else {
        res.json;
    }
};

app.post("/login", (req, res) => {
    const mail = req.body.mail;
    const password = req.body.password;

    const sqlSelect = "SELECT * FROM users WHERE mail = ?";
    db.query(sqlSelect, [mail], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error selecting data from the database");
        }
        if (result.length > 0) {
            // console.log(result[0].id);
            console.log(result[0].password);
            console.log(req.body.password);
            const hashedPassword = result[0].password;
            const isPasswordValid = bcrypt.compareSync(
                password,
                hashedPassword
            );
            if (isPasswordValid) {
                req.session.name = result[0].name;
                const name = req.session.name;
                // console.log(req.session.name);
                res.json({ login: true, name: result[0].name });
            } else {
                console.log("Invalid password");
                res.json({ login: false, message: "Invalid password" });
            }
        } else {
            console.log("Not logged");
            res.json({ login: false });
        }
        // res.send(result);
    });
});
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error logout");
        } else {
            res.clearCookie("connect.sid");
            res.json({ logout: true });
        }
    });
});

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
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting data into the database");
        } else {
            console.log("Successful insert");
            res.send(result);
        }
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
