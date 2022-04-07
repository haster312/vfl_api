import faker from 'faker';
import {UserRepository} from "../../src/repositories/UserRepository";
import {AdminRepository} from "../../src/repositories/AdminRepository";

export const createAdmin = async () => {
    const data = {
        first_name: "Admin",
        last_Name: "",
        email: "admin@test.com",
        password: "123456"
    }

    await AdminRepository.createNewAdmin(data);
};

export const randomName = () => {
    return faker.name.findName();
}

export const randomEmail = () => {
    return faker.internet.email();
}

export const randomPassword = () => {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    return retVal;
}

export const randomUser = () => {
    return {
        first_name: randomName(),
        last_name: randomName(),
        email: randomEmail(),
        password: randomPassword(),
        dob: new Date()
    }
}

export const fakeUser = async () => {
    const user = randomUser();

    // Create fake user;
    await UserRepository.createNewUser(user);
    return user;
}

export const clearUserTable = async () => {
    await UserRepository.clear();
}