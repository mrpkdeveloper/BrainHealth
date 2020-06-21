const NAMES = [
   'Glenn',
   'Xavier',
   'Musa',
   'Darren',
   'Ryan',
   'Evangeline',
   'Chris',
   'Otis',
   'Agnes',
   'Ellis',
   'Marie',
   'Hollie',
   'Tamara',
   'Kyla',
   'Julie',
   'Mabel',
   'Haleema',
   'Lee',
   'Zack',
   'Kalvin'
]

const ADJ = [
   'fierce',
   'brave',
   'equable',
   'slimy',
   'husky',
   'wealthy',
   'entire',
   'highfalutin',
   'realistic',
   'reflective',
]

function getRandomUsername() {
   const noun = NAMES[Math.floor(Math.random() * 20)]
   const adjectives = ADJ[Math.floor(Math.random() * 10)]
   return `${adjectives}_${noun}`
}

module.exports = {
   getRandomUsername
}
