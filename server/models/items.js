const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    item_name: {
        type: String,
        required: true
    },
    is_bought: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = itemSchema;