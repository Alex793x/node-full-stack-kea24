import { Router } from "express";
const router = Router();
router.get("/playpoint", (req, res) => {
    res.send({ data: "yaaaaaaaay!" });
});
export default router;
