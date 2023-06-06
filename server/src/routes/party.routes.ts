import { Router } from "express";
import partyController from "../controllers/party.controller";

const router: Router = Router();

router.post('/', partyController.create)

export default router;
