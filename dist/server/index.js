"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producto_1 = __importDefault(require("../routes/producto"));
const reclamo_1 = __importDefault(require("../routes/reclamo"));
const denuncia_1 = __importDefault(require("../routes/denuncia"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../database/config");
// Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("../swaggerOptions");
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.options);
(0, config_1.dbConnection)();
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.get('/', (_, res) => res.send('be-compras is up!'));
server.use((0, cors_1.default)());
server.use('/', producto_1.default);
server.use('/', reclamo_1.default);
server.use('/', denuncia_1.default);
server.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
exports.default = server;
//# sourceMappingURL=index.js.map