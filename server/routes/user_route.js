import express from "express";
import {
  getUserData,
  login,
  register,
  updateProfile,
} from "../controllers/user_controller.js";

const router = express.Router();

router.post("/register", register); 
router.post("/login", login);

router.get("/userData", getUserData);

router.put("/update-profile", updateProfile);

export default router;
