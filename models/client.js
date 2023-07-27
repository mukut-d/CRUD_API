//this will contain schema for database

const mongoose = require('mongoose');

const mukutSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})
// module.exports ={};
module.exports = mongoose.model('client',mukutSchema);                    