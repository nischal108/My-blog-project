const mongoose = require('mongoose');

mongoose.connect("yourdblink/miniproject")

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: String,
    password: { type: String, required: true },
    age: Number,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    profilepic : {
        type:String,
        default: "default.png"
    }
});

module.exports = mongoose.model("User", userSchema);
