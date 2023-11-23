import axiosInstance from '../config';
import { Login } from '../models/Auth';

export default class AuthService {

    async loginInUser(login: Login): Promise<string> {

        try {
            const response = await axiosInstance.post('/api/auth/login', login);
            return response.data;
        } catch (e) {
            if (typeof e.response != 'undefined' && typeof e.response.data != 'undefined') {
                if (typeof e.response.data.code != 'undefined') {
                    throw new Error('There has been a problem.');
                }
                throw new Error(e.response.data);
            }
            throw new Error('Could not login');
        }
    }
}