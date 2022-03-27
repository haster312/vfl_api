import { Api } from '../helpers/Api'
import { Connection } from "../../src/database/Connection";

describe('User Controller Test', () => {
    beforeAll(async () => {
       await Connection.initialize();
    });

    it('Get Users, Should return success with list of users', async () => {
        const response = await Api.get('/api/user');

        expect(response.statusCode).toEqual(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('Get user by Id, Should return user', async () => {
        const response = await Api.get('/api/user/1');

        expect(response.statusCode).toEqual(200);
        // expect(Array.isArray(response.body.data)).toBe(true);
    });

    afterAll(async () => {
       await Connection.destroy();
    })
});