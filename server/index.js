const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 7000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ticketsystem",
});

db.connect((err, result) => {
    if (err) {
        console.log(err);
    }
    console.log("Database Connection Successful!!!")
});

app.get('/', (req, res) => {

    const sqlInsert = "INSERT INTO ticket_form (name, intro) VALUES ('Benjamin', 'Hello my name is Benjamin');";
    db.query(sqlInsert, (err, result) => {
        res.send("Successfully added to the DB")
    })

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});