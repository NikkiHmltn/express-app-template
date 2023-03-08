require('dotenv').config()
//APP INSTANCE
const express = require('express')
const app = express()

//VARS
const PORT = process.env.PORT

//EXTERNAL MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

//INTERNAL MIDDLEWARE
const routes = require('./routes/index')

//ROUTING
app.use('/', routes) //divert all reqs off server.js to route's index.js

//our "404 route not found" if it doesnt match any route given
app.use((req,res) => { 
    res.status(404).json({message: "NOT A PROPER ROUTE"})
})

//LISTENERS
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})