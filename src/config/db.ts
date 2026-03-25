import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = 'mongodb://HayverDB:UZtKsxLNgZ2xfzi0@ac-mkkqz8j-shard-00-00.c7ss1qx.mongodb.net:27017,ac-mkkqz8j-shard-00-01.c7ss1qx.mongodb.net:27017,ac-mkkqz8j-shard-00-02.c7ss1qx.mongodb.net:27017/?ssl=true&replicaSet=atlas-2cw1wm-shard-0&authSource=admin&appName=Cluster1H';
        const { connection } = await mongoose.connect(url);
        const urlTwo = `${connection.host}:${connection.port}`;

        console.log('MongoDB connected to port:', urlTwo);

    } catch (error) {
        console.log('Error connecting to MongoDB\n', error);
    }
}

    