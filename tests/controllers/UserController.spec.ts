import { Api } from '../helpers/Api'
import { Connection } from "../../src/database/Connection";

describe('User controller test', () => {
    beforeAll(async () => {
       await Connection.initialize();
    });

    it('Should return a list of users', async () => {
        const response = await Api.get('/api/user');

        expect(response.statusCode).toEqual(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    afterAll(async () => {
       await Connection.destroy();
    })
});