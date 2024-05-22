/** @format */

import { Customers } from '../../models/index.js';

export const getAll = async (req, res, next) => {
	const dataCustomers = await Customers.find();

	res.json(dataCustomers);
};
