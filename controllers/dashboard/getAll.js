/** @format */

import { IncomeExpenses, Customers, Products, Suppliers } from '../../models/index.js';

export const getAll = async (req, res) => {
	const customersCount = await Customers.countDocuments();
	const productCount = await Products.countDocuments();
	const supplierCount = await Suppliers.countDocuments();
	const dataIncomeExpenses = await IncomeExpenses.find();
	const dataCustomers = await Customers.find();

	res.json({
		totalProducts: productCount,
		totalSuppliers: supplierCount,
		totalCustomers: customersCount,
		customers: dataCustomers,
		income_expenses: dataIncomeExpenses,
	});
};
