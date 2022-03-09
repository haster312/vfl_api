import UserModel from '../models/user';

module.exports = {
    async getUserDetail(id) {
        return UserModel.findById(id)
            .populate('image')
            .exec();
    }
};

