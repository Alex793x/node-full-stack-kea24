const express = require("express");

const app = express();

const PORT = 8080;

app.get("/month", (req, res) => {
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
    const formattedDate = new Intl.DateTimeFormat("en-us").format(new Date());

    res.send({ data: currentMonth });
})

app.get("/date", (req, res) => {
    const currentDate = Date();
    res.send({data: currentDate});
})

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

app.get("/today", (req, res) => {
    res.send({ data: weekDays[(new Date().getDay() + 6) % 7] });
})

app.listen(8080, () => console.log("Server is running on port: ", PORT))