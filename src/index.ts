import connection from "./db_connection";
import { app } from "./server";

const PORT = 3000;


const start = async (): Promise<void> => {
  const co = await connection.sync();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();