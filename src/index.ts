// importo lo necesario para ejecutar el servidor
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// creo una constante de express
const app = express();

// configuro los mildelware
// uso morgan en modo de desarrollo
app.use(morgan('dev'));
// uso cors para que se hagan peticiones de distintas url
app.use(cors());

// pongo a escuchar el servidor por el puerto 3000
app.listen("3000", () => {
  console.log("server on port", 3000)
});