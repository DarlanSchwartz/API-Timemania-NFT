import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { LoginSchema, RegisterSchema } from "../schemas/main.schemas.js";
import { login, register } from "../controllers/account.controller.js";

const accountRouter = Router();

accountRouter.post('/login', validateSchema(LoginSchema),login);
accountRouter.post('/cadastro',validateSchema(RegisterSchema) , register);

export default accountRouter;