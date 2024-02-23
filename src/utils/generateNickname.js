function generateRandomNickname() {
  const adjectives = [
    'Brilliant', 'Radiant', 'Dynamic', 'Energetic', 'Harmonious', 'Vibrant',
    'Inventive', 'Spirited', 'Creative', 'Resilient', 'Effervescent', 'Resourceful',
    'Cheerful', 'Whimsical', 'Magnetic', 'Captivating', 'Exuberant', 'Tenacious',
    'Lively', 'Versatile', 'Playful', 'Optimistic', 'Dazzling', 'Sparkling',
    'Ambitious', 'Courageous', 'Genuine', 'Joyful', 'Kindred', 'Zealous',
    'Quirky', 'Radiant', 'Charming', 'Jubilant', 'Sincere', 'Vivacious',
    'Fearless', 'Daring', 'Adaptable', 'Majestic', 'Serene', 'Zesty',
    'Dynamic', 'Voracious', 'Mirthful', 'Witty', 'Luminous', 'Panoramic',
    'Enchanting', 'Thrilling', 'Enigmatic', 'Captivating', 'Resplendent', 'Uplifting',
    'Eccentric', 'Eclectic', 'Tenacious', 'Serendipitous', 'Stellar', 'Unconventional',
    'Dynamic', 'Voracious', 'Ineffable', 'Mellifluous', 'Peregrine', 'Quizzical',
    'Rhapsodic', 'Vivacious', 'Whimsical', 'Luminescent', 'Ephemeral', 'Cynosure',
    'Breathtaking', 'Unassailable', 'Awe-Inspiring', 'Unearthly', 'Unabashed', 'Immaculate',
    'Otherworldly', 'Undaunted', 'Quixotic', 'Nebulous', 'Nondescript', 'Ineffable',
  ];

  const nouns = [
    'Explorer', 'Pioneer', 'Voyager', 'Nomad', 'Adventurer', 'Trailblazer',
    'Discoverer', 'Navigator', 'Dreamer', 'Journeyer', 'Wanderer', 'Vagabond',
    'Quester', 'Roamer', 'Wayfarer', 'Sojourner', 'Globetrotter', 'Pathfinder',
    'Venturer', 'Seeker', 'Vagabond', 'Wonderer', 'Rover', 'Nomad',
    'Maverick', 'Free-Spirit', 'Pilgrim', 'Trekker', 'Conqueror', 'Traveler',
    'Odyssey', 'Odysseus', 'Escapist', 'Jubilee', 'Wonder', 'Explorer',
    'Navigator', 'Vagrant', 'Rambler', 'Nomad', 'Epicurean', 'Wayfinder',
    'Wanderlust', 'Frolicsome', 'Mischief', 'Mercurial', 'Quixotic', 'Gallant',
    'Virtuoso', 'Maestro', 'Acolyte', 'Dynamo', 'Prodigy', 'Enigma',
    'Oracle', 'Savant', 'Magician', 'Maven', 'Virtuoso', 'Phenomenon',
    'Enigma', 'Marvel', 'Spectacle', 'Prodigy', 'Adept', 'Pundit',
  ];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  const randomNumber = Math.floor(Math.random() * 1000);

  const nickname = `${randomAdjective}${randomNoun}${randomNumber}`;
  return nickname;
}

module.exports = generateRandomNickname;
