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
exports.deleteProductoService = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const deleteProductoService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productoWanted = yield producto_1.default.findById(req.body.id);
        if (productoWanted) {
            const producto = new producto_1.default(req.body);
            const filter = { _id: producto.id };
            const update = {
                isActivo: false
            };
            yield producto_1.default.findOneAndUpdate(filter, update);
            res.status(200).send('Producto Eliminado correctamente');
        }
        else
            res.status(404).send('Error: El producto no existe');
    }
    catch (error) {
        res.status(500).send('Error: No se pudo actualizar el producto');
    }
});
exports.deleteProductoService = deleteProductoService;
//# sourceMappingURL=producto.js.map