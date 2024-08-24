import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import cloudinary from "cloudinary";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { userName, password, email, phone, role, confirmPassword } =
      req.body;
    const { docAvatar } = req.files;

    if (!req.files || Object.keys(req.files).length === 0)
      throw new Error("Please Select profile Image...❌");
    if (!userName) throw new Error("Please Enter User Name...❌");
    if (!password) throw new Error("Please Enter password...❌");
    if (!email) throw new Error("Please Enter Email...❌");
    if (!phone) throw new Error("Please Enter Phone...❌");
    if (!role) throw new Error("Please Provide Role...❌");
    if (confirmPassword !== password)
      throw new Error("Password Not Matching,Please check Password...🤦‍♂️");

    let hashedPassword = await bcrypt.hash(password, 10);

    let checkUser = await User.findOne({ email: email });
    if (checkUser) throw new Error("User Already Registered...🤦‍♂️");

    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(docAvatar.mimetype))
      throw new Error("File Format Not Supported...❌");

    const cloudinaryResponse = await cloudinary.v2.uploader.upload(
      docAvatar.tempFilePath,
      {
        folder: "blog_app",
        upload_preset: "Blog_App",
      }
    );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.error(
        "Cloudinary Error:",
        cloudinaryResponse.error || "Unknown Cloudinary Error ❌"
      );
    }

    await User.create({
      userName,
      email,
      password: hashedPassword,
      phone,
      role,
      docAvatar: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    });

    return res.status(200).json({
      success: true,
      error: false,
      message: "User Registered Successfully...✅",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { password, email } = req.body;

    if (!email) throw new Error("Please Provide Email...❌");
    if (!password) throw new Error("Please Provide password...❌");

    let checkUser = await User.findOne({ email: email }).select("+password");
    if (!checkUser) throw new Error("User Not Found...🤦‍♂️");

    let checkPassword = await bcrypt.compare(password, checkUser.password);

    if (checkPassword) {
      const tokenData = {
        id: checkUser._id,
        username: checkUser.userName,
        email: checkUser.email,
        phone: checkUser.phone,
        role: checkUser.role,
      };
      const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
      });

      const tokenOption = {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      };

      return res.cookie("token", token, tokenOption).status(200).json({
        success: true,
        error: false,
        message: "Logged In Successfully...✅",
      });
    } else {
      throw new Error("Please Check Password...🤦‍♂️");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const getUserData = async (req, res) => {
  try {
    const userData = await userModel.findById(req.user.id);

    res.status(200).json({
      data: userData,
      message: "User details...🪪",
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token").status(200).json({
      success: true,
      error: false,
      message: "Logged Out Successfully...✅",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
