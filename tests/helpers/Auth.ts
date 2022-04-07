import { randomUser} from "./Seeder";
import {Api} from "./Api";
import {UserRepository} from "../../src/repositories/UserRepository";

export const login = async () => {
    const user = randomUser();
    await UserRepository.createNewUser(user);

    const { body } = await Api.post('/api/auth/login')
        .set('Content-type', 'application/json')
        .send(user);

    return `Bearer ${body.data.token}`;
}