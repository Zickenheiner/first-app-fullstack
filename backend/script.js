import express from "express"
import cors from "cors"
import data from './data.json' assert { type: 'json' };

const port = 3005
const app = express()

app.use(cors({ origin: ["http://localhost:5173"] }))

app.get("/api/data", (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log("Ecoute sur le port :", port)
})