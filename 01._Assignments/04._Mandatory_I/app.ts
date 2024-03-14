import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';

import { homepagePage, contactPage, aboutPage } from './modules/template_engine/readPages.js';
import { cookbookContentLoader } from './modules/content_manager/cookbookLoader.js';

//For env File 
dotenv.config();


const app: Application = express();

app.use(express.static("public"));
app.use(express.static("dist"));
app.use(express.json());

const port = (process.env.PORT || 8080);

cookbookContentLoader();

// Homepage  ------
app.get('/', (req: Request, res: Response) => {
  res.send(homepagePage);
});

app.get("/api/cookbook", (req: Request, res: Response) => {
  res.send(cookbookContentLoader())
})



app.get("/contact", (req: Request, res: Response) => {
  res.send(contactPage);
})

app.get("/about", (req: Request, res: Response) => {
  res.send(aboutPage);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});