const express = require("express");
const profileController = require("../controllers/profileController");

const router = express.Router();

router.get("/profiles/create", profileController.profile_create_get); // RENDER CREATE PAGE
router.get("/profiles", profileController.profile_index); // GET ALL
router.post("/profiles", profileController.profile_create_post); // CREATE PROFILE
router.get("/profiles/:id", profileController.profile_details); // GET BY ID
// router.delete("/profiles/:id", profileController.profile_delete); // DELETE BY ID

module.exports = router;
