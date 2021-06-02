const Blog = require("../models/Blog");

// GET ALL async await
const blog_index = async (req, res) => {
  try {
    const foundBlogs = await Blog.find().sort({ createdAt: -1 });
    res.render("blogs/index", { blogs: foundBlogs, title: "All blogs" });
  } catch (err) {
    console.log(err);
  }
};
// GET BY ID async await
const blog_details = async (req, res) => {
  const id = req.params.id;
  try {
    const foundBlog = await Blog.findById(id);
    res.render("blogs/details", { blog: foundBlog, title: "Blog Details" });
  } catch (err) {
    res.render("404", { title: "Blog not found" });
  }
};
// RENDER CREATE PAGE
const blog_create_get = (req, res) => {
  const images = [
    "audits",
    "ens",
    "forensic",
    "gdpr",
    "implementation",
    "industrial",
    "iso",
    "managed",
    "training",
  ];
  res.render("blogs/create", { images: images, title: "Create a new blog" });
};
// CREATE POST async await
const blog_create_post = async (req, res) => {
  // objecte que ve de la linia 29(app.js)__express.urlencoded({ extended: true })
  const blog = new Blog(req.body);
  try {
    const savedBlog = await blog.save();
    console.log(savedBlog);
    res.redirect("/blogs");
  } catch (err) {
    console.log(err);
  }
};
// DELETE BY ID async await
const blog_delete = async (req, res) => {
  const id = req.params.id;
  try {
    const removedBlog = await Blog.findByIdAndDelete(id);
    console.log(removedBlog);
    // no podem fer un redirect al backend desde frontend, solucio enviar un redirect al frontend amb un json
    res.json({ redirect: "/blogs" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
