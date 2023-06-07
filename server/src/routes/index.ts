import { Router } from "express";
import authRoutes from "./auth.routes";
import voterRoutes from "./voter.routes";
import partyRoutes from "./party.routes";
import userRoutes from "./user.routes";
import candidateRoutes from "./candidate.routes";
const router: Router = Router();

router.use("/auth", authRoutes);
router.use("/voter", voterRoutes);
router.use("/party", partyRoutes);
router.use("/user", userRoutes);
router.use("/candidate", candidateRoutes);

export default router;
