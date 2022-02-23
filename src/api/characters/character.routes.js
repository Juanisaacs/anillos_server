const CharacterRoutes = require('express').Router()
const { getAllCharacters } = require('./characters.controller')

CharacterRoutes.get('/', getAllCharacters)

module.exports = CharacterRoutes