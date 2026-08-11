const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/min-height: 100dvh;\s*min-height: 100vh;/g, 'height: 100%;\n  overflow-y: auto;');
fs.writeFileSync(cssPath, css);

const appPath = path.join(__dirname, 'src/App.jsx');
let app = fs.readFileSync(appPath, 'utf8');
app = app.replace(/minHeight: '100dvh'/g, "height: '100%'");
fs.writeFileSync(appPath, app);

const compsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compsDir).filter(f => f.endsWith('.jsx'));
for (const file of files) {
  const p = path.join(compsDir, file);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/height: '100dvh'/g, "minHeight: '100%'");
  fs.writeFileSync(p, content);
}
console.log('Done replacing dvh with %');
