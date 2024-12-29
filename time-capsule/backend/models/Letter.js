const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  letter: { type: String, required: true },
  deliveryDate: { type: Date, required: true },
  attachments: [{ filename: String, path: String }],
});

module.exports = mongoose.model("Letter", letterSchema);
