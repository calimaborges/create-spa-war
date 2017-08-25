#!/usr/bin/env node

// warify should create a static folder inside war-template and put all the content from the informed folder inside it
const chalk = require("chalk");
const args = process.argv.slice(2);
const warify = require("warify");

const log = console.log;

const usage = () => {
  log(
    `${chalk.bold(
      "create-spa-war"
    )} is an application to create single page application prepared war from static files`
  );
  log("yarn create spa-war <inputPath> [outputPath]");
};

if (args.length === 0) {
  log(chalk.red("Should inform at least input path"));
  usage();
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1] || ".";

warify(inputFile, outputFile, size => {
  console.log(chalk.green(size + " bytes"));
});
