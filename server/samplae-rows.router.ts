import * as express from "express";
import { Router } from "express";

export const samplesRowsRouterFactory = (): Router => {
    const router = express.Router();

    router.get("/all", (req, res) => {
       res.status(200).json([
           {
               name: "Row 1",
               description: "Loaded row 1"
           },
           {
               name: "Row 2",
               description: "Loaded row 2"
           }
       ]);
    });

    return router;
};