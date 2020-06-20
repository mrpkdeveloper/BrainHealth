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

function getRandomUsername(){
   const noun = NAMES[Math.floor(Math.random()*20)]
   return `Anon_${noun}`
}

module.exports = {
   getRandomUsername
}