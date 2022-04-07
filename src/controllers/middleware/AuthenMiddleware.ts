import { Request, Response } from 'express';
import { AuthCredential } from "../../entity/validation/Auth";
import { isLeft } from 'fp-ts/lib/Either';
import {Abort, Unauthorized} from "../../services/Response";
import Message from "../../config/Message";
import {validateToken} from "../../helpers/JWT";

export const validateLogin = (req: Request, res: Response, next) => {
    const data = req.body;
    const credentials = AuthCredential.decode(data);
    if (isLeft(credentials)) {
        return Abort(res, Message.InvalidCredentials, 400);
    }

    next();
}

export const checkAuth = async (req: Request, res: Response, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return Unauthorized(res);
    }

    const token = authorization.replace("Bearer ", "");
    const validatedToken = await validateToken(token);
    if (!validatedToken) {
        return Unauthorized(res);
    }

    req.user = validatedToken;
    next();
}