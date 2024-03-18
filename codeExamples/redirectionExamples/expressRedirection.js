import express from 'express';
const app = express();
const PORT = 3000;

// Route that redirects from "/old-page" to "/new-page"
app.get('/old-page', (req, res) => {
  res.redirect(301, '/new-page');
});

// Route for "/new-page"
app.get('/new-page', (req, res) => {
  res.send('Welcome to the new page!');
});

app.listen(PORT, () => console.log("Server running on http://localhost", PORT));
