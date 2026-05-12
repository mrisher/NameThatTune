
import { validateGuess } from './searchLogic';
import Fuse from 'fuse.js';

describe('validateGuess with Real Logic', () => {
    const targetSong = {
        artistName: "Ariana Grande",
        songTitle: "Santa Tell Me"
    };

    test('matches "Santa Tell Me" as green', () => {
        const guess = {
            artistName: "Ariana Grande",
            trackName: "Santa Tell Me"
        };
        expect(validateGuess(targetSong, guess, Fuse)).toBe("green");
    });

    test('matches "Santa Tell Me (Radio Edit)" as green (normalized)', () => {
        const guess = {
            artistName: "Ariana Grande",
            trackName: "Santa Tell Me (Radio Edit)"
        };
        expect(validateGuess(targetSong, guess, Fuse)).toBe("green");
    });

    test('matches "Santa" as yellow (meaningful word)', () => {
        const guess = {
            artistName: "Ariana Grande",
            trackName: "Santa"
        };
        // Artist exact match usually gives yellow, but here artist is wrong artist name?
        // Wait, guess artist is Ariana Grande. 
        // Oh, if Artist matches exactly, it's yellow.
        expect(validateGuess(targetSong, guess, Fuse)).toBe("yellow");
    });

    test('matches "Tamia - Santa Tell Me" as yellow (title match, wrong artist)', () => {
        const guess = {
            artistName: "Tamia",
            trackName: "Santa Tell Me"
        };
        expect(validateGuess(targetSong, guess, Fuse)).toBe("yellow");
    });

    test('DOES NOT match "Me" as yellow (short stopword)', () => {
        const guess = {
            artistName: "Tamia",
            trackName: "Me"
        };
        expect(validateGuess(targetSong, guess, Fuse)).toBe("red");
    });

    test('DOES NOT match "Love Me In a Special Way" as yellow (extra meaningful words)', () => {
        const guess = {
            artistName: "Tamia",
            trackName: "Love Me In a Special Way"
        };
        // "love", "special", "way" are meaningful and not in target.
        expect(validateGuess(targetSong, guess, Fuse)).toBe("red");
    });

    test('matches "Santa Tell Me" as green even if target is "Santa Tell Me (Remix ft. Dua Lipa)"', () => {
        const complexTarget = {
            artistName: "Ariana Grande",
            songTitle: "Santa Tell Me (Remix ft. Dua Lipa)"
        };
        const guess = {
            artistName: "Ariana Grande",
            trackName: "Santa Tell Me"
        };
        expect(validateGuess(complexTarget, guess, Fuse)).toBe("green");
    });

    test('matches correctly when artist is right but title is wrong', () => {
        const guess = {
            artistName: "Ariana Grande",
            trackName: "7 rings"
        };
        expect(validateGuess(targetSong, guess, Fuse)).toBe("yellow");
    });
});
