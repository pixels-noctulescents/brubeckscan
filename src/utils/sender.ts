import { Response } from "express";

export async function send(res: Response, data: any, error?: Error) {
  if (error) {
    res.status(500).json({
        status: "error",
        message: error.message
    })
  } else {
      res.status(200).json({
        status: "success",
        data,
      });
  }
}
