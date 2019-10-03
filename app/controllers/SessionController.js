const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await User.create({
      email,
      password: passwordHash
    });

    return res.json({ _id: user._id, email: user.email, __v: user.__v });
  }
};
