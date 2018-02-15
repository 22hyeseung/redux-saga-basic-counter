const builder = require('jest-trx-results-processor');
const fs = require('fs');

const path = './TestResults';

if (!fs.existsSync(path)) {
  fs.mkdir(path, err => {
    if (err) throw err;
  });
}

const processor = builder({
  outputFile: `${path}/test-results.xml`,
});

module.exports = processor;
