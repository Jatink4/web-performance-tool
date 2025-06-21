import mongoose from 'mongoose';

const testSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    testType: {
      type: String, // e.g., 'url' or 'upload'
      required: true,
    },
    target: {
      type: String, // URL tested or uploaded filename
      required: true,
    },
    scores: {
      performance: Number,
      accessibility: Number,
      seo: Number,
      bestPractices: Number,
    },
    rawReportUrl: String, 
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model('Test', testSchema);
export default Test;
