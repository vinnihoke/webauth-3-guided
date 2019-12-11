module.exports = (role) => { // This is a higher order function
	return function (req, res, next) {
		if( req.decodedJwt.roles && req.decodedJwt.roles.includes(role) ){
			next();
		} else {
			res.status(403).json({ message: "Not Permitted" });
		}
	}
}