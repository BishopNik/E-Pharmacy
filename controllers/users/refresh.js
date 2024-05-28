/** @format */

import { User } from '../../models/index.js';

export const refresh = async ({ user }, res) => {
	const { _id } = user;

	const currentUser = await User.findOne({ _id });

	res.json({
		token: currentUser.token,
		user: {
			id: currentUser._id,
			name: currentUser.name,
			email: currentUser.email,
		},
	});
};
