'use strict';

importScripts('/sw/app/js/service/utils.js');

debug("service_worker");
var worker = new ServiceWorker();

// lifecycle events
worker.oninstall = function(e) {
  debug('oninstall');
  importScripts('/sw/app/service_worker_files.js');

  e.waitUntil(
    caches.open('sw-cachev-0').then(function(cache) {
      return cache.addAll(kCacheFiles).then(function() {
        debug('Cache populated');
      }, function(error) {
        debug('Cache population error ' + error);
      });
    })
  );
};

worker.onactivate = function(e) {
  debug('onactivate');
};

// network events
worker.onfetch = function(e) {
  debug(e.type + ': ' + e.request.url);

  e.respondWith(
    caches.match(e.request.url).then(function(response) {
      if (!response) {
        debug('going do to a fetch for for ' + e.request.url + ', might go bad\n');
        return Promise.resolve();
      } else {
        debug('Fetched from cache ' + e.request.url);
      }
      return response;
    }, function(error) {
      debug('Could not fetch ' + e.request.url + ' from cache. Error: ' + error);
      return Promise.resolve();
    })
  )
};
