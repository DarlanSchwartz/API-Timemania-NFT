import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { CardSchema } from "../schemas/main.schemas.js";
import { insertCard } from "../controllers/cards.controller.js";

const cardsRouter = Router();

cardsRouter.post('/insert-card/:chest',validateSchema(CardSchema) , insertCard); 

export default cardsRouter;