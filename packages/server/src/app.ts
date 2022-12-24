import express from "express";
import morgan from "morgan";
import cors from "cors";
import { Router } from "./routers";
import { Request, Response, NextFunction } from "express";
import { sender } from "./utils/sender";

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
