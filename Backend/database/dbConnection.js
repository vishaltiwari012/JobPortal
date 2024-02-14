import mongoose from "mongoose";

export const dbConnection = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName : "MERN_STACK_JOB_SEEKING"
    }).then(() => {
        console.log("Connected to database successfully")
    }).catch((err) => {
        console.log(`Some error occurred while connecting to database : ${err}`);
    });
};