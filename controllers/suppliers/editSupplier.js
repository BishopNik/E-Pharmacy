/** @format */

import { Suppliers } from '../../models/index.js';

export async function editSupplier(req, res) {
	const { supplierId } = req.params;

	const dataSupplier = await Suppliers.findByIdAndUpdate({ _id: supplierId }, req.body, {
		new: true,
	});

	if (!dataSupplier) {
		throw httpError(404, `Supplier with id=${supplierId} not found`);
	}

	res.json(dataSupplier);
}
