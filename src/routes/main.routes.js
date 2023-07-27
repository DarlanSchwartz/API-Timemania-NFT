import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { TeamSchema } from "../schemas/main.schemas.js";
import { getTeam, getTeams, registerTeam } from "../controllers/main.controller.js";

const mainRouter = Router();

mainRouter.get('/team/:team', getTeam); 
mainRouter.get('/teams', getTeams); 
mainRouter.post('/team',validateSchema(TeamSchema) ,registerTeam); 

export default mainRouter;