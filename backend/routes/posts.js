import express from "express";
import {
	getPosts,
	getPostsBySearch,
	createPost,
	updatePost,
	deletePost,
	likePost,
	getPostById,
	commentPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// http://localhost:5000/posts
router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/:id", getPostById);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
