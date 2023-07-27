import { Router } from "express";
import { createChest, getAllChests, getChest } from "../controllers/chests.controller.js";
import { NewChestSchema} from "../schemas/main.schemas.js"; // ---> NewItemSchema can be used as a middleware to validate an item structure
import validateSchema from "../middlewares/validateSchema.js";

const chestRouter = Router();

chestRouter.get('/chest/:id', getChest); 
chestRouter.get('/chests', getAllChests); 
chestRouter.post('/chest',validateSchema(NewChestSchema) ,createChest); 

export default chestRouter;