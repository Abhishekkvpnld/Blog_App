import express from "express";
import {
  addNewPost,
  allPost,
  commentPost,
  deletePost,
  likePost,
  searchPost,
  userPosts,
} from "../controllers/post_controller.js";
import { authToken } from "../middlewares/jwtAuth.js";

const router = express.Router();

router.get("/allPosts", allPost);
router.get("/user-posts", authToken, userPosts);

router.post("/addNew", authToken, addNewPost);
router.post("/search", searchPost);

router.delete("/delete-post/:id", authToken, deletePost);

router.put("/like/:id", likePost);
router.put("/comment/:id", commentPost);

export default router;
