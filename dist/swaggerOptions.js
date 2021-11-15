"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BE-Compras',
            version: '1.0.0',
            description: 'Es el microservicio encargado del modulo de compras.',
        },
        servers: [
            {
                url: 'http://localhost:8081',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};
//# sourceMappingURL=swaggerOptions.js.map