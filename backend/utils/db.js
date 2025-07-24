import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connected successfully");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1); // Exit the process with failure
    }

    mongoose.connection.on('error', (err) => {
        console.error("❌ MongoDB runtime error:", err);
    });
};

export default connectDB;
