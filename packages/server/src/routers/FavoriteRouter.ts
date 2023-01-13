import express from "express";
import FavoriteController from "../controllers/favorite/FavoriteController";

const FavoriteRouter = express.Router();

FavoriteRouter.get("/:id", [], FavoriteController.find);
FavoriteRouter.post("/", [], FavoriteController.create);
FavoriteRouter.delete("/:id", [], FavoriteController.delete);
FavoriteRouter.post("/:id", [], FavoriteController.update);

export default FavoriteRouter;
