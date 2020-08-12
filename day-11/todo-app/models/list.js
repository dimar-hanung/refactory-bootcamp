const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
const listSchema = mongoose.Schema({
    date:Date,
    name:String,
    status:Boolean,
    description:String,
});
// autoIncrement.initialize(mongoose.connection);
// listSchema.plugin(autoIncrement.plugin, 'List');
module.exports = mongoose.model('List',listSchema);