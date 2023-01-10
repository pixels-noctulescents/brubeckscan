import express from "express";
import { favoritesController } from "../controllers/favorites/favorites.controller";

const favoritesRouter = express.Router();

favoritesRouter.get("/:id", [], favoritesController.find);
favoritesRouter.post("/", [], favoritesController.create);
favoritesRouter.delete("/:id", [], favoritesController.delete);
favoritesRouter.post("/:id", [], favoritesController.update);

export { favoritesRouter };
