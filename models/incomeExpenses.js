/** @format */

import { Schema, model } from 'mongoose';

const status = ['Expense', 'Error', 'Income'];

const incomeExpensesSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		amount: {
			type: Number,
			required: true,
			min: 0,
		},
		type: {
			type: String,
			required: true,
			enum: status,
		},
	},
	{ versionKey: false, timestamps: true }
);

export const IncomeExpenses = model('income-expense', incomeExpensesSchema);
