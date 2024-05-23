/** @format */

import { Products } from '../../models/index.js';

export const editProduct = async ({ params: { productId }, body }, res) => {
	const product = await Products.findByIdAndUpdate({ _id: productId }, body, {
		new: true,
	});

	if (!product) {
		throw httpError(404, `Product with id=${productId} not found`);
	}

	res.json(product);
};
