import { Request, Response } from 'express'
import Denuncia from '../models/denuncia'

export const findDenunciasService = async (req: Request, res: Response) => {
  const denuncias = await Denuncia.find().exec()
  return res.status(200).send(denuncias)
}

export const changeStateDenunciaService = async (req: Request, res: Response) => {
  try {
    const denunciaWanted = await Denuncia.findById(req.body.id)

    if (denunciaWanted) {
      const denuncia = new Denuncia(req.body)

      const filter = { _id: req.body.id }
      const update = {
        estado: denuncia.estado
      }

      await Denuncia.findOneAndUpdate(filter, update)
      res.status(200).send('Denuncia actualizada correctamente')
    } else res.status(404).send('Error: La denuncia no existe')
  } catch (error) {
    res.status(500).send('Error: No se pudo actualizar La denuncia')
  }
}
