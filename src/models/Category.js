const mongoose = require('mongoose')

const Category = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    })

module.exports = mongoose.model('Category', Category)