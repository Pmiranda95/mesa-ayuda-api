"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclamoSchema = void 0;
const mongoose_1 = require("mongoose");
;
exports.ReclamoSchema = new mongoose_1.Schema({
    idPedido: String,
    reclamo: String,
    estado: String,
});
const Reclamo = (0, mongoose_1.model)('Reclamo', exports.ReclamoSchema);
exports.default = Reclamo;
//# sourceMappingURL=reclamo.js.map