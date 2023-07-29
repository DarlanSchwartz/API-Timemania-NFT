import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { LoginSchema, RegisterSchema } from "../schemas/main.schemas.js";
import { addCards, getCards, login, register, removeCard } from "../controllers/account.controller.js";

const accountRouter = Router();

accountRouter.post('/login', validateSchema(LoginSchema),login);
accountRouter.post('/cadastro',validateSchema(RegisterSchema) , register);
accountRouter.post('/postItensBau', addCards);
accountRouter.get('/getItensBau/:token', getCards);
accountRouter.delete('/remove-card/:id/:token', removeCard);


export default accountRouter;