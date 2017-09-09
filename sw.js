self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('achievibit').then(function(cache) {
    return cache.addAll([
      '/',
      '/index.html',
      '/index.html?homescreen=1',
      '/?homescreen=1',
      '/materialIcons.css',
      '/materialize.min.css',
      '/style.css',
      '/jquery.min.js',
      '/three.min.js',
      '/tween.min.js',
      '/Stats.js',
      '/dat.gui.min.js',
      '/leap.min.js',
      '/materialize.min.js',
      '/main.js',
      '/assets/86_trans.png',
      '/assets/amdocs.jpg',
      '/assets/google.png',
      '/assets/redkix.png',
      '/assets/leon01.jpg',
      '/assets/leon02.jpg',
      '/assets/leon03.jpg',
      '/assets/leon04.jpg',
      '/assets/leon05.jpg',
      '/assets/neuman.png',
      '/assets/pepsi_max.jpg',
      '/assets/tel-aviv-university.svg',
      '/assets/video_adi.jpg',
      '/assets/video_ariel.webp',
      '/assets/video_brief_job.jpg',
      '/assets/video_brief_psy.jpg',
      '/assets/video_family.webp',
      '/assets/video_shlem.webp',
      '/assets/video_terr.webp',
      '/fonts/roboto/Roboto-Bold.ttf',
      '/fonts/roboto/Roboto-Bold.woff',
      '/fonts/roboto/Roboto-Bold.woff2',
      '/fonts/roboto/Roboto-Light.ttf',
      '/fonts/roboto/Roboto-Light.woff',
      '/fonts/roboto/Roboto-Light.woff2',
      '/fonts/roboto/Roboto-Medium.ttf',
      '/fonts/roboto/Roboto-Medium.woff',
      '/fonts/roboto/Roboto-Medium.woff2',
      '/fonts/roboto/Roboto-Regular.ttf',
      '/fonts/roboto/Roboto-Regular.woff',
      '/fonts/roboto/Roboto-Regular.woff2',
      '/fonts/roboto/Roboto-Thin.woff',
      '/fonts/roboto/Roboto-Thin.woff2'
    ]);
  })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response) {
      console.info('response for ' +
        event.request.url + ' was returned from cache!');
    }

    return response || fetch(event.request);
  }));
});