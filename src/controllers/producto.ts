import { Request, Response } from 'express';
import { deleteProductoService } from '../services/producto';


export const deleteProducto = async (req: Request, res: Response): Promise<void> => {
    try {
        await deleteProductoService(req, res);
    } catch (e) {
        throw e;
    }
};