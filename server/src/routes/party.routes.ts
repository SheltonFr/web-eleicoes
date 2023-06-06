import { Router } from "express";
import partyController from "../controllers/party.controller";
import { validId } from "../middlewares/global.middleware";

const router: Router = Router();

router.post('/', partyController.create)
router.get('/', partyController.findAll)
router.get('/:id', validId, partyController.findById)

export default router;
