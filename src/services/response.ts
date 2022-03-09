import { Response, Request } from 'express';
import { IPagination } from "./pagination";

export default {
    Pagination: (res: Response, data: IPagination, message: String = null) => {
        return res.status(200).json({
            'data': data.rows,
            'current_page': data.current_page,
            'total_row': data.total_row,
            'total_page': data.total_page
        }).end();
    },
    Success: (res: Response, data: Array<Object>|Object, message = null) => {
        return res.status(200).json({
            data: data,
            message: message
        }).end();
    },
    NotFound: (res, message, code = 404) => {
        return res.status(404).json({'message': message}).end();
    },
    Abort: (res, message = null, code = 500) => {
        if (message) {
            if (typeof message == 'string') {
                message = [message];
            }

            return res.status(code).json({'message': message}).end();
        } else {
            return res.status(code).json().end();
        }
    },
    Unauthorized: (res, message = null) => {
        return res.status(403).json({'message': message}).end();
    }
};
