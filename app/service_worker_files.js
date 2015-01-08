'use strict';

var kCacheFiles = [
  // html
  '/sw/app/index.html',

  // scripts
  '/sw/app/js/utils.js',
  '/sw/app/js/bootstrap.js',
  '/sw/app/js/string-polyfill.js',
  '/sw/app/js/cache-polyfill.js',

  // service worker helpers
  '/sw/app/js/service/api.js',
  '/sw/app/js/service/utils.js',
  '/sw/app/js/service/worker_api.js',

  // protocols
  '/sw/app/js/protocols/ipdl.js',
  '/sw/app/js/protocols/ipdl_parser.js',
  '/sw/app/js/protocols/bridge.js',
  '/sw/app/js/protocols/store.js',
  '/sw/app/js/protocols/message.js',
  '/sw/app/js/protocols/utils/uuid.js',
  '/sw/app/js/protocols/protocol_helper.js',
  '/sw/app/js/protocols/ipdl/PUpdate.ipdl',
  '/sw/app/js/protocols/ipdl/PService.ipdl'
];
