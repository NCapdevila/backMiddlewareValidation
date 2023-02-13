const { Farmacity } = require("../models/Farmacity")


const guardarMedicamento = async (req, res) =>{
    try {
            const medicamento = new Farmacity(req.body)
            await medicamento.save()
            res.status(201).json({medicamento})
    } catch (error) {
        res.status(501).json(error)
    }
}

const verMedicamentos = async(req, res) =>{
    const medicamentos = await Farmacity.find()
    res.status(200).json({medicamentos})
}


module.exports = {guardarMedicamento, verMedicamentos}