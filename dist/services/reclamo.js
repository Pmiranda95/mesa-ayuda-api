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
exports.updateReclamosService = exports.findReclamosService = void 0;
const reclamo_1 = __importDefault(require("../models/reclamo"));
const findReclamosService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reclamos = yield reclamo_1.default.find().exec();
    return res.status(200).send(reclamos);
});
exports.findReclamosService = findReclamosService;
const updateReclamosService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reclamoWanted = yield reclamo_1.default.findById(req.body.id);
        if (reclamoWanted) {
            const reclamo = new reclamo_1.default(req.body);
            const filter = { _id: req.body.id };
            const update = {
                estado: reclamo.estado
            };
            yield reclamo_1.default.findOneAndUpdate(filter, update);
            res.status(200).send('Reclamo actualizada correctamente');
        }
        else
            res.status(404).send('Error: El reclamo no existe');
    }
    catch (error) {
        res.status(500).send('Error: No se pudo actualizar el reclamo');
    }
});
exports.updateReclamosService = updateReclamosService;
//# sourceMappingURL=reclamo.js.map