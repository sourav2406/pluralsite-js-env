import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.green('Generating minified bundle for prodction. This will take some time.....'));

webpack(webpackConfig).run((err,stats)=>{
  if(err){
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error=>console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings){
    console.log(chalk.yellow('Webpack generated following warnings: '));
    jsonStats.warnings.map(warnings=>console.log(chalk.yellow(warnings)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('Yur app have been build for production and written to /dist!'));

  return 0;

});
