"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenunciaSchema = void 0;
const mongoose_1 = require("mongoose");
;
exports.DenunciaSchema = new mongoose_1.Schema({
    idProducto: String,
    categoria: String,
    comentario: String,
    estado: String,
});
const Denuncia = (0, mongoose_1.model)('Denuncia', exports.DenunciaSchema);
exports.default = Denuncia;
//# sourceMappingURL=denuncia.js.map