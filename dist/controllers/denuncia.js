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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStateDenuncia = exports.findDenuncias = void 0;
const denuncia_1 = require("../services/denuncia");
const findDenuncias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, denuncia_1.findDenunciasService)(req, res);
    }
    catch (e) {
        throw e;
    }
});
exports.findDenuncias = findDenuncias;
const updateStateDenuncia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, denuncia_1.changeStateDenunciaService)(req, res);
    }
    catch (e) {
        throw e;
    }
});
exports.updateStateDenuncia = updateStateDenuncia;
//# sourceMappingURL=denuncia.js.map