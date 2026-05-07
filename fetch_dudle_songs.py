import json
import base64
import subprocess
import urllib.parse
import re
import time
import sys

def b64_decode(s):
    return base64.b64decode(s).decode()

def fetch_url(artist, title):
    query = f"{artist} {title}"
    url = f"https://itunes.apple.com/search?term={urllib.parse.quote(query)}&limit=10&media=music"
    try:
        res = subprocess.check_output(['curl', '-s', url])
        if not res: return None
        data = json.loads(res.decode('utf-8', errors='ignore'))
        if 'results' in data and data['results']:
            # Heuristic: avoid live/remix, and avoid DRM .m4p files
            for c in data['results']:
                t = c.get('trackName', '').lower()
                if any(x in t for x in ['live', 'remix', 'karaoke']):
                    continue
                
                preview_url = c.get('previewUrl')
                if not preview_url:
                    continue

                if preview_url.endswith('.m4p') or 'mzaf_2143209391192483819' in preview_url:
                    continue

                return preview_url
    except Exception as e:
        return None
    return None

def update_config():
    with open('client/src/config.js', 'r') as f:
        content = f.read()

    # Find entries with REPLACE_ME
    matches = re.findall(r'(\{\s*"day":\s*"(\d{4}-\d{2}-\d{2})",\s*"songTitle":\s*"([^"]+)",\s*"artistName":\s*"([^"]+)",\s*"audioUrl":\s*"REPLACE_ME",\s*"offset":\s*0\s*\})', content)
    
    if not matches:
        print("No placeholder songs found.")
        return

    print(f"Found {len(matches)} placeholders. Fetching next 10...")
    
    count = 0
    for full_match, day, title_b64, artist_b64 in matches:
        
        
        title = b64_decode(title_b64)
        artist = b64_decode(artist_b64)
        print(f"Fetching {day}: {artist} - {title}...", end="", flush=True)
        
        url = fetch_url(artist, title)
        if url:
            new_entry = full_match.replace('"audioUrl": "REPLACE_ME"', f'"audioUrl": "{url}"')
            content = content.replace(full_match, new_entry)
            print(" Success.")
            count += 1
            time.sleep(2) # Be gentle
        else:
            print(" Failed.")
            time.sleep(5) # Wait longer on failure
            
    with open('client/src/config.js', 'w') as f:
        f.write(content)
    print(f"Updated {count} songs in client/src/config.js")

if __name__ == "__main__":
    update_config()
