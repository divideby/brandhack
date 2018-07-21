import Sequelize from "sequelize";

import db from "../conf/db";

const Todo = db.define("todo", {
  title: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM,
    values: ["not done", "done"],
    defaultValue: "not done"
  }
});

export default Todo;
