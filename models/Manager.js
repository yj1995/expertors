const mongoose = require('mongoose')
let Schema = mongoose.Schema;

const todo = new Schema({
  managerName: String,
  AdminName: String,
  AdminID: Number,
  data: String,
  managerID: Number,
}, { collection: 'todo', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = Rooms = mongoose.model('todo', todo)