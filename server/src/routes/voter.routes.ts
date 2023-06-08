import { Router } from "express";
import voterController from "../controllers/voter.controller";
import { validId } from "../middlewares/global.middleware";
import { adminMiddleware } from "../middlewares/auth.middleware";

const router: Router = Router();
router.get("/", voterController.findAll);
router.post("/", voterController.create);
router.get(
  "/:id/activate",
  adminMiddleware,
  validId,
  voterController.toggleActiveState
);

router.get("/:id", validId, voterController.findById);
export default router;
