import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating the minification files, this could take a moment...'));

webpack(webpackConfig).run((error, stats) => {
  if (error) {
    console.log(chalk.red(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following Warnings'))
    jsonStats.warnings.map(warning => console.log(chalk.red(warning)));
  }

  console.log(`Webpack ${stats}`);
  console.log(chalk.green('Your app has been build to production'));

  return 0;
});
