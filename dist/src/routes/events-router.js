"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsRouter = void 0;
const express_1 = __importDefault(require("express"));
const events_repository_1 = require("../repositories/events-repository");
const users_1 = require("../db/users");
exports.eventsRouter = express_1.default.Router({});
exports.eventsRouter.get("/", (req, res) => {
    const foundEvents = events_repository_1.eventsRepository.getEventsInPeriod('');
    if (!foundEvents) {
        res.status(404);
    }
    else {
        res.send(foundEvents);
    }
});
exports.eventsRouter.get("/:period", (req, res) => {
    const foundProduct = events_repository_1.eventsRepository.getEventsInPeriod(req.params.period);
    if (!foundProduct) {
        res.status(404);
    }
    else {
        res.send(foundProduct);
    }
});
exports.eventsRouter.get("/search/:title", (req, res) => {
    const foundProduct = events_repository_1.eventsRepository.getEventByTitle(req.params.title);
    if (!foundProduct) {
        res.status(404);
    }
    else {
        res.send(foundProduct);
    }
});
exports.eventsRouter.get("/search/:id", (req, res) => {
    const foundProduct = events_repository_1.eventsRepository.getEventById(+req.params.id);
    if (!foundProduct) {
        res.status(404);
    }
    else {
        res.send(foundProduct);
    }
});
exports.eventsRouter.post("/", (req, res) => {
    if (users_1.users.find(u => u.login === req.body.login && u.password === req.body.password)) {
        events_repository_1.eventsRepository.addEvent(req.body.event) ? res.send({ resCode: 0 }) : res.send({ resCode: 1, error: "some error" });
    }
    else {
        res.send({ resCode: 1, error: "not authorized" });
    }
});
exports.eventsRouter.put("/", (req, res) => {
    if (users_1.users.find(u => u.login === req.body.login && u.password === req.body.password)) {
        events_repository_1.eventsRepository.editEvent(req.body.event) ? res.send({ resCode: 0 }) : res.send({ resCode: 1, error: "some error" });
    }
    else {
        res.send({ resCode: 1, error: "not authorized" });
    }
});
exports.eventsRouter.put("/delete", (req, res) => {
    if (users_1.users.find(u => u.login === req.body.login && u.password === req.body.password)) {
        events_repository_1.eventsRepository.deleteEvent(+req.body.eventId) ? res.send({ resCode: 0 }) : res.send({ resCode: 1, error: `${req.body.eventId}` });
    }
    else {
        res.send({ resCode: 1, error: "not authorized" });
    }
});
