import { Router } from "express";
import candidateController from "../controllers/candidate.controller";

const router: Router = Router();

router.post("/", candidateController.create);
router.get("/", candidateController.findAll);

export default router;
