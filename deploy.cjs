const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/BEREKOUTOU/portefeuille.git',
  dotfiles: true
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  } else {
    console.log('Deploy successful!');
  }
});
