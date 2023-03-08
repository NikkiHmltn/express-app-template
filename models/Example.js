const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exampleSchema = new Schema({
    name: {type: String}
})

const Example = mongoose.model("Example", exampleSchema)

module.exports = Example;