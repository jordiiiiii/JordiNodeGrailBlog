const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title field is required"],
    },
    snippet: {
      type: String,
      trim: true,
      required: [true, "Snippet field is required"],
    },
    body: {
      type: String,
      trim: true,
      required: [true, "Body field is required"],
    },
    imageurl: {
      type: String,
      trim: true,
      required: true,
    },
    available: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// name: "Blog" perque es el singular de la colleccio Blogs a database
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
