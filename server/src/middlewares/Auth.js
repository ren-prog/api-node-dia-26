const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = (req, res, next) => {
    const { authorizaion } = req.headers;

    if (!authorizaion)
        return res.status(401).send({ error: 'No Token provided' });

    const parts = authorizaion.split(' ');

    if (!parts.length === 2)
        return res.status(401).send({ error: 'Invalid Tokennnn' });

    const [key, token] = parts;

    if (key.indexOf('Bearer') < 0)
        return res.status(401).send({ error: 'Token malformated' });

    try {
        const data = jwt.verify(token, process.env.APP_SECRET);
    } catch (error) {
        console.log(error);
        return res
            .status(401)
            .json({ message: 'Token invalido, faça login novamente' });
    }

    req.userId = data.id;
    next();
};
