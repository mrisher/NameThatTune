import { songs } from './config';
import { connectunesSongs } from './connectunesConfig';

describe('Song List Capacity', () => {
  const checkCapacity = (songList, name, daysNeeded = 30) => {
    const today = new Date();
    const missingDays = [];
    
    for (let i = 0; i < daysNeeded; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      const dateString = futureDate.toISOString().split('T')[0];
      
      const found = songList.find(s => s.day === dateString);
      if (!found) {
        missingDays.push(dateString);
      }
    }
    
    if (missingDays.length > 0) {
      throw new Error(`${name} is missing songs for the following days: ${missingDays.join(', ')}`);
    }
  };

  test('Main game has enough songs for the next 30 days', () => {
    checkCapacity(songs, 'Main Game');
  });

  test('ConnecTunes has enough songs for the next 30 days', () => {
    checkCapacity(connectunesSongs, 'ConnecTunes');
  });
});
