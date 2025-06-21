import Test from '../models/testModel.js';

export const addDummyTest = async (req, res) => {
  try {
    const dummy = await Test.create({
      userId: '123456',
      testType: 'url',
      target: 'https://example.com',
      scores: {
        performance: 85,
        accessibility: 90,
        seo: 95,
        bestPractices: 92,
      },
      rawReportUrl: 'https://example-s3-link.com/report.json',
    });
    res.status(201).json(dummy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find({}).sort({ createdAt: -1 });
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
