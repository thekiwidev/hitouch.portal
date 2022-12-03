const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/studentRoute"));
app.use("/api/info", require("./routes/personalInfoRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on localhost:${port}`);
});

// hitouch@@@14
