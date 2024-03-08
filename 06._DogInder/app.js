import express from "express";
import path from "path";
import getMatches from "./utils/matches.js"

const app = express();
const PORT = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
})

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve("public/pages/matches/matches.html"));
})

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({data: matches})
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("public/pages/contact/contact.html"))
})

app.listen(PORT, () => console.log("Server is listening on port", PORT));