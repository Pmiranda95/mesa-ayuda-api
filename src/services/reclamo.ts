import { Request, Response } from 'express'
import Reclamo from '../models/reclamo'


export const findReclamosService = async (req: Request, res: Response) => {
  const reclamos = await Reclamo.find().exec()
  return res.status(200).send(reclamos)
}

export const updateReclamosService = async (req: Request, res: Response) => {
  try {
    const reclamoWanted = await Reclamo.findById(req.body.id)

    if (reclamoWanted) {
      const reclamo = new Reclamo(req.body)
      const filter = { _id: req.body.id }
      const update = {
        estado: reclamo.estado
      }

      await Reclamo.findOneAndUpdate(filter, update)
      res.status(200).send('Reclamo actualizada correctamente')
    } else res.status(404).send('Error: El reclamo no existe')
  } catch (error) {
    res.status(500).send('Error: No se pudo actualizar el reclamo')
  }
}




