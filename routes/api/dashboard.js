/** @format */

import { Router } from 'express';

import { authenticate } from '../../middlewares/index.js';
import { getAll } from '../../controllers/dashboard/index.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const dashboardRouter = Router();

dashboardRouter.use(authenticate);

dashboardRouter.get('/', ctrlWrapper(getAll));

export default dashboardRouter;
