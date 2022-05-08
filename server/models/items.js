const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const itemSchema = new Schema({
    item_name: {
        type: String,
        required: true
    },
    is_bought: {
        type: Boolean,
        required: true,
        default: false
    },

},
{
    timestamps: true
});

const Items = model('Items', itemSchema);

module.exports = Items;