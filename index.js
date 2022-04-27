const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

require("dotenv").config();

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    // It will not fetch and display any data in the index page
    res.render("index", { weather: null, error: null });
});

app.listen(5000, function () {
    console.log("Weather app listening on port 5000!");
});