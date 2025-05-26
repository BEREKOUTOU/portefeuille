(async () => {
  const ghpages = await import('gh-pages');

  console.log('ghpages:', ghpages);
  const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/BEREKOUTOU/portefeuille.git',
    dotfiles: true
  };
  console.log('options:', options);

  ghpages.default.publish('dist', options, (err) => {
    if (err) {
      console.error('Deploy failed:', err);
      process.exit(1);
    } else {
      console.log('Deploy successful!');
    }
  });
})();
