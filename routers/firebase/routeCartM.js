const { postCarrito, getCarrito, postProductoCarrito, deleteProductoCarrito, deleteCarrito } = require('../../controller/firebase/controlerCartF');

const { Router } = require('express');
const logRequestInfo = require('../../middlewares/logRequestInfo');

const carritoFirebaseRouter = Router();

carritoFirebaseRouter.use(logRequestInfo);

carritoFirebaseRouter.post('/', logRequestInfo, postCarrito);
carritoFirebaseRouter.delete('/:id', logRequestInfo, deleteCarrito);
carritoFirebaseRouter.get('/:id?', logRequestInfo, getCarrito);
carritoFirebaseRouter.post('/:id', logRequestInfo, postProductoCarrito);
carritoFirebaseRouter.delete('/:id/:id_prod', logRequestInfo, deleteProductoCarrito);

module.exports = carritoFirebaseRouter;