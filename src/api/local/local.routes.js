const LocalRoutes = require('express').Router()
const { getAllLocals } = require('./local.controller')

LocalRoutes.get('/', getAllLocals)

module.exports = LocalRoutes