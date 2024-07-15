import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    gender: {
      type: String,
      require: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
