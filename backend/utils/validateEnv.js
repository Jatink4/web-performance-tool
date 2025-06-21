export const validateEnv = () => {
  const required = ['MONGO_URI'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(`❌ Missing required ENV vars: ${missing.join(', ')}`);
    process.exit(1);
  }
};
