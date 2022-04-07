import { Connection } from '../database/Connection';
import Admin from '../entity/Admin';

export const AdminRepository = Connection.getRepository(Admin).extend({
    async getAdminById(adminId) {
        return this.findOneById(adminId);
    },
    async createNewAdmin(data) {
        const userData = this.create(data);
        return await this.save(userData);
    },
    async removeUser(admin: Admin) {
        return await this.remove(admin);
    }
});


