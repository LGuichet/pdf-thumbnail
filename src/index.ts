import sequelize from "./sequelize";
import { app } from "./server";

const PORT = 3000;

const start = async (): Promise<void> => {
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
