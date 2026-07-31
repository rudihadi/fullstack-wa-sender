// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Test Route
// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "WhatsApp Gateway API Berjalan",
//   });
// });

// module.exports = app;

// ==========================================================

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
// app.use("/api/auth", authRoutes); // ======

const errorHandler = require("./middlewares/error.middleware");
app.use(errorHandler);

module.exports = app;
