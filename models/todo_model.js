const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema( {
    msg: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type:String,
        required:true
    }
});

const todo_model = mongoose.model('todo_model', todoSchema);

module.exports = todo_model;

