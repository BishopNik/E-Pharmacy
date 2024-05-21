/** @format */

import { Schema, model } from 'mongoose';

const status = ['Pending', 'Confirmed', 'Cancelled', 'Processing', 'Shipped', 'Delivered'];

const orderSchema = new Schema(
	{
		photo: {
			type: String,
			required: true,
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
		address: {
			type: String,
			required: true,
			trim: true,
		},
		products: {
			type: Number,
			required: true,
			min: 1,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		status: {
			type: String,
			required: true,
			enum: status,
		},
		order_date: {
			type: Date,
			required: true,
			default: Date.now,
		},
	},
	{ versionKey: false, timestamps: true }
);

export const Orders = model('order', orderSchema);
