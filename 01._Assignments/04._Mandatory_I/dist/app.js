import express from 'express';
import dotenv from 'dotenv';
import { homepagePage, contactPage, aboutPage } from './modules/template_engine/readPages.js';
import { cookbookContentLoader } from './modules/content_manager/cookbookLoader.js';
//For env File 
dotenv.config();
const app = express();
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(express.json());
const port = (process.env.PORT || 8080);
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
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
