const CACHE='meal-compass-55621c9f71a9';const FILES=["./","./index.html","./manifest.webmanifest","./favicon.svg","./icon-192.png","./icon-512.png","./apple-touch-icon.png","./assets/app-LOX2FANV.js","./assets/app-FNS3ULSL.css"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('meal-compass-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const url=new URL(e.request.url);if(e.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match(new URL('./',self.registration.scope))));return;}
e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});