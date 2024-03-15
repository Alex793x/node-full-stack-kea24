import express, { Request, Response , Application } from 'express';

import { homepagePage, contactPage, aboutPage } from './modules/template_engine/readPages.js';
import { cookbookContent } from './modules/template_engine/templatingEngine.js';

const PORT = 8080;


const app: Application = express();

app.use(express.static("public"));
app.use(express.static("dist"));
app.use(express.json());

// Homepage  ------
app.get('/', (req: Request, res: Response) => {
  res.send(homepagePage);
});

app.get("/api/cookbook", (req: Request, res: Response) => {
  res.send(cookbookContent)
})



app.get("/contact", (req: Request, res: Response) => {
  res.send(contactPage);
})

app.get("/about", (req: Request, res: Response) => {
  res.send(aboutPage);
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:`, PORT);
});