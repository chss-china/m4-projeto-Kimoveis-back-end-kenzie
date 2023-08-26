import app from "./app";
import { AppDataSource } from "./data-source";
import swaggerUi from "swagger-ui-express";

AppDataSource.initialize()
  .then(() => {
    console.log("Server is running");
    app.listen(3000, () => {
      console.log("Servidor executando");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
