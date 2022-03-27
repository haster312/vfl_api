import { Api } from '../helpers/Api'
import { Connection } from "../../src/database/Connection";

import { randomName, randomEmail, randomPassword } from "../helpers/Seeder";
let userId: number;

describe('User Controller Test', () => {
    beforeAll(async () => {
       await Connection.initialize();
    });

    it('Create new user, Should return success with user', async () => {
        const data = {
            first_name: randomName(),
            last_name: randomName(),
            email: randomEmail(),
            password: randomPassword()
        }

        const response = await Api.post('/api/user')
            .set('Content-type', 'application/json')
            .send(data);

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body.data).toEqual('object');

        userId = response.body.data.id;
    });

    it('Get user by Id, Should return user', async () => {
        const response = await Api.get(`/api/user/${userId}`);

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body.data).toEqual('object');
    });

    it('Get Users, Should return success with list of users', async () => {
        const response = await Api.get('/api/user');

        expect(response.statusCode).toEqual(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it.skip('Remove User, Should return success 200', async () => {
        const response = await Api.delete(`/api/user/${userId}`);

        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toEqual('Success');
    });

    afterAll(async () => {
       await Connection.destroy();
    })
});