const CharacterRoutes = require('express').Router()
const { getAllCharacters } = require('./character.controller')

CharacterRoutes.get('/', getAllCharacters)

module.exports = CharacterRoutes