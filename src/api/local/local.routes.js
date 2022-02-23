const LocalRoutes = require('express').Router()
const { getAllLocals, getAllLocalsById } = require('./local.controller')

LocalRoutes.get('/', getAllLocals)
LocalRoutes.get('/:id', getAllLocalsById)

module.exports = LocalRoutes