const express = require('express');
const app = express();
const PORT = 8080;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route handler for the /about page
app.get('/about', (req, res) => {
  res.send('About us');
});

// Start the server on port 8080
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost`, PORT);
});

