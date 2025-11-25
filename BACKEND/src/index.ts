import express from 'express';
import cors from 'cors'; 
//Creamos la aplicacion a traves del paquete express
//y llamamos a su constructor
const app = express();
//todo lo que regresa al usuario es en formato json
app.use(express.json());
app.use(cors());
//configurar las rutas para el acceso a personal
import personalRutas from './routes/personalRutas.js';
// /api/personal <-- ruta base
app.use('/api/personal/', personalRutas);

//Para escuchar las peticiones del frontend
const PUERTO = 3001;
//Rutas
//app.get('/',(_req, res)=>{
//    res.send('Estoy en la raiz del servidor API');
//})
//app.get('/Hola',(_req, res)=>{
//    res.send('Estoy en Hola del servidor API');
//})
//encendemos el servidor y lo ponemos a escuchar peticiones
app.listen(PUERTO, () => {
    console.log(`Servidor encendido escuchando el puerto: ${PUERTO}`);
});
