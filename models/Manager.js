const mongoose = require('mongoose')
let Schema = mongoose.Schema;

const todo = new Schema({
  managerName: String,
  AdminId: String,
  data: Array,
  managerId: String,
}, { collection: 'Manager', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = Todo = mongoose.model('todo', todo)