const express = require('express')
const cors = require('cors');
const CharacterRoutes = require('./src/api/characters/character.routes');
const LocalRoutes = require('./src/api/local/local.routes');

const { connectDB } = require('./src/utils/db')

const PORT = process.env.PORT || 8080

const app = express()

connectDB()



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200','https://anillos-server-gby816zt7-juanisaacs.vercel.app/'],
    credentials: true
}))

app.use(express.json({
    limit: '5mb'
}))

app.use(express.urlencoded({ limit: '5mb', extended: true }))

app.use('/api/character', CharacterRoutes)
app.use('/api/local', LocalRoutes);
//app.use('/', (req, res, next) => {
    //return res.json('ANILLO UH SERVE')
//})

app.use('*', (req, res, next) => {
    return next(setError(404, 'Route not found'))
})

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error')
})

app.disable('x-powered-by')

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})