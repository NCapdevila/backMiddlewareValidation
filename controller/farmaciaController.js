const { validationResult } = require("express-validator")
const { Farmacity } = require("../models/Farmacity")


const guardarMedicamento = async (req, res) =>{
    try {
            const err = validationResult(req)

            if(err.isEmpty()){
                const medicamento = new Farmacity(req.body)
            await medicamento.save()
            res.status(201).json({medicamento})
            }else{
                res.status(501).json(err)
            }
    } catch (error) {
        res.status(501).json(error)
    }
}

const verMedicamentos = async(req, res) =>{
    const medicamentos = await Farmacity.find()
    res.status(200).json({medicamentos})

    
}

const borrarMedicamento = async(req, res) =>{
    try {
        await Farmacity.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"El medicamento fue eliminado correctamente"})
    } catch (error) {
        res.status(501).json(error)
    }
}

const editarMedicamento = async(req, res) =>{
    try {
        const err = validationResult(req)

        if(err.isEmpty()){
            await Farmacity.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({msg:"El medicamento se actualizo correctamente"})
        }else{
            res.status(501).json(err)
        }
    } catch (error) {
        res.status(501).json(error)
    }



}

module.exports = {guardarMedicamento, verMedicamentos, editarMedicamento, borrarMedicamento}