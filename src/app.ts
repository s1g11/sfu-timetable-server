import express from "express";
import {eventsRouter} from "./routes/events-router";
import {getTestsRoutes} from "./routes/test";
import {db} from "./db/db";
import cors from "cors";

export const app = express()
export const jsonBodyMiddleware = express.json()

app.use(jsonBodyMiddleware)
app.use(cors())

app.use('/events', eventsRouter)

const testsRoutes = getTestsRoutes(db)
app.use('/__test__', testsRoutes)