
const Local = require('./local.models')

const getAllLocals = async (req, res, next) => {
    try {
        const localDB = await Local.find()
        res.status(200).json(localDB)
    } catch (error) {
        return next(setError(500, 'Aillo failed server'))
    }
}
const getAllLocalsById = async (req, res, next) => {
    try {
      const {id} = req.params;
        const localDB = await Local.findById(id)
        res.status(200).json(localDB)
    } catch (error) {
        return next(setError(500, 'Aillo failed server'))
    }
}

module.exports = { 

    getAllLocals,
    getAllLocalsById 

}