require("./db/mongoose");

const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const path = require("path");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const profileRoutes = require("./routes/profileRoutes");

const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// // ROUTES
app.get("*", checkUser);
app.get("/", (req, res) => {
  // res.redirect("/blogs");
  res.render("home", { title: "Home" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/bloogs", requireAuth, (req, res) => {
  res.render("blogs/bloogs", { title: "Bloogs" });
});
// blog routes
app.use("/blogs", blogRoutes);
// user routes
app.use(authRoutes);
// profiles routes
app.use(profileRoutes);
// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

module.exports = app;
