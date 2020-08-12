const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');


const userSchema = mongoose.Schema({
    date:Date,
    status:Number,
    description:String,
});
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'List');
module.exports = mongoose.model('List',userSchema);