/** @format */

import { isValidObjectId } from 'mongoose';

import { httpError } from '../utils/index.js';

export const isValidId = ({ params }, _res, next) => {
	const { productId, customerId, supplierId } = params;

	if (!productId && !customerId && !supplierId) next(httpError(400, `Must be id`));

	if (productId && !isValidObjectId(productId))
		next(httpError(400, `${productId} is not valid id`));

	if (customerId && !isValidObjectId(customerId))
		next(httpError(400, `${customerId} is not valid id`));

	if (supplierId && !isValidObjectId(supplierId))
		next(httpError(400, `${supplierId} is not valid id`));

	next();
};
