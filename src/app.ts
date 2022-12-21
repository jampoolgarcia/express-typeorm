// importo lo necesario para ejecutar el servidor
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes  from './controllers/user.routes';

// creo una constante de express
const app = express();

// configuro los mildelware
// uso morgan en modo de desarrollo
app.use(morgan('dev'));
// uso cors para que se hagan peticiones de distintas url
app.use(cors());
// para que pueda leer los json
app.use(express.json());

// rutas
// aniade la rutas de usuario
app.use(userRoutes);


// por defecto exporta la constante app
export default app;