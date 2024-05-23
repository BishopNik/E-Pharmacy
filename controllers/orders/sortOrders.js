/** @format */

import { Orders } from '../../models/index.js';
import { getDataSortFunc } from '../../utils/index.js';

export const sortOrders = async ({ query }, res) => {
	res.json(await getDataSortFunc(Orders, query));
};
