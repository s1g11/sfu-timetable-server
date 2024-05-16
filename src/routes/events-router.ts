import express, {Request, Response} from "express";
import {ProductViewModel} from "../models/models";
import {RequestWithParams} from "../types/types";
import {productsRepository} from "../repositories/products-repository";


export const eventsRouter = express.Router({})

eventsRouter.get("/", (req: Request, res: Response<ProductViewModel[]>) => {
    const foundEvents = productsRepository.getEventsInPeriod('')

    if (!foundEvents) {
        res.status(404)
    } else {
        res.send(foundEvents)
    }
})

eventsRouter.get("/:period", (req: RequestWithParams<{ period: string }>, res: Response<ProductViewModel[]>) => {
    const foundProduct = productsRepository.getEventsInPeriod(req.params.period)

    if (!foundProduct) {
        res.status(404)
    } else {
        res.send(foundProduct)
    }
})

eventsRouter.get("/search/:title", (req: RequestWithParams<{ title: string }>, res: Response<ProductViewModel[]>) => {
    const foundProduct = productsRepository.getEventByTitle(req.params.title)

    if (!foundProduct) {
        res.status(404)
    } else {
        res.send(foundProduct)
    }
})