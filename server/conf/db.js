import Sequelize from "sequelize";

// Or you can simply use a connection uri
const sequelize = new Sequelize("postgres://admin@localhost:5432/todoist");

export default sequelize;
