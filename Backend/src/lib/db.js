import mangoose from 'mongoose';

export const connectDB= async () => {
    try {
        const conn = await mangoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch(error) {
        console.error("MongoDB connection failed", error);
    }
}

// 1 12 30