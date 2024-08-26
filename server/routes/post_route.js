import express from "express";
import {
  addNewPost,
  allPost,
  commentPost,
  deletePost,
  getPost,
  likePost,
  searchPost,
  userPosts,
} from "../controllers/post_controller.js";
import { authToken } from "../middlewares/jwtAuth.js";

const router = express.Router();

router.get("/allPosts", allPost);
router.get("/getPost/:id", authToken, getPost);
router.get("/user-posts", authToken, userPosts);

router.post("/addNew", authToken, addNewPost);
router.post("/search", searchPost);

router.delete("/delete-post/:id", authToken, deletePost);

router.put("/like/:id", authToken, likePost);
router.put("/comment/:id", authToken, commentPost);

export default router;
