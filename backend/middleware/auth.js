import Jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;

		let decodedData;
		if (token && isCustomAuth) {
			decodedData = Jwt.verify(token, "secret");
			req.userId = decodedData?.id;
		} else {
			decodedData = Jwt.decode(token);
			req.userId = decodedData?.sub;
		}
		next();
	} catch (error) {
		console.log("error in middleware");
		return res.status(401).json({ message: "Unauthorized" });
	}
};

export default auth;
