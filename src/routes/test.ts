import express from "express";
import {DBType} from "../db/db";

export const getTestsRoutes = (db: DBType) => {
    const router = express.Router()

    router.delete("/data", (_, res) => {
        db.products = []
        res.status(204)
    })

    return router
}