const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db/database.sqlite"
});


const User = sequelize.define('User', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'users'
});

// User.sync({ force: true });

// console.log(User === sequelize.models.User); // true

User.create({
    userName: "firstuser",
    password: "password"
}).then(res => {
    const user = { id: res.id, userName: res.userName, password: res.password }
    console.log(user);
}).catch(err => console.log(err));