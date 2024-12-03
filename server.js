import dotenv from "dotenv";
import express from "express";
import conectDB from './config/Db.config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

import vendedorRouter from './src/routes/vendedor.routes.js';
import heladoRouter from './src/routes/helado.routes.js';
import notaRouter from './src/routes/nota.routes.js';
import sesion from './src/routes/sesiones.routes.js'
import usuario from './src/routes/usuario.routes.js'

app.use('/api/vendedor', vendedorRouter);
app.use('/api/helado', heladoRouter);
app.use('/api/nota', notaRouter);
app.use('/api/sesiones', sesion);
app.use('/api/usuario', usuario);


conectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});