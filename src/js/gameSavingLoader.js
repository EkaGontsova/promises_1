import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read() 
      .then(data => json(data)) 
      .then(jsonData => JSON.parse(jsonData))
      .catch(error => {
        throw new Error('Error loading game saving: ' + error); 
      });
  }
}