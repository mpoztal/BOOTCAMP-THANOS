const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    telegram_id: String,
    is_bot: Boolean,
    first_name: String,
    last_name: String,
    username: String,
    language_code: String
});

module.exports = mongoose.model('user', userSchema);