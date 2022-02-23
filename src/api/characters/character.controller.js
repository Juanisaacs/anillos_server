
const Character = require('./character.models')

const getAllCharacters = async (req, res, next) => {
    try {
        const characterDB = await Character.find()
        res.status(200).json(characterDB)
    } catch (error) {
        return next(setError(500, 'Aillo failed server'))
    }
}

module.exports = { 

    getAllCharacters

}