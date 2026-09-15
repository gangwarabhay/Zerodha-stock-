const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { userSchema } = require("../schemas/UserSchema");

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 12);
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
