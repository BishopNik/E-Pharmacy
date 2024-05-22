/** @format */

import Joi from 'joi';
import { Schema, model } from 'mongoose';

const category = ['Heart', '', '', '', '', ''];

const productSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
			unique: true,
		},
		photo: {
			type: String,
			required: false,
			validate: {
				validator: function (v) {
					return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(v);
				},
				message: props => `${props.value} is not a valid image URL!`,
			},
		},
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

export const addProductSchema = Joi.object({
	text: Joi.string().required(),
});

export const editProductSchema = Joi.object({
	text: Joi.string().required(),
});
