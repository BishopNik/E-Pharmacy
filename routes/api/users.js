/** @format */

import { Router } from 'express';

import { validateBody, authenticate, isEmptyBody } from '../../middlewares/index.js';
import { loginSchema } from '../../models/index.js';
import { login, logout, getUserInfo, refresh } from '../../controllers/users/index.js';
import { ctrlWrapper } from '../../utils/index.js';

const usersRouter = Router();

// Login
usersRouter.post('/login', isEmptyBody, validateBody(loginSchema), ctrlWrapper(login));

// Refresh user
usersRouter.get('/refresh', authenticate, ctrlWrapper(refresh));

// Log out
usersRouter.get('/logout', authenticate, ctrlWrapper(logout));

// Get Info
usersRouter.get('/user-info', authenticate, ctrlWrapper(getUserInfo));

export default usersRouter;
