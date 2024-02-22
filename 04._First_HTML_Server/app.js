const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html")
})

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
})

const PORT = 8080;
app.listen(8080, () => console.log("Server is listening on port", PORT))