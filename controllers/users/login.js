/** @format */

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../models/index.js';
import { httpError } from '../../utils/index.js';

export const login = async ({ body }, res) => {
	const { email, password } = body;
	const { SECRET_KEY } = process.env;

	const user = await User.findOne({ email });

	if (!user) {
		throw httpError(401, 'Email or password is wrong');
	}

	const passwordCompare = await bcrypt.compare(password, user.password);

	if (!passwordCompare) {
		throw httpError(401, 'Email or password is wrong');
	}

	const payload = {
		id: user._id,
	};

	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '12h' });

	await User.findByIdAndUpdate(user._id, { token });

	res.json({
		token,
		user: {
			id: user._id,
			name: user.name,
			email: user.email,
		},
	});
};
