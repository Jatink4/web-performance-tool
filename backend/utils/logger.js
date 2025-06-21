import chalk from 'chalk';

export const logSuccess = (msg) => {
  console.log(chalk.greenBright(`✅ ${msg}`));
};

export const logError = (msg) => {
  console.error(chalk.redBright(`❌ ${msg}`));
};

export const logInfo = (msg) => {
  console.log(chalk.blueBright(`ℹ️  ${msg}`));
};
