import { NextFunction } from 'connect';
import { Request, Response, Application } from 'express';
const express = require('express');
const app: Application = express();
const path = require('path');
const session = require('express-session');
const authMiddleware = require('./middleware/auth');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, '/public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: process.env.SESSION_SECRET_UI, cookie: {maxAge: 3600000} }));

declare module 'express-session' {
    interface SessionData {
      token: String;
    }
  }

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.session.token !== undefined && req.session.token.length > 0) {
      res.locals.sessionValid = true;
  } else {
      res.locals.sessionValid = false;
  }
  next();
});

require('./controllers/AuthController')(app);
require('./controllers/HomeController')(app);

app.use(authMiddleware);
require('./controllers/JobsController')(app);
