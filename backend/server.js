import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';
import { validateEnv } from './utils/validateEnv.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import { logSuccess, logError } from './utils/logger.js';

dotenv.config();
validateEnv();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Backend server is running...');
});
app.use('/api/tests', testRoutes);

// After all routes:
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logSuccess(`Server running on port ${PORT}`);
});
