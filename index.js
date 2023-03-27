import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import config from "./src/config.js"
import employees from "./src/routes/employees.js"

const app = express()
const ctx = { app }

await mongoose.connect(config.db)

app.use(cors())
app.use(express.json())

employees(ctx)

app.listen(config.port, () => console.log(`Listening on :${config.port}`))
