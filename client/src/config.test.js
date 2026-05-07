import { songs } from './config';

describe('Config', () => {
    it('should not contain any .m4p DRM audio URLs', () => {
        const m4pSongs = songs.filter((song) => {
             return song.audioUrl && song.audioUrl.endsWith('.m4p');
        });
        expect(m4pSongs).toEqual([]);
    });

    it('should not contain the broken Halo Theme audio URL', () => {
        const badUrlSongs = songs.filter((song) => {
             return song.audioUrl && song.audioUrl.includes('mzaf_2143209391192483819');
        });
        expect(badUrlSongs).toEqual([]);
    });
});
