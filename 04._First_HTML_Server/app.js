import express from "express";
const app = express();

app.use(express.json());

app.use(express.static("public"));

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

app.get("/proxy", (req, res) => {
    fetch('https://www.google.com')
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Error fetching data from Google');
            }
        })
        .then(body => {
            res.send(body);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

const PORT = 8080;
app.listen(8080, () => console.log("Server is listening on port", PORT))