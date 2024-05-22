/** @format */

import Joi from 'joi';
import { Schema, model } from 'mongoose';

const status = ['Active', 'Deactive'];

const supplierSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		address: {
			type: String,
			required: true,
			trim: true,
		},
		suppliers: {
			type: String,
			required: true,
			trim: true,
		},
		date: {
			type: Date,
			required: true,
			validate: {
				validator: function (v) {
					return !isNaN(Date.parse(v));
				},
				message: props => `${props.value} is not a valid date!`,
			},
		},
		amount: {
			type: Number,
			required: true,
			min: 0,
		},
		status: {
			type: String,
			required: true,
			enum: status,
		},
	},
	{ timestamps: true }
);

export const Suppliers = model('supplier', supplierSchema);

export const supplierJoiSchema = Joi.object({
	name: Joi.string().required(),
	address: Joi.string().required(),
	suppliers: Joi.string().required(),
	date: Joi.date().required(),
	amount: Joi.number().precision(2).required(),
	status: Joi.string()
		.valid(...status)
		.required(),
});
