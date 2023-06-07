import userController from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.get('/', userController.findAll)
router.post("/", userController.create);

export default router;
