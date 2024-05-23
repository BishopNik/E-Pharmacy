/** @format */

import { Products } from '../../models/index.js';
import { getDataSortFunc } from '../../utils/index.js';

export const getSortProducts = async ({ query }, res) => {
	res.json(await getDataSortFunc(Products, query));
};
