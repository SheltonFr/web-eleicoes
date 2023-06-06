import { Router } from "express";
import partyController from "../controllers/party.controller";

const router: Router = Router();

router.post('/', partyController.create)
router.get('/', partyController.findAll)

export default router;
