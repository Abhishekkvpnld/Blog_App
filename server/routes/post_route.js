import express from "express";
import { addNewPost, commentPost, deletePost, likePost, searchPost } from "../controllers/post_controller.js";

const router = express.Router();

router.post("/new-post",addNewPost);
router.post("/search",searchPost);

router.delete("/delete-post",deletePost);

router.put("/like",likePost);
router.put("/comment",commentPost);

export default router;