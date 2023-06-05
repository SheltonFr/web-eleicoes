import { Router } from "express";
import voterController from "../controllers/voter.controller";
import { validId } from "../middlewares/global.middleware";

const router: Router = Router();
router.get("/", voterController.findAll)
router.post("/", voterController.create);
router.get("/:id/activate", validId ,voterController.toggleActiveState)

export default router;
