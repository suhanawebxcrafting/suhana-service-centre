const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'data', 'services.js');
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/^[ \t]*image:.*$,?\n/gm, '');
content = content.replace(/^[ \t]*dummyImage:.*$,?\n/gm, '');
fs.writeFileSync(filePath, content);
console.log('Cleaned up services.js');
