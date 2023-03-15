import cors from "cors"
import express from "express"
import colors from "colors"

import dotenv from "dotenv"
dotenv.config()

import apiRoute from "./routes/api.routes.js"

const app = express();
app.use(cors())

app.use("/api/v1", apiRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Say hello on `.magenta + `http://localhost:${PORT}`.yellow.underline);
});