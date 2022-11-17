const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;