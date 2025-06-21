import mongoose from 'mongoose';
import { logSuccess, logError } from '../utils/logger.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logSuccess("✅ MongoDB Connected");
  } catch (error) {
    logError(`❌ MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
