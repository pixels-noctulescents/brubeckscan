export type JSendResponse = JSendErrorResponse | JSendFailResponse | JSendSuccessResponse

export interface JSendSuccessResponse {
    status: "success";
    data: any;
}

export interface JSendFailResponse {
    status: "fail";
    data: any;
}

export interface JSendErrorResponse {
    status: "error";
    message: string;
}