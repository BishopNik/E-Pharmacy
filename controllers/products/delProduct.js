/** @format */

import { Products } from '../../models/index.js';

export const delProduct = async (req, res) => {
	const { productId } = req.params;

	const product = await Products.findByIdAndDelete({ _id: productId, owner });
	if (!product) {
		throw httpError(404, `Product with id=${productId} not found`);
	}

	res.json({
		name: product.name,
		_id: product._id,
	});
};
