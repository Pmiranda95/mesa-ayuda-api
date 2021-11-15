import { Request, Response } from 'express';
import { findReclamosService, updateReclamosService} from '../services/reclamo';

export const findReclamos = async (req: Request, res: Response): Promise<void> => {
    try {
        await findReclamosService(req, res);
    } catch (e) {
        throw e;
    }
};

export const updateStateReclamo = async (req: Request, res: Response): Promise<void> => {
    try {
        await updateReclamosService(req, res);
    } catch (e) {
        throw e;
    }
};