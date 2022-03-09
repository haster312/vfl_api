import { model } from "mongoose";
import { IUser } from "./interface/i_user";
import UserSchema from "./schema/s_user";

const UserModel = model<IUser>("user", UserSchema);

export default UserModel;