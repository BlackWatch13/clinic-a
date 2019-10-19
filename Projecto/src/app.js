import express, {json} from 'express';
import morgan from 'morgan';

//importamos rutas
import pacienteRoute from './routes/paciente';
import doctorRoute from './routes/doctor';
import consulta_hojaclinicaRoute from './routes/consulta_hojaclinica';
import detalle_facturaRoute from './routes/detalle_factura';
import proximactRoute from './routes/proximact';

//iniciamos
const app = express();

app.use(morgan('dev'));
app.use(json());
//rutas
app.use('/api/pacientes',pacienteRoute);
app.use('/api/doctor', doctorRoute);
app.use('/api/hoja',consulta_hojaclinicaRoute);
app.use('/api/defactu',detalle_facturaRoute);
app.use('/api/proxima',proximactRoute);

export default app;