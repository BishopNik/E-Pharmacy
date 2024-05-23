/** @format */

import { Suppliers } from '../../models/index.js';

export async function editSupplier({ params: { supplierId }, body }, res) {
	const dataSupplier = await Suppliers.findByIdAndUpdate({ _id: supplierId }, body, {
		new: true,
	});

	if (!dataSupplier) {
		throw httpError(404, `Supplier with id=${supplierId} not found`);
	}

	res.json(dataSupplier);
}
