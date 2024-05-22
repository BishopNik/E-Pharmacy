/** @format */

import { Schema, model } from 'mongoose';

const customerSchema = new Schema(
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
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
			validate: {
				validator: function (v) {
					return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
				},
				message: props => `${props.value} is not a valid email!`,
			},
		},
		spent: {
			type: Number,
			required: true,
			min: 0,
		},
		phone: {
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return /^\+?\d{10,15}$/.test(v);
				},
				message: props => `${props.value} is not a valid phone number!`,
			},
		},
		address: {
			type: String,
			required: true,
			trim: true,
		},
		register_date: {
			type: Date,
			required: true,
			default: Date.now,
		},
	},
	{ versionKey: false, timestamps: true }
);

export const Customers = model('customer', customerSchema);
