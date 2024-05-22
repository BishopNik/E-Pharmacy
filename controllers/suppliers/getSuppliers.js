/** @format */

import { Suppliers } from '../../models/index.js';

export async function getSuppliers(req, res) {
	const dataSuppliers = await Suppliers.find();

	res.json(dataSuppliers);
}
