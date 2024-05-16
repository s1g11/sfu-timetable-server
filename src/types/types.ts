import {Request} from "express";

export type eventType = {
    id: number
    month: string
    title: string
    description: string
    date: string
    time: string
    place: string
    color: string | null
}

export type RequestWithBody<T> = Request<{}, {}, T>
export type RequestWithQuery<T> = Request<{}, {}, {}, T>
export type RequestWithParams<T> = Request<T>