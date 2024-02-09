
const app = require("express")();
app.listen(8080, () => console.log("Server is running on 8080"));

const drinks = [
    {
        name: "Bloody Mary",
        ingredients: ["vodka", "tomato juice", "spices"]
    },
    {
        name: "Mojito",
        ingredients: ["lime", "rum", "sugarcane", "mint"],
        currency: "$",
        priceValue: 4.0
    },
    {
        name: "Black Russian",
        ingredients: ["vodka", "kahlua", "coffee beans"],
        currency: "DKK",
        priceValue: 25.00
    },
    {
        name: "White Russian",
        ingredients: ["vodka", "kahlua", "milk", "coffee beans"],
        currency: "$",
        priceValue: 4.0
    },
    {
        name: "Gin Fizz",
        ingredients: ["gin", "lemon juice", "sugar"],
        currency: "DKK",
        priceValue: 30.00
    }
]

app.get("/drinks", (req, res) => {
    res.send(drinks)
})


app.get("/drinks/:name", (req, res) => {
    const name = req.params.name;
    const drink = drinks.find(drink => drink.name === name);
    res.send(drink);
});

app.get("/drinks/:name/ingredients", (req, res) => {
    const name = req.params.name;
    const drink = drinks.find(drink => drink.name === name);
    res.send(drink.ingredients);
});


app.get("drinks/:priceUnder/:value", (req, res) => {
    const value = Number(req.params.value);
    const drinksUnderValue = drinks.filter(drinks => drinks.priceValue < value);
    res.send(drinksUnderValue);
});