/** @format */

import { Router } from 'express';

import { authenticate } from '../../middlewares/index.js';
import { getAll, getById } from '../../controllers/customers/index.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const customersRouter = Router();

customersRouter.use(authenticate);

customersRouter.get('/', ctrlWrapper(getAll));

customersRouter.get('/:supplierId', ctrlWrapper(getById));

export default customersRouter;
