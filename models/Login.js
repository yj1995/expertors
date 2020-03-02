const mongoose = require('mongoose')
let Schema = mongoose.Schema;

const login = new Schema({
    login: String,
    password: String,
    _id: String
}, { collection: 'Login', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = Login = mongoose.model('todo', login)