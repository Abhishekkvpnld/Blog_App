
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minLength: [3, "User Name Must Contain At Least 3 Characters!"],
  },
 
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Provide A Valid Email!"],
  },
  phone: {
    type: Number,
    required: true,
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
  },

  password: {
    type: String,
    required: true,
    select: false,
    minLength: [8, "Password Must Contain Atleast 8 Characters!"],
  },
  role: {
    type: String,
    required: true,
    enum: ["TechBlogger", "TravelBlogger", "FoodBlogger","FashionBlogger"],
  },
  docAvatar: {
    public_id: String,
    url: String,
  },
});


const User = mongoose.model("User", userSchema);
export default User;
