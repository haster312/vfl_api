import request from 'supertest';
import app from '../../src/app';

export const headers = {
    'Content-type': 'application/json',
    'Authorization': ''
}
export const Api = request(app);