"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStateDenunciaService = exports.findDenunciasService = void 0;
const denuncia_1 = __importDefault(require("../models/denuncia"));
const findDenunciasService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const denuncias = yield denuncia_1.default.find().exec();
    return res.status(200).send(denuncias);
});
exports.findDenunciasService = findDenunciasService;
const changeStateDenunciaService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const denunciaWanted = yield denuncia_1.default.findById(req.body.id);
        if (denunciaWanted) {
            const denuncia = new denuncia_1.default(req.body);
            const filter = { _id: req.body.id };
            const update = {
                estado: denuncia.estado
            };
            yield denuncia_1.default.findOneAndUpdate(filter, update);
            res.status(200).send('Denuncia actualizada correctamente');
        }
        else
            res.status(404).send('Error: La denuncia no existe');
    }
    catch (error) {
        res.status(500).send('Error: No se pudo actualizar La denuncia');
    }
});
exports.changeStateDenunciaService = changeStateDenunciaService;
//# sourceMappingURL=denuncia.js.map