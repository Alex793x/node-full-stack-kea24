import { Router } from "express";
import { homepagePage } from '../modules/template_engine/readPages.js';

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage);
});

export default router;