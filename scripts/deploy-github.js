const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'https://github.com/jsafe00/venus-hotel.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)