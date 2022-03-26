import { Response } from 'express';
import { IPagination } from "./Pagination";

export const Pagination = (res: Response, data: IPagination) => {
    return res.status(200).json({
        'data': data.rows,
        'current_page': data.current_page,
        'total_row': data.total_row,
        'total_page': data.total_page
    }).end();
};

export const Success = (res: Response, data: Array<any> |Record<string, unknown>, message = null) => {
    return res.status(200).json({
        data: data,
        message: message
    }).end();
};

export const NotFound = (res: Response, message, code = 404) => {
    return res.status(code).json({'message': message}).end();
};

export const Abort = (res: Response, message: string|Array<string> = null, code = 500) => {
    if (message) {
        if (typeof message == 'string') {
            message = [message];
        }

        return res.status(code).json({'message': message}).end();
    } else {
        return res.status(code).json().end();
    }
};

export const Unauthorized =(res: Response, message = null) => {
    return res.status(403).json({'message': message}).end();
};

