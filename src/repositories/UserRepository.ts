import {connection} from '../database';
import User from '../entity/User';

export const UserRepository = connection.getRepository(User).extend({

});


