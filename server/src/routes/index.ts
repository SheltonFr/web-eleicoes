import { Router } from "express";
import authRoutes from "./auth.routes";
import voterRoutes from "./voter.routes";
const router: Router = Router();

router.use("/auth", authRoutes);
router.use("/voter", voterRoutes);

export default router;
