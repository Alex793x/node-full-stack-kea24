import express from 'express';
import { homepagePage, contactPage, aboutPage } from './modules/template_engine/readPages.js';
import { cookbookContent } from './modules/template_engine/templatingEngine.js';
const PORT = 8080;
const app = express();
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(express.json());
// Homepage  ------
app.get('/', (req, res) => {
    res.send(homepagePage);
});
app.get("/api/cookbook", (req, res) => {
    res.send(cookbookContent);
});
app.get("/contact", (req, res) => {
    res.send(contactPage);
});
app.get("/about", (req, res) => {
    res.send(aboutPage);
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:`, PORT);
});
