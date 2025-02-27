import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/pdf-thumbnail"
);

sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Sync error:", err));

export default { sequelize } as const;
