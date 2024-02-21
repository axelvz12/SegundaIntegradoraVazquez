const express = require('express');

//Utilizamos Mongo DB
const productosMongoRouter = require('./routers/mongo/routeProductsM');
const carritoMongoRouter = require('./routers/mongo/routeCartM');

//Utilizamos Firebase
const productosFbRouter = require('./routers/firebase/routeProductsF');
const carritoFirebaseRouter = require('./routers/firebase/routeCartF');

const app = express();
const port = process.env.port || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mongo DB
app.use('/api/mongo/productos', productosMongoRouter);
app.use('/api/mongo/carrito', carritoMongoRouter);

//Firebase
app.use('/api/firebase/productos', productosFbRouter);
app.use('/api/firebase/carrito', carritoFirebaseRouter);


app.use((req, res) => {
    res.status(404).json({
        error: -2,
        descripcion: `ruta '${req.originalUrl}' método '${req.method}' no implementada`,
    });
});


app.listen(port, () => {
    console.log(`RUN http://localhost:${port}`);
});