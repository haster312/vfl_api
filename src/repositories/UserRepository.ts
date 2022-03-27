import { Connection } from '../database/Connection';
import User from '../entity/User';

export const UserRepository = Connection.getRepository(User).extend({
    async getUserById(userId) {
        return this.findOneById(userId);
    },
    async createNewUser(data) {
        const userData = this.create(data);
        return await this.save(userData);
    },
    async removeUser(user: User) {
        return await this.remove(user);
    }
});


