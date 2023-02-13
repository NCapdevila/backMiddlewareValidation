const express = require("express")
const router = express.Router()
const Controller = require("../controller/farmaciaController")


router.get("/ver", Controller.verMedicamentos)
router.post("/crear", Controller.guardarMedicamento)


module.exports = router