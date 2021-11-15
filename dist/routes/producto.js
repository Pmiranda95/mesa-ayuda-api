"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producto_1 = require("../controllers/producto");
const health_1 = __importDefault(require("../controllers/health"));
const router = express_1.default.Router();
//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Producto
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - precio
 *         - categoria
 *         - stock
 *         - vendedor
 *         - metodosDePago
 *         - isActivo
 *       properties:
 *         id:
 *           type: string
 *           description: Id del producto
 *         nombre:
 *           type: string
 *           description: Nombre del producto
 *         precio:
 *           type: number
 *           description: Precio del producto
 *         categoria:
 *           type: string
 *           description: Categoria del producto
 *         stock:
 *           type: number
 *           description: Stock del producto
 *         vendedor:
 *           type: string
 *           description: Usuario del vendedor del producto
 *         metodosDePago:
 *           type: object
 *           description: Metodos de pago del producto
 *           required:
 *             - debito
 *             - credito
 *           properties:
 *             debito:
 *               type: boolean
 *               description: Permite abonar el producto con tarjeta de debito
 *             credito:
 *               type: boolean
 *               description: Permite abonar el producto con tarjeta de credito
 *         isActivo:
 *           type: bolean
 *           description: Activa o desactiva el producto
 *       example:
 *        id: asd6565a1sdas61ads
 *        nombre: Laptop Lenovo
 *        precio: 200000
 *        categoria: Notebook
 *        stock: 5
 *        vendedor: lenovo
 *        metodosDePago: {debito: true, credito: false}
 *        isActivo: true
 */
//#endregion
/**
 * @swagger
 * /api/v1/producto:
 *   delete:
 *     summary: Actualiza un producto
 *     tags: [Producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: El producto se actualizo correctamente
 *       404:
 *         description: El producto no existe
 *       500:
 *         description: No se pudo actualizar el producto
 */
//#endregion
router.delete('/api/v1/producto', producto_1.deleteProducto);
router.get('/health', health_1.default.healthCheck);
exports.default = router;
//# sourceMappingURL=producto.js.map