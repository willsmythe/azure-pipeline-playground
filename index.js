const realpath = require('realpath-native');
const os = require('os');

console.log(`cwd: ${process.cwd()}`);
console.log(`realpath: ${realpath.sync(process.cwd())}`);

console.log(`tmpdir: ${os.tmpdir()}`);
console.log(`realpath: ${realpath.sync(os.tmpdir())}`);