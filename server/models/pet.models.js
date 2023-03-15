const mongoose = require('mongoose')

const PetSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Must enter a name'],
        minlength:[3, 'Name must be at least 3 characters'],
        maxlength:[20, 'We understand this pet is awesome, but please abbreviate to <= 20 characters. The pet will appreciate it.']
    },
    type:{
        type:String,
        required: [true, 'Must enter a type'],
        minlength:[3, 'Type must be at least 3 characters'],
        maxlength:[20, 'Not sure that type exists; please keep it under 20 characters for those of us who do not study systematics.']

    },
    description:{
        type: String,
        required: [true, 'Must enter a description'],
        minlength:[3, 'Description must be at least 3 characters; show some love.']
    },
    skillOne:{
        type:String,
        minlength:[3, 'If you would like to add/edit a skill it must be at least 3 characters']
    },
    skillTwo:{
        type:String,
        minlength:[3, 'If you would like to add/edit a skill it must be at least 3 characters']
    },
    skillThree:{
        type:String,
        minlength:[3, 'If you would like to add/edit a skill it must be at least 3 characters']
    },
    likes:{
        type: Number
    }

}, {timestamps:true})

const Pet = mongoose.model('Pet', PetSchema)
module.exports = Pet