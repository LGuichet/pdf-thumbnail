import { Sequelize } from "sequelize";

const sequelize = new Sequelize("pdf-thumbnail", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
export default sequelize;
