import { sign, SignOptions, VerifyOptions, verify } from 'jsonwebtoken';
import Variable from "../config/Variable";
import fs from 'fs';
import variable from "../config/Variable";

export function generateToken(payload) {
    const signInOptions: SignOptions = {
        algorithm: 'RS256',
        expiresIn: '24h'
    };

    const privateKey = fs.readFileSync(variable.PrivateKey);

    return sign(payload, privateKey, signInOptions);
}

interface TokenPayload {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    role: object|null
}

export function validateToken(token: string): Promise<TokenPayload> {
    const verifyOptions: VerifyOptions = {
        algorithms: ['RS256'],
    };

    return new Promise((resolve, reject) => {
        const publicKey = fs.readFileSync(variable.PublicKey);

        verify(token, publicKey, verifyOptions, (error, decoded: TokenPayload) => {
            if (error) return reject(error);

            resolve(decoded);
        })
    });
}

