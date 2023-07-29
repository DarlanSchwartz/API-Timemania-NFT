import { Router } from "express";
import chestRouter from "./chests.routes.js";
import mainRouter from "./main.routes.js";
import accountRouter from "./account.routes.js";
import cardsRouter from "./cards.routes.js";

const router = Router();

router.use(accountRouter);
router.use(chestRouter);
router.use(mainRouter);
router.use(cardsRouter);

export default router;