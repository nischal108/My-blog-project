const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nishchalb21:NB5TbGJNdghPRr5E@cluster0.0oavpu3.mongodb.net/miniproject")

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: String,
    password: { type: String, required: true },
    age: Number,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model("User", userSchema);
