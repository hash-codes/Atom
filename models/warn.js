const mongoose = require("mongoose");

const warnSchema = mongoose.Schema({
  username: String,
  userID: String,
  reason: String,
  staff: String,
  staffID: String,
  serverID: String,
  time: String
});

module.exports = mongoose.model("Warns", warnSchema);