import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

async function connectDb(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }
  try {
    const db = mongoose.connect(
      "mongodb+srv://webtanaydev:WgkGmB9BefBee4Dn@cluster0.uxk6ipe.mongodb.net/"
    );
    console.log(db);
  } catch (error) {}
}

export default connectDb;
