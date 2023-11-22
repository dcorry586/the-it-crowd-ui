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

            req.session.token = await authService.loginInUser(data);
            // if (tokenRes == null) {
            //     throw new Error('Failed To Get Token.');
            // }
            // req.session.token = tokenRes;
            res.redirect('/');

        } catch (e) {
            // console.log(e)
            res.locals.errormessage = e.message;
            let payload = {
                pageTitle: 'Failed Login'
            };
            res.render('pages/login', payload);
        }
    });

    app.post('/logout', async (req: Request, res: Response) => {

        req.session.token = undefined;

        res.redirect('/');
    });
};
