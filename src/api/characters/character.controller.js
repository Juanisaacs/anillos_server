
const Character = require('./character.models')

const getAllCharacters = async (req, res, next) => {
    try {
        const characterDB = await Character.find()
        res.status(200).json(characterDB)
    } catch (error) {
        return next(setError(500, 'Aillo failed server'))
    }
}

const getAllCharactersById = async (req, res, next) => {
    try {
      const {id} = req.params;
        const characterDB = await Character.findById(id)
        res.status(200).json(characterDB)
    } catch (error) {
        return next(setError(500, 'Aillo failed server'))
    }
}
module.exports = { 

    getAllCharacters,
    getAllCharactersById

}