import express from "express";
import morgan from "morgan";
import { Router } from "./routers";

const app = express();

// Logger
app.use(morgan("dev"));

// Router
app.use("/api", Router);

export default app;
