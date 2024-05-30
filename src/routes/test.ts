import express from "express";
import {DBType} from "../db/db";

export const getTestsRoutes = (db: DBType) => {
    const router = express.Router()

    router.delete("/data", (_, res) => {
        res.status(204)
    })

    return router
}