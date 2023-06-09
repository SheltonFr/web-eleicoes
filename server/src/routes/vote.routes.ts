import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import voteController from "../controllers/vote.controller";
const router: Router = Router();

// :id => id do candidato
// id do eleitor, chegará via jswonwebtoken
router.get("/:id", authMiddleware, voteController.voteCandidate);

export default router;
