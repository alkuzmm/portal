const Sequelize = require("sequelize");


// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../db/database.sqlite"
});

const User = require("user")(sequelize);

module.exports = {
    sequelize: sequelize,
    user: User
}