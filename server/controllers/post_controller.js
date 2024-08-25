import Post from "../models/postModel.js";
import cloudinary from "cloudinary";
import User from "../models/userModel.js";

export const addNewPost = async (req, res) => {
  try {
    const { title, content, contentType, share, comment } = req.body;
    const { postImg } = req.files;
    const userId = req.user.id;

    if (!req.files || Object.keys(req.files).length === 0)
      throw new Error("Please Select Post Image...❌");
    if (!title) throw new Error("Please Provide Title...❌");
    if (!content) throw new Error("Please Provide Content...❌");
    if (!contentType) throw new Error("Please Provide Content Type...❌");

    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(postImg.mimetype))
      throw new Error("File Format Not Supported...❌");

    const cloudinaryResponse = await cloudinary.v2.uploader.upload(
      postImg.tempFilePath,
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

    await Post.create({
      userId: userId,
      title,
      content,
      contentType,
      share,
      comment,
      postImg: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    });

    res.status(200).json({
      success: true,
      error: false,
      message: "Post Added Successfully✅",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.id;


    const checkPost = await Post.findById(postId);
    if (!checkPost) throw new Error("Post Not Found❌");

    if (checkPost.userId.toString() !== userId)
      throw new Error("You Don't Have Permission To Delete This Post🔐");

    await Post.findOneAndDelete({ _id: postId });

    res.status(200).json({
      success: true,
      error: false,
      message: "Post Deleted Successfully✅",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const allPost = async (req, res) => {
  try {
    const allPosts = await Post.find();

    const allData = [];

    for (let i = 0; i < allPosts.length; i++) {
      const post = allPosts[i];
      const userId = post.userId;

      const userData = await User.findById(userId);

      const combinedData = {
        ...post.toObject(),
        userData,
      };

      allData.push(combinedData);
    }

    return res.status(200).json({
      success: true,
      error: false,
      data: allData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const userPosts = async (req, res) => {
  try {
    const userId = req.user.id;
    const getUserPosts = await Post.find({ userId });

    if (getUserPosts.length === 0) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "No Posts Found...",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      error: false,
      data: getUserPosts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const postData = await Post.findById(postId);
    if (!postData) throw new Error("Post Not Found ❌");

    const uploaderId = postData.userId;
    const uploaderData = await User.findById(uploaderId);

    const combinedData = {
      ...postData.toObject(),
      uploaderData,
    };

    return res.status(200).json({
      success: true,
      error: false,
      data: combinedData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const likePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    if (!userId) throw new Error("Please Login First...🔐");

    const findPost = await Post.findOne({ _id: postId });
    if (!findPost) throw new Error("Post Not Found...❌");

    const checkIsLiked = findPost.like.includes(userId);

    if (checkIsLiked) {
      // Unliking the post
      findPost.like = findPost.like.filter((id) => id !== userId);
      await findPost.save();
      return res.status(200).json({
        success: true,
        error: false,
        data: findPost,
        message: "UnLiked 🩷",
      });
    } else {
      // Liking the post
      findPost.like.push(userId);
      await findPost.save();
      return res.status(200).json({
        success: true,
        error: false,
        data: findPost,
        message: "Liked 🩷",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const commentPost = async (req, res) => {};

export const searchPost = async (req, res) => {
  try {
    const { query } = req.body;
    if (query.length === 0)
      throw new Error("Please Type Something To Search...🔍");

    const regex = new RegExp(query, "ig");

    const posts = await Post.find({
      $or: [
        {
          title: regex,
        },
        {
          content: regex,
        },
        {
          contentType: regex,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      error: false,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
