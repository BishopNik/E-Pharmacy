/** @format */

export const getDataSortFunc = async (
	DB,
	{ sortBy, reverse, searchName, page = 1, perPage = 5 }
) => {
	if (!DB)
		return {
			totalPage: 0,
			currentPage: 0,
			data: [],
		};
	const skip = (page - 1) * perPage;
	const query = searchName ? { name: { $regex: searchName, $options: 'i' } } : {};

	const countDoc = await DB.countDocuments(query);

	const sortField = {};
	if (sortBy) {
		sortField[sortBy] = Number(reverse) ? -1 : 1;
	}

	const dataDoc = await DB.find(query, '-createdAt -updatedAt', {
		skip,
		limit: perPage,
	}).sort(sortField);

	const totalPage = Math.ceil(countDoc / perPage);

	return {
		totalPage,
		currentPage: Number(page),
		data: dataDoc,
	};
};
