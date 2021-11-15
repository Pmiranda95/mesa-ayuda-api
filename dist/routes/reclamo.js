"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reclamo_1 = require("../controllers/reclamo");
const router = express_1.default.Router();
//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Reclamo
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Reclamo:
 *       type: object
 *       required:
 *         - idPedido
 *         - reclamo
 *       properties:
 *         idPedido:
 *           type: string
 *           description: Id del pedido
 *         reclamo:
 *           type: string
 *           description: Reclamo escrito por el usuario
 *         estado:
 *           type: string
 *           description: Estado del reclamo
 *       example:
 *        idPedido: asd6565a1sdas61ads
 *        reclamo: El producto vino defectuoso
 */
//#endregion
/**
 * @swagger
 * /api/v1/reclamo:
 *  get:
 *    summary: Trae todos los reclamos.
 *    tags: [Reclamo]
 *    responses:
 *      200:
 *        description: Reclamos obtenidos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reclamo'
 */
//#endregion
router.get('/api/v1/reclamo', reclamo_1.findReclamos);
/**
 * @swagger
 * /api/v1/reclamo:
 *   put:
 *     summary: Actualiza estado de reclamo
 *     tags: [Reclamo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reclamo'
 *     responses:
 *       200:
 *         description: El reclamo se actualizo correctamente
 *       404:
 *         description: El reclamo no existe
 *       500:
 *         description: No se pudo actualizar El reclamo
 */
//#endregion
router.put('/api/v1/reclamo', reclamo_1.updateStateReclamo);
exports.default = router;
//# sourceMappingURL=reclamo.js.map