import express from 'express'
import dotenv from 'dotenv'

import dbConnect from '../config/db.js'

const app = express()

const PORT = process.env.PORT || 8080

dotenv.config()

dbConnect()

app.listen(PORT, () => {
  console.log(`Serveur connecté sur le port: ${PORT}`)
})
