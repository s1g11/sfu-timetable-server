import express, {Request, Response} from "express";
import {AdminResponseModel, ProductViewModel} from "../models/models";
import {EventType, EventTypeWithoutId, RequestWithBody, RequestWithParams} from "../types/types";
import {eventsRepository} from "../repositories/events-repository";
import {users} from "../db/users";


export const eventsRouter = express.Router({})

eventsRouter.get("/", (req: Request, res: Response<ProductViewModel[]>) => {
    const foundEvents = eventsRepository.getEventsInPeriod('')

    if (!foundEvents) {
        res.status(404)
    } else {
        res.send(foundEvents)
    }
})

eventsRouter.get("/:period", (req: RequestWithParams<{ period: string }>, res: Response<ProductViewModel[]>) => {
    const foundProduct = eventsRepository.getEventsInPeriod(req.params.period)

    if (!foundProduct) {
        res.status(404)
    } else {
        res.send(foundProduct)
    }
})

eventsRouter.get("/search/:title", (req: RequestWithParams<{ title: string }>, res: Response<ProductViewModel[]>) => {
    const foundProduct = eventsRepository.getEventByTitle(req.params.title)

    if (!foundProduct) {
        res.status(404)
    } else {
        res.send(foundProduct)
    }
})

eventsRouter.get("/search/:id", (req: RequestWithParams<{ id: string }>, res: Response<ProductViewModel>) => {
    const foundProduct = eventsRepository.getEventById(+req.params.id)

    if (!foundProduct) {
        res.status(404)
    } else {
        res.send(foundProduct)
    }
})

eventsRouter.post("/", (req: RequestWithBody<{ login: string, password: string, event: EventTypeWithoutId }>, res: Response<AdminResponseModel>) => {
    if (users.find(u => u.login === req.body.login && u.password === req.body.password)) {
        eventsRepository.addEvent(req.body.event) ? res.send({resCode: 0}) : res.send({resCode: 1, error: "some error"})
    }
    else {
        res.send({resCode: 1, error: "not authorized"})
    }
})

eventsRouter.put("/", (req: RequestWithBody<{ login: string, password: string, event: EventType }>, res: Response<AdminResponseModel>) => {
    if (users.find(u => u.login === req.body.login && u.password === req.body.password)) {
        eventsRepository.editEvent(req.body.event) ? res.send({resCode: 0}) : res.send({resCode: 1, error: "some error"})
    }
    else {
        res.send({resCode: 1, error: "not authorized"})
    }
})

eventsRouter.put("/delete", (req: RequestWithBody<{ login: string, password: string, eventId: number }>, res: Response<AdminResponseModel>) => {
    if (users.find(u => u.login === req.body.login && u.password === req.body.password)) {
        eventsRepository.deleteEvent(+req.body.eventId) ? res.send({resCode: 0}) : res.send({resCode: 1, error: `${req.body.eventId}`})
    }
    else {
        res.send({resCode: 1, error: "not authorized"})
    }
})