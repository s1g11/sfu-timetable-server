"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const getTestsRoutes = (db) => {
    const router = express_1.default.Router();
    router.delete("/data", (_, res) => {
        db.products = [];
        res.status(204);
    });
    return router;
};
exports.getTestsRoutes = getTestsRoutes;
