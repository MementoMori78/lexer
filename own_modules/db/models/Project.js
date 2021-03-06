var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    name: String,
    code: String,
    testCode: String,
    automaton: { type: Schema.Types.ObjectId, ref: 'Automaton' },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);