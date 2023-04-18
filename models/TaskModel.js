const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model("task", TaskSchema);

