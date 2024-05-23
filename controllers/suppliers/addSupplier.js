/** @format */

import { Suppliers } from '../../models/index.js';

export async function addSupplier({ body }, res) {
	const dataSupplier = await Suppliers.create({ ...body });

	res.status(201).json(dataSupplier);
}
