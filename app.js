const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const { connect } = require("./db/db")
require("dotenv").config()


const app = express()

const farmaciaRouter = require("./router/farmacia")

app.use(logger("dev"))
app.use(cors())
app.use(express.json())


app.use("/farmacia", farmaciaRouter)

connect();
module.exports = app