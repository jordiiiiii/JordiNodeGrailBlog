// // // CONNECT TO DB
// require("./db/mongoose");
// const express = require("express");
// const logger = require("morgan");
// // const path = require("path");
// // // IMPORT ROUTES
// const authRoutes = require("./routes/authRoutes");
// const blogRoutes = require("./routes/blogRoutes");
// const profileRoutes = require("./routes/profileRoutes");
// const cookieParser = require("cookie-parser");
// const { requireAuth, checkUser } = require("./middleware/authMiddleware");
//
// // // SET UP EXPRESS APP
// const app = express();
//
// // // REGISTER VIEW ENGINE
// app.set("view engine", "ejs");
// // app.set("views", __dirname + "/views");
//
// // // MIDDLEWARES & // // STATIC FILES
// // after next make a log and let the request continue
// app.use(logger("dev"));
// // acces a public file
// app.use(express.static("public"));
// // app.use(express.static(__dirname + "/public"));
// // app.use("/", express.static("public"));
// app.use("/uploads", express.static("uploads"));
// // agafa el json request i el transforma en js object
// app.use(express.json());
// // cookies
// app.use(cookieParser());
// // agafa tota la info codificada de la url i la passa al objecte que utilitzarem en el request object__linia 29
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });
//
// // // ROUTES
// app.get("*", checkUser);
// app.get("/", (req, res) => {
//   // res.redirect("/blogs");
//   res.render("home", { title: "Home" });
// });
// app.get("/about", (req, res) => {
//   res.render("about", { title: "About" });
// });
// app.get("/bloogs", requireAuth, (req, res) => {
//   res.render("blogs/bloogs", { title: "Bloogs" });
// });
// // blog routes
// app.use("/blogs", blogRoutes);
// // user routes
// app.use(authRoutes);
// // profiles routes
// app.use(profileRoutes);
// // 404 page
// app.use((req, res) => {
//   res.status(404).render("404", { title: "404" });
// });
//
// module.exports = app;
