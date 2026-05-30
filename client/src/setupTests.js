// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.AudioContext = jest.fn().mockImplementation(() => ({
  createOscillator: jest.fn(),
  createGain: jest.fn(),
  createAnalyser: jest.fn(),
  destination: {},
  decodeAudioData: jest.fn(),
}));

global.fetch = jest.fn((url) => {
  if (url.includes('/api/daily')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        day: '2026-05-26',
        songTitle: 'Mock Song',
        artistName: 'Mock Artist',
        audioUrl: 'https://example.com/mock.m4a',
        offset: 0
      })
    });
  }
  if (url.includes('/api/stats')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ scores: {}, winners: [] })
    });
  }
  if (url.includes('/api/search')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([])
    });
  }
  return Promise.reject(new Error(`Unhandled fetch to ${url}`));
});


