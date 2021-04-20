const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
const routes = require('./routes/index')

app.use(cors('*'))
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/blog', routes.blog)
app.use('/speakcodeback', routes.speakCodeBack)
app.use('/speakcodefront', routes.speakCodeFront)

app.listen(3000, () => console.log('Express server is running'))
