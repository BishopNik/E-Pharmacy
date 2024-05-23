/** @format */

import { Customers } from '../../models/index.js';
import { getDataSortFunc } from '../../utils/index.js';

export const getAll = async ({ query }, res) => {
	res.json(await getDataSortFunc(Customers, query));
};
