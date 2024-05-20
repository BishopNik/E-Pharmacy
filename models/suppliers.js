/** @format */

import Joi from 'joi';

export const addSupplierSchema = Joi.object({
	text: Joi.string().required(),
});

export const editSupplierSchema = Joi.object({
	text: Joi.string().required(),
});
