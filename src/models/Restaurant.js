const mongoose = require('mongoose');

const Restaurant = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        },
        delivery_tax: {
            type: Number,
            required: true
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Category'
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        neighborhood: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        complement: {
            type: String,
            required: true
        },
        reference: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Restaurant', Restaurant);