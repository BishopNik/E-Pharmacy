/** @format */

export const delProduct = async (req, res) => {
	const { text, email } = req.body;
	try {
		res.status(200).json({ message: 'Email sent successfully' });
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).json({ message: 'Error sending email' });
	}
};
