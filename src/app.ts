import express from "express";
import morgan from "morgan";
import { Router } from "./routers";
import { Request, Response, NextFunction } from "express";
import { sender } from "./utils/sender";

const app = express();

app.use(express.json());

// Logger
app.use(morgan("dev"));

// Router
app.use("/api", Router);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  sender.error(res, err);
});

export default app;
