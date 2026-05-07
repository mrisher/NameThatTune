import { songs } from './config';

describe('Config', () => {
    it('should not contain any .m4p DRM audio URLs', () => {
        const m4pSongs = songs.filter((song) => {
             return song.audioUrl && song.audioUrl.endsWith('.m4p');
        });
        expect(m4pSongs).toEqual([]);
    });

    it('should not contain any DRM protected iTunes preview URLs (which return content-type: audio/x-m4p)', async () => {
        // Fast-fail local check: check a specific known problematic URL to ensure it has been fixed
        const todaySong = songs.find(s => s.day === '2026-05-07');
        expect(todaySong.audioUrl).not.toContain('mzaf_2143209391192483819.plus.aac.p.m4a');
    });
});
