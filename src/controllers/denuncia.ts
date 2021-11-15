import { Request, Response } from 'express';
import { findDenunciasService, changeStateDenunciaService} from '../services/denuncia';


export const findDenuncias = async (req: Request, res: Response): Promise<void> => {
    try {
        await findDenunciasService(req, res);
    } catch (e) {
        throw e;
    }
};

export const updateStateDenuncia = async (req: Request, res: Response): Promise<void> => {
    try {
        await changeStateDenunciaService(req, res);
    } catch (e) {
        throw e;
    }
};