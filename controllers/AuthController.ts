import { Request, Response, Application } from 'express';
import { Login } from '../models/Auth';
import AuthService from '../services/AuthService';

module.exports = function (app: Application) {
    let authService = new AuthService();

    app.get('/login', async (req: Request, res: Response) => {
        res.render('pages/login', { pageTitle: 'Login Page', token: req.session.token });
    });

    app.post('/login', async (req: Request, res: Response) => {

        try {
            let data: Login = req.body;

            req.session.token = await authService.loginInUser(data);
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
