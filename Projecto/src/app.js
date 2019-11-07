import express, {json} from 'express';
import morgan from 'morgan';

//importamos rutas
import pacienteRoute from './routes/paciente';
import consulta_hojaclinicaRoute from './routes/consulta_hojaclinica';
import proximactRoute from './routes/proximact';
import userRoute from './routes/user';
import expeRoute from './routes/expe';
import recetasRoute from './routes/recetas';

//iniciamos
const app = express();

app.use(morgan('dev'));
app.use(json());
//rutas

app.use('/api/pacientes',pacienteRoute);
app.use('/api/hoja',consulta_hojaclinicaRoute);
app.use('/api/proxima',proximactRoute);
app.use('/api/user',userRoute);
app.use('/api/expe',expeRoute);
app.use('/api/recetas',recetasRoute);
export default app;