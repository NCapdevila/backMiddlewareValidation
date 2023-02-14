const express = require("express")
const router = express.Router()
const Controller = require("../controller/farmaciaController")
const { validadorId } = require("../middleware/validadorId")
const {check} = require('express-validator')


router.get("/ver", Controller.verMedicamentos)


router.post("/crear",[
    check("nombreMedicamento").not().isEmpty().withMessage("El campo nombre del medicamento es requerido"),
    check("precio").not().isEmpty().withMessage("El campo precio del medicamento es requerido"),
    check("cantidadStock").not().isEmpty().withMessage("La cantidad de stock del medicamento es requerido"),
    check("oferta").not().isEmpty().withMessage("Es necesario saber si el medicamento mantiene una oferta")
], Controller.guardarMedicamento)


router.put("/editar/:id", validadorId,[
    check("nombreMedicamento").not().isEmpty().withMessage("El campo nombre del medicamento es requerido"),
    check("precio").not().isEmpty().withMessage("El campo precio del medicamento es requerido"),
    check("cantidadStock").not().isEmpty().withMessage("La cantidad de stock del medicamento es requerido"),
    check("oferta").not().isEmpty().withMessage("Es necesario saber si el medicamento mantiene una oferta")
] ,Controller.editarMedicamento)


router.delete("/borrar/:id", validadorId, Controller.borrarMedicamento)


module.exports = router