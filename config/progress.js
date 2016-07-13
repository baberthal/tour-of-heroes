const ProgressBar = require('progress');
const chalk = require('chalk');

let INSTANCE = undefined;
let lastPercent = 0;

module.exports = function(percent, msg) {
  percent = Math.floor(percent * 100);
  if (!INSTANCE) {
    INSTANCE = new ProgressBar(' :msg [:bar] :percent', {
      complete: chalk.green('='),
      incomplete: ' ',
      width: 25,
      total: 100,
    });
  }
  let diff = Math.floor(percent - lastPercent);
  lastPercent = lastPercent + diff;

  INSTANCE.tick(diff, {msg: msg.toString().trim()});
};
