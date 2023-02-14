const { Farmacity } = require('../models/Farmacity')

const validadorId = async (req, res, next) =>{
    try {
        const item = await Farmacity.findById(req.params.id)
        if(item !== null){
            next()
        }else{
            res.status(500).json({msg: "El id es invalido"})
        }
    } catch (error) {
        res.status(500).json({msg:"El id ingresado tiene un formato incorrecto"})
    }
}

module.exports={validadorId}