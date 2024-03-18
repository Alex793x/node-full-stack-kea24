import express, { Router} from "express";

const PORT = 8080;

const router = Router();
const app = express();

app.use(express.static("public"));

app.listen(PORT, () => console.log("Server listening on localhost:", PORT));

export default { router, app }



