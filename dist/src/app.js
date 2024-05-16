"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonBodyMiddleware = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const events_router_1 = require("./routes/events-router");
const test_1 = require("./routes/test");
const db_1 = require("./db/db");
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.jsonBodyMiddleware = express_1.default.json();
exports.app.use(exports.jsonBodyMiddleware);
exports.app.use((0, cors_1.default)());
exports.app.use('/events', events_router_1.eventsRouter);
const testsRoutes = (0, test_1.getTestsRoutes)(db_1.db);
exports.app.use('/__test__', testsRoutes);
