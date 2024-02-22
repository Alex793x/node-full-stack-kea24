const express = require("express");
const app = express();


app.use(express.json());


const drinks = [
    {
        id: 1,
        name: "Bloody Mary",
        ingredients: ["vodka", "tomato juice", "spices"],
        currency: "DKK",
        priceValue: 32.0
    },
    {
        id: 2,
        name: "Mojito",
        ingredients: ["lime", "rum", "sugarcane", "mint"],
        currency: "$",
        priceValue: 4.0
    },
    {
        id: 3,
        name: "Black Russian",
        ingredients: ["vodka", "kahlua", "coffee beans"],
        currency: "DKK",
        priceValue: 25.00
    },
    {
        id: 4,
        name: "White Russian",
        ingredients: ["vodka", "kahlua", "milk", "coffee beans"],
        currency: "$",
        priceValue: 4.0
    },
    {
        id: 5,
        name: "Gin Fizz",
        ingredients: ["gin", "lemon juice", "sugar"],
        currency: "DKK",
        priceValue: 30.00
    }
]


// Get ---- 
app.get("/drinks", (req, res) => {
    res.send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
    const id = isNaN(req.query.id) ? req.params.id : Number(req.query.id);
    const drink = drinks.find(drink => drink.id === id);

    if (drink === undefined) {
        res.status(404).send({ data: "Drink not found" });
    } else {
        return res.send({ data: drink });
    }
});

app.get("/drinks/name/:name", (req, res) => {
    const name = req.params.name;
    const drink = drinks.find(drink => drink.name === name);

    if (drink.length < 1) res.status(404).send({ data: "Drink'/s not found" });

    res.send({ data: drink });
});


app.get("/drinks/ingredients/:ingredient", (req, res) => {
    const ingredient = req.params.ingredient;
    const foundIngredient = drinks.some(
        (drink) => drink.ingredients.includes(ingredient)
    );

    if (!foundIngredient) return res.status(404).send({ data: "Drinks not found" });

    const filteredDrinksByIngredient = drinks.filter(
        (drink) => drink.ingredients.includes(ingredient)
    );
    res.send({ data: filteredDrinksByIngredient });

});

app.get("/drinks/priceUnder/:value", (req, res) => {
    const value = parseFloat(req.params.value);
    const drinksUnderValue = drinks.filter(drink => drink.priceValue < value);

    if (drinksUnderValue.length < 1) return res.status(404).send({ data: "No drinks found, with requested ingredient" });
    res.send({ data: drinksUnderValue });
});

app.get("/drinks/currency/:currency", (req, res) => {
    const currency = req.params.currency;
    const filteredDrinksOnCurrency = drinks.filter(drink => drink.currency === currency);

    if (filteredDrinksOnCurrency.length < 1) return res.status(404).send({ data: "Drinks not found" });
    res.send({ data: filteredDrinksOnCurrency });
})


// Post ----
app.post("/drinks", (req, res) => {
    const { name, ingredients, currency, priceValue } = req.body;

    if (typeof name !== "string" || !Array.isArray(ingredients) || typeof currency !== "string" || typeof priceValue !== "number") {
        return res.status(400).send({ data: "Invalid input format" });
     }
     
    const newDrink = {
        id: drinks.length + 1,
        name,
        ingredients,
        currency,
        priceValue
    };

    drinks.push(newDrink);
    res.status(201).send({ data: newDrink });
});


// Put -----
app.put("/drinks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, ingredients, currency, priceValue } = req.body;
    const drinkIndex = drinks.findIndex(drink => drink.id === id);

    if (drinkIndex === -1) return res.status(404).send({ data: "Drink not found" });

    const updatedDrink = { id, name, ingredients, currency, priceValue };
    drinks[drinkIndex] = updatedDrink;
    res.send({ data: updatedDrink });
});


// Patch ----
app.patch("/drinks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const drink = drinks.find(drink => drink.id === id);

    if (!drink) return res.status(404).send({ data: "Drink not found" });

    Object.entries(req.body).map(([key, value]) => {
        drink[key] = value;
    });

    res.send({ data: drink });
});


// Delete -----
app.delete("/drinks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const drinkIndex = drinks.findIndex(drink => drink.id === id);

    if (drinkIndex === -1) return res.status(404).send({ data: "Drink not found" });

    drinks.splice(drinkIndex, 1);
    res.status(204).send({data: "Drink has been deleted"});
});



// ---- EXTRA 

// OPTION ----
app.options("/drinks", (req, res) => {
    res.header("Allow", "GET,POST,OPTIONS");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.sendStatus(204);
});


// HEAD ----
app.head("/drinks", (req, res) => {
    res.header("Content-Type", "application/json");
    res.status(200).end();
});

app.head("/drinks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const drinkExists = drinks.some(drink => drink.id === id);

    if (!drinkExists) return res.status(404).end();
    res.status(200).end();
});




app.listen(8080, () => console.log("Server is running on 8080"));