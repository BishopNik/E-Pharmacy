/** @format */

import { Suppliers } from '../../models/index.js';
import { getDataSortFunc } from '../../utils/index.js';

export async function getSuppliers({ query }, res) {
	res.json(await getDataSortFunc(Suppliers, query));
}
