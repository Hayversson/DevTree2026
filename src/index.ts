import 'dotenv/config';
import app from './server';
import { connectDB } from './config/db';

const PORT = process.env.PORT;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running in http://localhost:${PORT}`);
    });
    
};

startServer();