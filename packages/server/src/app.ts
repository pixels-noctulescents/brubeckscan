import express from "express";
import morgan from "morgan";
import cors from "cors";
import Router from "./routers";
import { sender } from "./utils/sender";
import type { Request, Response, NextFunction } from "express";

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api", Router);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  sender.error(res, err);
});

export default app;
