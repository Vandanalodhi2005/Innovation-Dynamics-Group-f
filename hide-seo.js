const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('<div id="root">') && !content.includes('<div id="root" style="display: none;">')) {
    content = content.replace('<div id="root">', '<div id="root" style="display: none;">');
    fs.writeFileSync(filePath, content);
    console.log('Updated', file);
  } else if (content.includes('<div id="root" style="display:none">')) {
    content = content.replace('<div id="root" style="display:none">', '<div id="root" style="display: none;">');
    fs.writeFileSync(filePath, content);
    console.log('Updated', file);
  }
}
