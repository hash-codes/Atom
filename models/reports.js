const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema({
    userID: String,
    username: String,
    serverID: String,
    reports: String,
    reason: String,
    staff: String,
    staffID: String,
    time: String
});

module.exports = mongoose.model('Reports', ReportSchema);