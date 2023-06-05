import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait for database connection...");

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongoose connection established!"))
    .catch((error) => console.error(error));
};

export default connectDatabase;