import { Router } from "express";
import { cookbookContent } from '../modules/template_engine/templatingEngine.js';
const router = Router();
router.get("/api/cookbook", (req, res) => {
    res.send(cookbookContent);
});
export default router;
