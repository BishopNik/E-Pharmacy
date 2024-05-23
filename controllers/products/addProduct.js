/** @format */

import { Products } from '../../models/index.js';

export const addProduct = async ({ body }, res) => {
	const product = await Products.create({ ...body });

	res.status(201).json(product);
};
