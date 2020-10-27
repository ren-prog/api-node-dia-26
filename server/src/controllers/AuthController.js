const Sequelize = require('sequelize');

const ConfigDatabase = require('../config/database');

const connection = new Sequelize(ConfigDatabase);


const auth = {
    async index(req, res){

        const users = await connection.query('select * from')
        res.json(users);
    },
    show(req, res){},
    async store(req, res){
        const { name, email, password } = req.body;

        const now = new Date();
        
        const [idUser, err] = await connection.query(
            `insert into users (name, email. password, createdAt, updateAt)
            values($name, $email, $password, $createdAt, $updateAt)`,
            {
                bind: {
                    name,
                    email,
                    password,
                    createdAt: now, 
                    updateAt: now
                }
            }
            
        )

        if(!err)
        return res.status(400).json({ details: "Usuario não criado, tentenovamente"});

        return res.status(201).json({ id: idUser, name, email})
    },
    update(req, res){},
    delete(req, res){}
}

module.exports = auth;