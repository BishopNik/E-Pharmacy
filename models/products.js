/** @format */

import Joi from 'joi';

export const addProductSchema = Joi.object({
	text: Joi.string().required(),
});

export const editProductSchema = Joi.object({
	text: Joi.string().required(),
});
