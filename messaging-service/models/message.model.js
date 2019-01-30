const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    recipients: {
        type: [String]
    },
    subject: {
        type: String,
        required: true,
        max: 40
    },
    body: {
        type: String,
        required: true,
        max: 200
    },
    is_sent: {
        type: Boolean
    }
});

module.exports = mongoose.model('Message', MessageSchema);
