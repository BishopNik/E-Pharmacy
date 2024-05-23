/** @format */

import { Customers } from '../../models/index.js';

export const getById = async ({ params: { customerId } }, res) => {
	const dataCustomer = await Customers.find({ _id: customerId });

	res.json(dataCustomer);
};
