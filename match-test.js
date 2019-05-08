const path = require('path');
const fs = require('fs');
const mm = require('minimatch');

const baseDir = path.resolve('files');
const filelist = [];

const walkSync = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            walkSync(path.join(dir, file));
        } else {
            filelist.push(path.relative(baseDir, path.join(dir, file)).split(path.sep).join('/'));
        }
    });
};

walkSync(baseDir);
filelist.sort();

let testNumber = 1;

const show = (filters) => {
    console.log(`Test ${testNumber} ::: [${filters.join(',')}]`);
    console.log(`-----------------------------------`);
    const files = new Set();
    filters.forEach(filter => {
        const t = filelist.filter(mm.filter(filter, null, filelist));
        t.forEach(f => {
            if (!files.has(f)) {
                files.add(f);
            }
        });
    });    
    
    console.log([...files].join('\n'));
    console.log();

    testNumber++;
};

// All files
show(['**']);

// All .dll files
show(['**/*.dll']);
// Only .dll files at the root of an artifact
show(['*/*.dll']);

// All files in a1
show(['a1/**']);
// Only files at the root of a1
show(['a1/*']);

// All files in a1 and a2
show(['a1/**', 'a2/**']);
// Only files at the root of a1 and a2
show(['a1/*', 'a2/*']);
