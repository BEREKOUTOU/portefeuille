import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

const repoUrl = 'https://github.com/BEREKOUTOU/portefeuille.git';
const distPath = path.resolve('dist');
const tempDir = path.resolve('gh-pages-temp');

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr || stdout || error.message);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function deploy() {
  try {
    // Delete gh-pages-temp directory if it exists
    if (fs.existsSync(tempDir)) {
      console.log('Removing directory:', tempDir);
      fs.rmSync(tempDir, { recursive: true, force: true });
      console.log('Directory removed:', tempDir);
    }

    // Clone the repo's gh-pages branch into a temp folder
    await runCommand('git clone --branch gh-pages --single-branch ' + repoUrl + ' gh-pages-temp || git clone ' + repoUrl + ' gh-pages-temp');

    // Add safe directory config to avoid dubious ownership error
    await runCommand('git config --global --add safe.directory ' + tempDir);

    process.chdir('gh-pages-temp');

    // Remove all files except .git
    await runCommand('git rm -r *');
    
    // Copy files from dist to current directory
    await runCommand('xcopy /E /I /Y "' + distPath + '\\*" .');

    // Add all files
    await runCommand('git add .');

    // Commit changes
    await runCommand('git commit -m "Deploy to gh-pages"');

    // Push to gh-pages branch
    await runCommand('git push origin gh-pages');

    console.log('Deploy successful!');
  } catch (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  }
}

deploy();
