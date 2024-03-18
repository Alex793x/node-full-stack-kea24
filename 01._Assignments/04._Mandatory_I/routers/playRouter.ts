import { Router, Request, Response } from "express";

const router = Router();

router.get("/playpoint", (req: Request, res: Response) => {
    res.send({ data: "yaaaaaaaay!"});
})

export default router;