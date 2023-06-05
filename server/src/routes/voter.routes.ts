import { Router } from "express";
import voterController from "../controllers/voter.controller";

const router: Router = Router();
router.post("/", voterController.create);

export default router;
