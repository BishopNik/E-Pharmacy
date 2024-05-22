/** @format */

import { Products } from '../../models/index.js';

export const editProduct = async (req, res) => {
	const { productId } = req.params;

	const product = await Products.findByIdAndUpdate({ _id: productId }, req.body, {
		new: true,
	});

	if (!product) {
		throw httpError(404, `Product with id=${productId} not found`);
	}

	res.json(product);
};
