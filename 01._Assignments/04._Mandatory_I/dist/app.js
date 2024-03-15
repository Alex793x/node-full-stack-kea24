import express from 'express';
import { homepagePage, contactPage, aboutPage } from './modules/template_engine/readPages.js';
import { cookbookContentLoader } from './modules/content_manager/cookbookLoader.js';
const PORT = 8080;
const app = express();
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(express.json());
cookbookContentLoader();
// Homepage  ------
app.get('/', (req, res) => {
    res.send(homepagePage);
});
app.get("/api/cookbook", (req, res) => {
    res.send(cookbookContentLoader());
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
