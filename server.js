const express = require("express");
const connectDb = require("./src/config/dbConnection");
const errorHandler = require("./src/middleware/errorHaandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./src/routes/contactRoutes"));
app.use("/api/users", require("./src/routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
