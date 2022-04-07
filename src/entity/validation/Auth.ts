import * as t from 'io-ts';

export const AuthCredential = t.type({
    email: t.string,
    password: t.string
});