const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/create", blogController.blog_create_get); // RENDER CREATE PAGE
router.get("/", blogController.blog_index); // GET ALL
router.post("/", blogController.blog_create_post); // CREATE POST
router.get("/:id", blogController.blog_details); // GET BY ID
router.delete("/:id", blogController.blog_delete); // DELETE BY ID

module.exports = router;
