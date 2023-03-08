const db = require('../models') //looks at db index where our exports/connection to db are

const getPage = (req, res) => {
    // db.Example.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    res.send('getPage')
}

const createPage = (req, res) => {
    // db.Example.create({name: 'testing'})
    // .then((res) => {console.log(res)})
    res.send('createPage')
}

const editPage = (req, res) => {
    res.send('editPage')
}

const deletePage = (req, res) => {
    res.send('deletePage')
}

module.exports = {
    getPage, 
    createPage,
    editPage,
    deletePage,
}