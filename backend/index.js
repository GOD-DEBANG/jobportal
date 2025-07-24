import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js'; // Make sure this file exists and exports connectDB

dotenv.config(); //  No need to pass an empty object

const app = express();

// 🔌 Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173', //  Replace with frontend URL in production
    credentials: true,
};
app.use(cors(corsOptions));

// 🛣️ Routes
app.get("/home", (req, res) => {
    return res.status(200).json({
        message: "Hello from the backend",
        success: true
    });
});

//  Connect DB before starting server
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await connectDB(); //  Wait until DB connects
        app.listen(PORT, () => {
            console.log(` Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error(" Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
