const express = require("express");
const app = express();

app.use(express.json());

const friends = ["Alexander", "Mikkel", "Anders", "James", "John Doe"];


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html")
})

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
})

app.get("/greeting", (req, res) => {
    const visitedUserName = req.query.name;

    if (friends.includes(visitedUserName)) {
        return res.send({data: `Hi ${visitedUserName}` });
    } else {
        res.send({ data: "hello stranger" });
    }

})

app.get("/knownpeople", (req, res) => {
    res.send({ data: friends.length });
})

const PORT = 8080;
app.listen(8080, () => console.log("Server is listening on port", PORT))