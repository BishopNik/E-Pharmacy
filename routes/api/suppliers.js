/** @format */

import { Router } from 'express';

import { validateBody, authenticate, isEmptyBody } from '../../middlewares/index.js';
import { ctrlWrapper } from '../../utils/index.js';
import { getSuppliers, addSupplier, editSupplier } from '../../controllers/suppliers/index.js';
import { addSupplierSchema, editSupplierSchema } from '../../models/index.js';

const suppliersRouter = Router();

suppliersRouter.use(authenticate);

suppliersRouter.get('/', ctrlWrapper(getSuppliers));

suppliersRouter.post('/', isEmptyBody, validateBody(addSupplierSchema), ctrlWrapper(addSupplier));

suppliersRouter.put(
	'/:supplierId',
	isEmptyBody,
	validateBody(editSupplierSchema),
	ctrlWrapper(editSupplier)
);

export default suppliersRouter;
