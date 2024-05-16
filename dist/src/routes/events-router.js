"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsRouter = void 0;
const express_1 = __importDefault(require("express"));
const products_repository_1 = require("../repositories/products-repository");
exports.eventsRouter = express_1.default.Router({});
exports.eventsRouter.get("/", (req, res) => {
    const foundEvents = products_repository_1.productsRepository.getEventsInPeriod('');
    if (!foundEvents) {
        res.status(404);
    }
    else {
        res.send(foundEvents);
    }
});
exports.eventsRouter.get("/:period", (req, res) => {
    const foundProduct = products_repository_1.productsRepository.getEventsInPeriod(req.params.period);
    if (!foundProduct) {
        res.status(404);
    }
    else {
        res.send(foundProduct);
    }
});
exports.eventsRouter.get("/search/:title", (req, res) => {
    const foundProduct = products_repository_1.productsRepository.getEventByTitle(req.params.title);
    if (!foundProduct) {
        res.status(404);
    }
    else {
        res.send(foundProduct);
    }
});
