import { Request, Response } from 'express'
import Producto from '../models/producto'


export const deleteProductoService = async (req: Request, res: Response) => {
  try {
    const productoWanted = await Producto.findById(req.body.id)

    if (productoWanted) {
      const producto = new Producto(req.body)

      const filter = { _id: producto.id }
      const update = {
        isActivo: false
      }

      await Producto.findOneAndUpdate(filter, update)
      res.status(200).send('Producto Eliminado correctamente')
    } else res.status(404).send('Error: El producto no existe')
  } catch (error) {
    res.status(500).send('Error: No se pudo actualizar el producto')
  }
}