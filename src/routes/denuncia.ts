import express from 'express'
import { findDenuncias, updateStateDenuncia } from '../controllers/denuncia'

const router = express.Router()

//#region Swagger
/**
 * @swagger
 * tags:
 *   name: Denuncia
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Denuncia:
 *       type: object
 *       required:
 *         - idProducto
 *         - categoria
 *         - comentario
 *       properties:
 *         idProducto:
 *           type: string
 *           description: Id del producto a denunciar
 *         categoria:
 *           type: string
 *           description: Categoria de la denuncia
 *         comentario:
 *           type: string
 *           description: Comentario sobre la denuncia
 *       example:
 *        idProducto: asd6565a1sdas61ads
 *        categoria: fraude
 *        comentario: el producto que intenta vender es una estafa
 */
//#endregion


/**
 * @swagger
 * /api/v1/denuncia:
 *  get:
 *    summary: Trae todos los productos que son posibles de comprar (con stock mayor a 0 y activos de parte del vendedor).
 *    tags: [Denuncia]
 *    responses:
 *      200:
 *        description: Denuncias obtenidos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Denuncia'
 */
//#endregion
router.get('/api/v1/denuncia', findDenuncias)

/**
 * @swagger
 * /api/v1/denuncia:
 *   put:
 *     summary: Actualiza un producto
 *     tags: [Denuncia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Denuncia'
 *     responses:
 *       200:
 *         description: La denuncia se actualizo correctamente
 *       404:
 *         description: La denuncia no existe
 *       500:
 *         description: No se pudo actualizar La denuncia
 */
//#endregion
router.put('/api/v1/denuncia', updateStateDenuncia)

export default router
