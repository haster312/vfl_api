import { Connection } from '../database/Connection';
import User from '../entity/User';

export const UserRepository = Connection.getRepository(User).extend({

});


