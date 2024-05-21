/** @format */

import { Router } from 'express';

import { authenticate, isEmptyBody, validateBody } from '../../middlewares/index.js';
import { ctrlWrapper } from '../../utils/index.js';
import {
	getSortProducts,
	addProduct,
	editProduct,
	delProduct,
} from '../../controllers/products/index.js';
import { addProductSchema, editProductSchema } from '../../models/index.js';

const productsRouter = Router();

productsRouter.use(authenticate);

productsRouter.get('/', ctrlWrapper(getSortProducts));

productsRouter.post('/', isEmptyBody, validateBody(addProductSchema), ctrlWrapper(addProduct));

productsRouter.put(
	'/:productId',
	isEmptyBody,
	validateBody(editProductSchema),
	ctrlWrapper(editProduct)
);

productsRouter.delete('/:productId', ctrlWrapper(delProduct));

export default productsRouter;
