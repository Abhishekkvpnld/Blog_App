import express from "express";
import {
  getUserData,
  login,
  logOut,
  register,
  updateProfile,
} from "../controllers/user_controller.js";
import { authToken } from "../middlewares/jwtAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/userData", authToken, getUserData);
router.get("/logout", authToken, logOut);

router.put("/update-profile", authToken, updateProfile);

export default router;
