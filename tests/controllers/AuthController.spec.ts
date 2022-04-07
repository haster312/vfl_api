import { Api, headers } from '../helpers/Api'
import { Connection } from "../../src/database/Connection";
import { clearUserTable, fakeUser, randomEmail, randomPassword } from "../helpers/Seeder";

describe('User Controller Test', () => {
    let email, password;

    beforeAll(async () => {
        await Connection.initialize();
        const user = await fakeUser();
        email = user.email
        password = user.password;
    });

    it('Should return 400 due to wrong email', async () => {
        const response = await Api.post('/api/auth/login')
            .set(headers)
            .send({email: randomEmail()});

        expect(response.statusCode).toEqual(400);
    });

    it('Should return 400 due to wrong password', async () => {
        const response = await Api.post('/api/auth/login')
            .set('Content-type', 'application/json')
            .send({email, password: randomPassword()});

        expect(response.statusCode).toEqual(400);
    });

    it('Should return 200 with token', async () => {
        const response = await Api.post('/api/auth/login')
            .set('Content-type', 'application/json')
            .send({email, password});

        expect(response.statusCode).toEqual(200);
    });

    afterAll(async () => {
        await clearUserTable();

        await Connection.destroy();
    })
});