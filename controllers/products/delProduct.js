/** @format */

import { Products } from '../../models/index.js';

export const delProduct = async ({ params: { productId } }, res) => {
	const product = await Products.findByIdAndDelete({ _id: productId });

	if (!product) {
		throw httpError(404, `Product with id=${productId} not found`);
	}

	res.json({
		name: product.name,
		_id: product._id,
	});
};
