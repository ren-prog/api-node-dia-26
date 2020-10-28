const User = (sequelize, dataTypes) => {
    const model = sequelize.define(
        'User',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: dataTypes.STRING,
            email: {
                type: dataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: dataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: dataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: 'users',
        },
    );

    return model;
};

module.exports = User;
