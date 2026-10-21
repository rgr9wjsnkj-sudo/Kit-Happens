KIT HAPPENS - WEB VERSION  (version 1.0, build 4)

Files: index.html, manifest.webmanifest, sw.js, logo.png, icon files and the sounds folder.
Upload the WHOLE folder (not just index.html) to any free static host.

FREE HOSTING OPTIONS
1) Netlify Drop: go to app.netlify.com/drop, make a free account, drag this folder onto the page.
2) Cloudflare Pages or GitHub Pages: create a project and upload these files.
Keep the site address; it is where your app lives.

PUT IT ON YOUR IPHONE
1. Open the site address in Safari on the iPhone (must be Safari).
2. Tap the Share button, then "Add to Home Screen", then Add.
3. Open it from the new Kit Happens icon. It works offline after the first load.

CHANGING THE SPLASH SOUND
The splash sound is sounds/splash.m4a (your clip). To change it, replace that file with another .m4a using the
same name, or use a different name and change "sounds/splash.m4a" in index.html and sw.js. Re-upload and bump the
number in sw.js.

UPDATING
When the files change, change the number in the first line of sw.js (kit-happens-1.0.1 to 1.0.2 and so on)
so phones pick up the new version.

NOTES
- Lists and saved focus puller kits are stored in the browser on that device only.
- Save file (.json) in the app exports a list that opens in this web app and in the iOS app.
- iPhones do not allow sound to start by itself: the splash shows "TAP FOR SOUND".
