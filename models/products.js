/** @format */

import Joi from 'joi';
import { Schema, model } from 'mongoose';

const category = ['Dental Care', 'Hand', 'Head', 'Heart', 'Leg', 'Medicine', 'Skin Care'];

const productSchema = new Schema(
	{
		// photo: {
		// 	type: String,
		// 	required: false,
		// 	validate: {
		// 		validator: function (v) {
		// 			return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(v);
		// 		},
		// 		message: props => `${props.value} is not a valid image URL!`,
		// 	},
		// },
		name: {
			type: String,
			required: true,
			trim: true,
		},
		suppliers: {
			type: String,
			required: true,
			trim: true,
		},
		stock: {
			type: Number,
			required: true,
			min: 0,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		category: {
			type: String,
			required: true,
			enum: category,
		},
	},
	{ versionKey: false, timestamps: true }
);

export const Products = model('product', productSchema);

export const productJoiSchema = Joi.object({
	name: Joi.string().required(),
	suppliers: Joi.string().required(),
	stock: Joi.number().required(),
	price: Joi.number().precision(2).required(),
	category: Joi.string()
		.valid(...category)
		.required(),
});
