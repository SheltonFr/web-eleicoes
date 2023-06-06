import { Router } from "express";
import partyController from "../controllers/party.controller";
import { validId } from "../middlewares/global.middleware";

const router: Router = Router();

router.post('/', partyController.create)
router.put('/:id', validId , partyController.update)
router.get('/', partyController.findAll)
router.get('/search', partyController.findByName)
router.get('/:id', validId, partyController.findById)


export default router;
