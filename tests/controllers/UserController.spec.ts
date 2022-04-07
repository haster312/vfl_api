import {Api, headers} from '../helpers/Api'
import {Connection} from "../../src/database/Connection";
import {clearUserTable, randomUser} from "../helpers/Seeder";
import {login} from "../helpers/Auth";

let userId: number;

describe('User Controller Test', () => {
    beforeAll(async () => {
        await Connection.initialize();
        headers.Authorization = await login();
    });

    it('Create new user, Should return success with user', async () => {
        const data = randomUser();

        const response = await Api.post('/api/user')
            .set(headers)
            .send(data);
        console.log(response.body);
        expect(response.statusCode).toEqual(200);
        expect(typeof response.body.data).toEqual('object');

        userId = response.body.data.id;
    });

    it('Get user by Id, Should return user', async () => {
        const response = await Api.get(`/api/user/${userId}`).set(headers);

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body.data).toEqual('object');
    });

    it('Get Users, Should return success with list of users', async () => {
        const response = await Api.get('/api/user').set(headers);

        expect(response.statusCode).toEqual(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('Remove User, Should return success 200', async () => {
        const response = await Api.delete(`/api/user/${userId}`).set(headers);

        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toEqual('Success');
    });

    afterAll(async () => {
        await clearUserTable();
        await Connection.destroy();
    })
});