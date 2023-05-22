const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
  } catch (error) {
    console.log("from dbConnection: ", error);
    process.exit(1);
  }
};

module.exports = connectDb;
