import express from "express";
import getMatches from "./utils/matches.js"

import { homepagePage, matchesPage, contactPage } from "./utils/readPages.js";

const app = express();
const PORT = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(homepagePage);
})

app.get("/matches", (req, res) => {
    res.send(matchesPage);
})

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({data: matches})
})

app.get("/contact", (req, res) => {
    res.send(contactPage);
})


app.get("/page", (req, res) => {
    res.send("")
})

app.listen(PORT, () => console.log("Server is listening on port", PORT));