// importo lo necesario para ejecutar el servidor
import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  // captura el error. y lo imprime
  try {
    // ejecuto la conexion a la db
    await AppDataSource.initialize();
    console.log("Data Base Connected");
    // pongo a escuchar el servidor por el puerto 3000
    app.listen("3000");
    console.log("server on port", 3000);
  } catch (error) {
    console.error(error);
  }
}

main();
