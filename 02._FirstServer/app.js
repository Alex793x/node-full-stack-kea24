
const app = require("express")();
// kill -9 $(lsof -t -i:8080)
app.listen(8080, () => console.log("Listening on port 8080"));

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/secondRoute", (req, res) => {
    res.send({date: [1,2,3,4,5,6]})
})

app.get("/thirdRoute", (req, res) => {
    res.send({date: {Alex: 30}})
})

app.get("/fourthRoute/:someValue", (req, res) => {
    const firstValue = req.params.someValue;
    res.send({date: firstValue});
})

app.get("/fourthRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    res.send({data: firstValue, otherData: secondValue});
})

app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>")
})

/*  Assignment
        start with the balance of 100 in the wallet
        every time a client calls this route the value of paymentOut should be subtracted from the balance
        if the paymentOut creates a balance below 0 then tell the client "Sorry, not enough funds"
 */

let walletBalance = 100;

app.get("/wallet/:paymentOut", (req, res) => {
    const paymentOut = Number(req.params.paymentOut);
    walletBalance -= paymentOut;
    walletBalance < 0 ?
        res.send({response: "Sorry, not enough funds"}) :
        res.send({balance: walletBalance});
})


