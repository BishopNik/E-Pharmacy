/** @format */

import { Products } from '../../models/index.js';

export const getSortProducts = async (req, res) => {
	const { sortBy, revers, nameProduct } = req.query;

	const query = nameProduct ? { name: { $regex: nameProduct, $options: 'i' } } : {};

	let products = await Products.find(query).sort(sortBy);

	if (Number(revers)) {
		products = products.reverse();
	}

	res.json(products);
};
