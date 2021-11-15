"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoSchema = void 0;
const mongoose_1 = require("mongoose");
;
exports.ProductoSchema = new mongoose_1.Schema({
    id: String,
    nombre: String,
    precio: Number,
    categoria: String,
    stock: Number,
    vendedor: String,
    metodosDePago: Object,
    isActivo: Boolean
});
const Producto = (0, mongoose_1.model)('Producto', exports.ProductoSchema);
exports.default = Producto;
//# sourceMappingURL=producto.js.map