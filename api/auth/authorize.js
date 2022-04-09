const jwt = require('jsonwebtoken');
const { secret } = require('./secret.json');

const auth = (req, res, next) => {
    const token = req.headers.auth;

    if (token) {

        let verifiedUser = jwt.verify(token, secret);
        if (!verifiedUser) return res.status(401).send('Error Unauthorized')

        req.user = verifiedUser; // id & role
        next();
    } else {
        return res.status(401).json({ message: 'Error' });
    }
}
module.exports = auth;