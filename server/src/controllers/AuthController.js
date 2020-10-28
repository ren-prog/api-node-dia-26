const Sequelize = require('sequelize');

const ConfigDatabase = require('../config/database');

const connection = new Sequelize(ConfigDatabase);

const { QueryTypes } = require('sequelize');

const bcrypt = require('bcrypt');

const saltRound = 10;

const jwt = require('jsonwebtoken');

require('dotenv').config();

const auth = {
  async index(req, res) {
    const { email, password } = req.body;

    const [
      users,
      err,
    ] = await connection.query(
      'select id, email, password from users where email = $email',
      { type: QueryTypes.SELECT, bind: { email } },
    );

    if (!users) {
      return res.status(401).send({ error: 'Credenciais invalidas' });
    }

    if (!bcrypt.compareSync(password, users.password)) {
      return res.status(401).send({ error: 'Credenciais invalidas' });
    }

    const token = await jwt.sign({ id: users.id }, process.env.APP_SECRET, {
      expiresIn: '24h',
    });
    res.json({ id: users.id, token });
  },
  show(req, res) {},
  async store(req, res) {
    const { name, email, password } = req.body;

    const now = new Date();

    const hash = await bcrypt.hash(password, saltRound);
    console.log(name, email, password, hash, now);
    const [idUser, err] = await connection.query(
      `insert into users (name, email, password, created_at, updated_at)
            values($name, $email, $password, $created_at, $updated_at)`,
      {
        bind: {
          name,
          email,
          password: hash,
          created_at: now,
          updated_at: now,
        },
      },
    );

    if (!err)
      return res
        .status(400)
        .json({ details: 'Usuario não criado, tentenovamente' });

    return res.status(201).json({ id: idUser, name, email });
  },
  update(req, res) {},
  delete(req, res) {},
};

module.exports = auth;
