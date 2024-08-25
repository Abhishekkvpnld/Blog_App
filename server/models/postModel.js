import mongoose from "mongoose";
import validator from "validator";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    postImg: {
      public_id: String,
      url: String,
    },
    like: {
      type: Array,
      default: [],
    },
    comment: {
      type: Number,
      default: 15,
    },
    share:{
      type:Number,
      default:22
    }
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
