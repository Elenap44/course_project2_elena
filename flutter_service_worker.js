'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ed1fe53a402bcf43c93594f58adf907d",
"assets/assets/data.json": "f4431f965efb0f9651328ee29d4385bd",
"assets/assets/images/bag_backpack.png": "8aa5ed0e6c5b5a04ce3f3579d282ee36",
"assets/assets/images/bag_black.png": "8c6ed675f6dc15d5045fcb343a906e85",
"assets/assets/images/bag_shopping.png": "1676c0141a66353612c7e76686d4f2ff",
"assets/assets/images/bag_sport.png": "15473b1e8eb05d666f8ce1f2602c7d7b",
"assets/assets/images/dress_halter.png": "05367d9a82af66775087bfad32f46b17",
"assets/assets/images/dress_polka_dot.png": "b110806dedfea1bbfe3bb8b7c4c374af",
"assets/assets/images/dress_short_sleeve.png": "2fd6a7c56e1eba6507eef02fe2a4caf3",
"assets/assets/images/footwear_heels.png": "5286892624fed1d419d1a1b2545dcfce",
"assets/assets/images/footwear_nike.png": "b77e3a142254989c700b28a3f31f297a",
"assets/assets/images/footwear_sandals.png": "24b68e6f6d75d1b69269140ebacfb88c",
"assets/assets/images/footwear_snow.png": "799014d3c211d8f8e052d215ed0a3e5e",
"assets/assets/images/halloween.png": "3e9370046cecfdb3d5321046376bc4ed",
"assets/assets/images/icons8-bag-32.png": "8b159dcbf49aa45c0099e80ff97c38e2",
"assets/assets/images/icons8-dress-32.png": "3d51ac8241d0ef0e76aba98c68ff55f2",
"assets/assets/images/icons8-footwear-32.png": "7e43fd7a1fd87f8b80e378dddc8c63a3",
"assets/assets/images/icons8-jewelry-32.png": "00e7ce74395e2f4cf9b80a8c726a93b4",
"assets/assets/images/icons8-t-shirt-32.png": "10976509e3dbaaa17ea940aee05d5a0d",
"assets/assets/images/icons8-womens-pants-32.png": "ed5ca1ae2cf1afba11f309200130ae67",
"assets/assets/images/jewelry_bracelet.png": "b37109e0c3023d44d19604d3ee002317",
"assets/assets/images/jewelry_necklace.png": "fa07b5da8388f0a39d81fffbf2525764",
"assets/assets/images/jewelry_ring.png": "dc40ad577c8c6aa8928580e7d5deb74c",
"assets/assets/images/jewelry_watch.png": "f4a769d2dcc949b614706f647115b479",
"assets/assets/images/long_sleeve_dress.png": "f04df57e72a36a880dc382acaedad076",
"assets/assets/images/pants_long_elegant.png": "8d6e01b05ba8812ff27edcabeadb7dbf",
"assets/assets/images/pants_pack.png": "bfafb2f965e430585073cd45098d39b7",
"assets/assets/images/pants_short_jeans.png": "23f808d3a766f4d7782ab2f1161e5b59",
"assets/assets/images/pants_short_sport.png": "90fefcd7516fdef46138d9e7d07dfe47",
"assets/assets/images/sale.png": "351516f943761fec806701c63e40b00c",
"assets/assets/images/t-shirt_aalto.png": "f16b410fb7368fc6c31de02a3249e734",
"assets/assets/images/t-shirt_flowers.png": "8a21c80c2ab1d07250ab4d99214ed8f7",
"assets/assets/images/t-shirt_pack.png": "fcc65b1e5ab7c31673abe42afb8aed0c",
"assets/assets/images/t-shirt_program.png": "07256a40682f1130d2ec7928eb9dd05f",
"assets/assets/images/winter2.png": "0af51265e5881973067ad3c6677528b7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ffa4a9778afbf9f55d7c90d4fb21294c",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5d8887b7343120be70c59124dd26516a",
"/": "5d8887b7343120be70c59124dd26516a",
"main.dart.js": "302eb0f2392caae9df24f9357fdac3d6",
"manifest.json": "7daf33cde6ac8e016b3a7655fd62e733",
"version.json": "73a87e94b84941fdcd0c7fc1a4324689"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
