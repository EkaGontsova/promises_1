import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load()
  .then((saving) => {
    console.log('Game saving loaded successfully:', saving);
  })
  .catch((error) => {
    console.error('Error:', error);
  });