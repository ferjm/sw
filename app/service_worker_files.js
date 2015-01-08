'use strict';

var kCacheFiles = [
  // html
  'index.html',

  // scripts
  'js/utils.js',
  'js/bootstrap.js',
  'js/string-polyfill.js',
  'js/cache-polyfill.js',

  // service worker helpers
  'js/service/api.js',
  'js/service/utils.js',
  'js/service/worker_api.js',

  // protocols
  'js/protocols/ipdl.js',
  'js/protocols/ipdl_parser.js',
  'js/protocols/bridge.js',
  'js/protocols/store.js',
  'js/protocols/message.js',
  'js/protocols/utils/uuid.js',
  'js/protocols/protocol_helper.js',
  'js/protocols/ipdl/PUpdate.ipdl',
  'js/protocols/ipdl/PService.ipdl',

  // res
  'sw.png'
];
