const realpath = require('realpath-native');

console.log(`cwd: ${process.cwd()}`);
console.log(`realpath: ${realpath.sync(process.cwd())}`);