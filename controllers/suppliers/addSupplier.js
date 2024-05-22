/** @format */

import { Suppliers } from '../../models/index.js';

export async function addSupplier(req, res) {
	const dataSupplier = await Suppliers.create({ ...req.body });

	res.status(201).json(dataSupplier);
}
