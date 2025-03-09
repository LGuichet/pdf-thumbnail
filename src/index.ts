import sequelize from "./adapters/sequelize";
import { app } from "./web/server";

const PORT = 3000;

const start = async (): Promise<void> => {
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
