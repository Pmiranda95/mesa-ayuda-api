"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const index_1 = __importDefault(require("./server/index"));
const PORT = process.env.PORT;
index_1.default.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
//# sourceMappingURL=app.js.map