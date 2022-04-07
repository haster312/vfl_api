// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare namespace Express {
    export interface Request {
        user: {
            id: number,
            first_name: string,
            last_name: string,
            email: string,
            role: object|null
        }
    }
}
