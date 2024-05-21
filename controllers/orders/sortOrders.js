/** @format */

import { Orders } from '../../models/index.js';

export const sortOrders = async (req, res, next) => {
	const { sortBy, revers, userName } = req.query;

	const query = userName ? { name: { $regex: userName, $options: 'i' } } : {};

	let orders = await Orders.find(query).sort(sortBy);

	if (Number(revers)) {
		orders = orders.reverse();
	}

	res.json(orders);
};
