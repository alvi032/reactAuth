const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const db = require('./config/keys').mongoURI

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log('Mongo DB Connected Successfully'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on port ${port}`))