import { Router } from "express";
import partyController from "../controllers/party.controller";
import { validId } from "../middlewares/global.middleware";
import { adminMiddleware } from "../middlewares/auth.middleware";

const router: Router = Router();

router.post("/", adminMiddleware, partyController.create);
router.put("/:id", validId, adminMiddleware, partyController.update);
router.get("/", partyController.findAll);
router.get("/search", partyController.findByName);
router.get("/:id", validId, partyController.findById);
router.delete("/:id", validId, adminMiddleware, partyController.deleteOne);

export default router;
