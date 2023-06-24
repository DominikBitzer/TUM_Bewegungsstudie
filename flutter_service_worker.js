'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "480a2bd2daddba86b5754d3d671194c7",
"assets/NOTICES": "808d83c495b3f2ec14df1e04edafca5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b8e6593fa76d2a8568981de499610bbb",
"/": "12051109e66a333cd7b0403e94dcaea7",
"main.dart.js": "a6dbace5cd7b03aca139235c1f9c835b",
"manifest.json": "78ab7c069934fa7e742f4e95258acd99",
"TUM_Bewegungsstudie/.git/COMMIT_EDITMSG": "4ed3e6c182fc63943fba98fa20ee3754",
"TUM_Bewegungsstudie/.git/config": "2d2e55b0507238e8213bc591309c43a0",
"TUM_Bewegungsstudie/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"TUM_Bewegungsstudie/.git/FETCH_HEAD": "14af6594123799e117dac4a707ad4903",
"TUM_Bewegungsstudie/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"TUM_Bewegungsstudie/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"TUM_Bewegungsstudie/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"TUM_Bewegungsstudie/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"TUM_Bewegungsstudie/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"TUM_Bewegungsstudie/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"TUM_Bewegungsstudie/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"TUM_Bewegungsstudie/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"TUM_Bewegungsstudie/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"TUM_Bewegungsstudie/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"TUM_Bewegungsstudie/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"TUM_Bewegungsstudie/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"TUM_Bewegungsstudie/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"TUM_Bewegungsstudie/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"TUM_Bewegungsstudie/.git/index": "abf62e69c63b049e445194ee5f5861ef",
"TUM_Bewegungsstudie/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"TUM_Bewegungsstudie/.git/logs/HEAD": "4038cd9478c67da773f1e7696b41b5a8",
"TUM_Bewegungsstudie/.git/logs/refs/heads/main": "4038cd9478c67da773f1e7696b41b5a8",
"TUM_Bewegungsstudie/.git/logs/refs/remotes/origin/HEAD": "e24e7269c61351fb3b41ea839f226734",
"TUM_Bewegungsstudie/.git/logs/refs/remotes/origin/main": "2fa2d608e57ed8efb32d9e311130ea4a",
"TUM_Bewegungsstudie/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"TUM_Bewegungsstudie/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"TUM_Bewegungsstudie/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"TUM_Bewegungsstudie/.git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
"TUM_Bewegungsstudie/.git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
"TUM_Bewegungsstudie/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"TUM_Bewegungsstudie/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"TUM_Bewegungsstudie/.git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
"TUM_Bewegungsstudie/.git/objects/23/4a22867c0553dfce986482b7ee6ffa8e525d08": "9b35c30307e4f1658c505c93a89f16fb",
"TUM_Bewegungsstudie/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"TUM_Bewegungsstudie/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"TUM_Bewegungsstudie/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"TUM_Bewegungsstudie/.git/objects/49/8ae39985d90991649aa4779aad6dcc25f12b1b": "35ed4a9f4d21bae9b5fef6c4c12aee4d",
"TUM_Bewegungsstudie/.git/objects/4a/6b97ece106bf59e83d614b5d893765d10e8b4d": "1e930a11888f8da96de0d6eec4bf1291",
"TUM_Bewegungsstudie/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"TUM_Bewegungsstudie/.git/objects/60/1ebee8f78e955da8c16278fc7458868447231c": "18c3d8ab0b35c2fa486e070e55512bfd",
"TUM_Bewegungsstudie/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"TUM_Bewegungsstudie/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"TUM_Bewegungsstudie/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"TUM_Bewegungsstudie/.git/objects/78/d9b4ed188b65d6b01f1bd3a8b149f71456d8f0": "d38f916d1c108e12c901112ef5bf9d71",
"TUM_Bewegungsstudie/.git/objects/80/d8c1a904a258a429359dff9d91653454c36829": "576a68a0382e5eb306745caef6f74e98",
"TUM_Bewegungsstudie/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"TUM_Bewegungsstudie/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"TUM_Bewegungsstudie/.git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
"TUM_Bewegungsstudie/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"TUM_Bewegungsstudie/.git/objects/a8/1282f0ccc8422564b1b14b84e161c9758284d1": "3c7e5085da75d616d24f43f8a9723f79",
"TUM_Bewegungsstudie/.git/objects/ab/bec71445aa6c3ffe1173aacab3da20a01cccac": "d78fc207036fdfe262accd4ae04c9970",
"TUM_Bewegungsstudie/.git/objects/ad/fc02cffe512c32d8ace2f3b147da59947e5ef5": "d47f0a1f0bd018c39d0f4e814d7341f4",
"TUM_Bewegungsstudie/.git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
"TUM_Bewegungsstudie/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"TUM_Bewegungsstudie/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"TUM_Bewegungsstudie/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"TUM_Bewegungsstudie/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"TUM_Bewegungsstudie/.git/objects/c2/3f1c1d369f609c3dc0e995daa9fcbb4d6acadf": "4e23d9afa1c65f0edd0bb6be57e5e8ce",
"TUM_Bewegungsstudie/.git/objects/c8/e532981a0248af62c85941b9fc2e0666bdb9ca": "5f36fb28d522b27392adb56ccdd744dd",
"TUM_Bewegungsstudie/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"TUM_Bewegungsstudie/.git/objects/d4/3cf4bd1a8dd55090b416779c616f4de149ac4a": "1f7fd949be098b28fe9c7acb200f0aa3",
"TUM_Bewegungsstudie/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"TUM_Bewegungsstudie/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"TUM_Bewegungsstudie/.git/objects/e2/4d3dd556a25a45415a7105056fdbc39cfa5029": "dff12a8c8a84394e1245214b8520ec44",
"TUM_Bewegungsstudie/.git/objects/e7/536dda9ecab16b5f6c6e5d4463050c2d1b401b": "afadc0b35f89ad0f92969f1bc9ca6250",
"TUM_Bewegungsstudie/.git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
"TUM_Bewegungsstudie/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"TUM_Bewegungsstudie/.git/ORIG_HEAD": "fde34f0ef36613a6c4d7b360c2c22b05",
"TUM_Bewegungsstudie/.git/refs/heads/main": "a3d852a861e251482d4cadc9c350c49b",
"TUM_Bewegungsstudie/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"TUM_Bewegungsstudie/.git/refs/remotes/origin/main": "a3d852a861e251482d4cadc9c350c49b",
"TUM_Bewegungsstudie/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"TUM_Bewegungsstudie/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"TUM_Bewegungsstudie/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"TUM_Bewegungsstudie/assets/fonts/MaterialIcons-Regular.otf": "480a2bd2daddba86b5754d3d671194c7",
"TUM_Bewegungsstudie/assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
"TUM_Bewegungsstudie/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"TUM_Bewegungsstudie/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"TUM_Bewegungsstudie/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"TUM_Bewegungsstudie/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"TUM_Bewegungsstudie/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"TUM_Bewegungsstudie/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"TUM_Bewegungsstudie/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"TUM_Bewegungsstudie/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"TUM_Bewegungsstudie/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"TUM_Bewegungsstudie/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"TUM_Bewegungsstudie/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"TUM_Bewegungsstudie/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"TUM_Bewegungsstudie/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"TUM_Bewegungsstudie/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"TUM_Bewegungsstudie/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"TUM_Bewegungsstudie/index.html": "12051109e66a333cd7b0403e94dcaea7",
"TUM_Bewegungsstudie/main.dart.js": "4c7d43fdbdcddb467f26628b76cffe6a",
"TUM_Bewegungsstudie/manifest.json": "78ab7c069934fa7e742f4e95258acd99",
"TUM_Bewegungsstudie/version.json": "a3a0a6ca12b33d2055b616cc1cce9530",
"version.json": "a3a0a6ca12b33d2055b616cc1cce9530"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
