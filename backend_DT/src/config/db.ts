import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'devtree2026',
        });
        
        const url = `${connection.host}:${connection.port}`;

        console.log('MongoDB connected to port:', url);

    } catch (error) {
        console.log('Error connecting to MongoDB\n', error);
    }
}