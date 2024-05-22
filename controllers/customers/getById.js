/** @format */

import { Customers } from '../../models/index.js';

export const getById = async (req, res) => {
	const { customerId } = req.params;
	const dataCustomer = await Customers.find({ _id: customerId });

	res.json(dataCustomer);
};
