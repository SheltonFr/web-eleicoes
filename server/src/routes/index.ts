import { Router } from "express";
import authRoutes from "./auth.routes";
import voterRoutes from "./voter.routes";
import partyRoutes from "./party.routes";
import userRoutes from "./user.routes";
import candidateRoutes from "./candidate.routes";
import voteRoutes from "./vote.routes";
import statisticController from "../controllers/statistic.controller";
const router: Router = Router();

router.use("/auth", authRoutes);
router.use("/voter", voterRoutes);
router.use("/party", partyRoutes);
router.use("/user", userRoutes);
router.use("/candidate", candidateRoutes);
router.use("/vote", voteRoutes);

router.get("/statistics", statisticController.getStatistics);
export default router;
