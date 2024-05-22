/** @format */

import { Products } from '../../models/index.js';

export const addProduct = async (req, res) => {
	const product = await Products.create({ ...req.body });

	res.status(201).json(product);
};
