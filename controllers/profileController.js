const Profile = require("../models/Profile");

// RENDER CREATE PAGE
const profile_create_get = (req, res) => {
  res.render("profiles/create", { title: "Create a new profiles" });
  // res.json({ confirmation: "success", data: "this is the profiles endpoint" });
};
// GET ALL async await
const profile_index = async (req, res) => {
  try {
    const query = req.query;
    const foundProfiles = await Profile.find(query).sort({ createdAt: -1 });
    res.json({ confirmation: "success", data: foundProfiles });
    // res.render("profiles/index", {
    //   blogs: foundProfiles,
    //   title: "All profiles",
    // });
  } catch (err) {
    console.log(err);
  }
};
// CREATE PROFILE async await
const profile_create_post = async (req, res) => {
  // // objecte que ve de la linia 29(app.js)__express.urlencoded({ extended: true })
  let profile = new Profile(req.body);
  try {
    const user_id = profile.user._id;
    const found = await Profile.find({ user: user_id });

    console.log(found);
    if (found.length > 0) {
      res.json({ confirmation: "success", data: "Already exist" });
    } else {
      const savedProfile = await profile.save();
      console.log(savedProfile);
      res.json({ confirmation: "success", data: savedProfile });
    }
  } catch (err) {
    console.log(err);
  }
};
// GET BY ID async await
const profile_details = async (req, res) => {
  const id = req.params.id;
  const user_id = res.locals.user._id;
  console.log(user_id);
  try {
    const foundProfile = await Profile.findById(id);
    // const foundProfile = await User.findById(user_id);
    res.json({ confirmation: "success", data: foundProfile });
    // const foundProfile = await Profile.findById(id);
    // res.render("profiles/details", {
    //   blog: foundProfile,
    //   title: "Profile Details",
    // });
  } catch (err) {
    res.render("404", { title: "Profile not found" });
  }
};

module.exports = {
  profile_create_get,
  profile_index,
  profile_create_post,
  profile_details,
};
