const express = require("express");
const dotenv = require("dotenv");

const { errorHandler } = require("./middleware/errorMiddleware");

const router = require("./routes/userRoute");

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on localhost:${port}`);
});
