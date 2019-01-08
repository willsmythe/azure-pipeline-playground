const os = require('os');
const path = require('path');
const mkdirp = require('mkdirp');
const {sync: spawnSync} = require('execa');

const HG = 'hg --config ui.username=jest_test';
const DIR = path.resolve(os.tmpdir(), 'jest_only_changed');

console.log(`DIR: ${DIR}`);
console.log(`PATH: ${process.env.PATH}`);

let cmd = `${HG} --version`;
let cwd = DIR;

if (process.env.MKDIR) {
    mkdirp.sync(cwd);
}

const args = cmd.split(/\s/).slice(1);
const spawnOptions = {cwd, reject: false};
const result = spawnSync(cmd.split(/\s/)[0], args, spawnOptions);

console.log(JSON.stringify(result, null, 2));

  // For compat with cross-spawn
  result.status = result.code;

  if (result.status !== 0) {
    const message = `
      ORIGINAL CMD: ${cmd}
      STDOUT: ${result.stdout}
      STDERR: ${result.stderr}
      STATUS: ${result.status}
      ERROR: ${result.error}
    `;
    throw new Error(message);
  }
