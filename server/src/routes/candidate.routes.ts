import { Router } from "express";
import candidateController from "../controllers/candidate.controller";
import { adminMiddleware } from "../middlewares/auth.middleware";

const router: Router = Router();

router.post("/", adminMiddleware, candidateController.create);
router.get("/", candidateController.findAll);

export default router;
