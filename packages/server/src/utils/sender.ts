import { Response } from "express";
import { JSendSuccessResponse, JSendErrorResponse, JSendFailResponse } from "@brubeckscan/common/types/responses";

const SUCESS_STATUS = "success";
const FAIL_STATUS = "fail";
const ERROR_STATUS = "error";

const sender = () => { };

sender.success = async (res: Response, data: any, status: number = 200) => {
  const response: JSendSuccessResponse = { status: SUCESS_STATUS, data: data };

  return res.status(status).json(response);
};

sender.failure = async (res: Response, data: any, status: number = 500) => {
  const response: JSendFailResponse = { status: FAIL_STATUS, data: data };

  return res.status(status).json(response);
};

sender.error = async (res: Response, error: Error, status: number = 500) => {
  const response: JSendErrorResponse = { status: ERROR_STATUS, message: error.message };

  return res.status(status).json(response);
};

export { sender };
