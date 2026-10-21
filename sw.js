const V="kit-happens-1.0.4";
const CORE=["./","index.html","manifest.webmanifest","logo.png","icon-192.png","icon-512.png","apple-touch-icon.png","sounds/splash.m4a","sounds/tap.wav","sounds/tick.wav","sounds/add.wav","sounds/done.wav"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(V).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match("index.html"))))});
