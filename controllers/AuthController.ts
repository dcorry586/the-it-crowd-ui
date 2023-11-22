import { Request, Response, Application } from 'express';
import { Login } from '../models/Auth';
import AuthService from '../services/AuthService';

module.exports = function (app: Application) {
    app.get('/login', async (req: Request, res: Response) => {
        res.render('pages/login', { pageTitle: 'Login Page', token: req.session.token });
    });

    app.post('/login', async (req: Request, res: Response) => {

        try {
            let data: Login = req.body;
            let authService = new AuthService();

            let tokenRes: String = await authService.loginInUser(data);
            if (tokenRes == null) {
                throw new Error('Failed To Get Token.');
            }
            req.session.token = tokenRes;
            res.redirect('/');
        } catch (e) {
            let payload = {
                pageTitle: 'Failed Login', errormessage: 'Login Failed',
                token: req.session.token
            };
            res.render('pages/login', payload);
        }
    });

    app.post('/logout', async (req: Request, res: Response) => {

        req.session.token = undefined;

        res.redirect('/');
    });
};
