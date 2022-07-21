import express from 'express';
import productosRouter from './routes/products.router.js';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
});
server.on("Error", error => console.log(`Error en servidor ${error}`));

app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(express.static('public'))


app.use("/api/productos", productosRouter)

