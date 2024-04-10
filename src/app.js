const express = require("express");
const cors = require("cors");
const app = express();

// Settings
//
app.set("port", process.env.PORT || 4040);

// Middlewares
//
app.use(cors());
//app.use(morgan("dev"));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Global variables
//
//app.use((req, res, next) => {
// next();
//});

// Routes
//
app.use("/api/adm/usrs", require("./routes/adm/usrs.js"));
app.use("/api/adm/objs", require("./routes/adm/objs.js"));
app.use("/api/adm/imgs", require("./routes/adm/imgs.js"));
//app.use(require("./routes/index.js"));
//app.use(require("./routes/authentication.js"));
//app.use(require("./routes/links.js"));

// Static files
//
//app.use('/', express.static(path.join(__dirname, "public")));

module.exports = app;