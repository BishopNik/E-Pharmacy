/** @format */

import { Router } from 'express';

import { authenticate } from '../../middlewares/index.js';
import { sortOrders } from '../../controllers/orders/index.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const ordersRouter = Router();

ordersRouter.use(authenticate);

ordersRouter.get('/', ctrlWrapper(sortOrders));

export default ordersRouter;
