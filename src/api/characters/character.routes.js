const CharacterRoutes = require('express').Router()
const { getAllCharacters,getAllCharactersById  } = require('./character.controller')

CharacterRoutes.get('/', getAllCharacters)
CharacterRoutes.get('/:id', getAllCharactersById)

module.exports = CharacterRoutes