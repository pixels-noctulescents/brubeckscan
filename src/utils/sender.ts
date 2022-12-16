import { Response } from "express";

const SUCESS_STATUS = "success";
const FAIL_STATUS = "fail";
const ERROR_STATUS = "error";

const sender = () => {};

sender.success = async (res: Response, data: any, status: number = 200) => {
  res.status(status).json({ status: SUCESS_STATUS, data: data });
};
sender.failure = async (res: Response, data: any, status: number = 500) => {
  res.status(status).json({ status: FAIL_STATUS, data: data });
};
sender.error = async (res: Response, error: Error, status: number = 500) => {
  res.status(status).json({ status: ERROR_STATUS, message: error.message });
};

export { sender };
