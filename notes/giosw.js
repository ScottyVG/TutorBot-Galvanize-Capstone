// Progressive web applications
// From Google io talk

// Service Worker for Offline shell

navigator.serviceWorker
  .register('sw.js', {
    scope: './'
  })
  .then((registration) => {
    // Service Worker Registered
  })

// Service Worker allows us to breakup content into the
// Application shell & content

// Application shell
// Tool bar, the drawer, maybe some cards
// then populate that view with content

// Rely on critical path CSS
// for the Application Shell Architeture

// Inline critical CSS in <head>
// Async load CSS/JS for current view
`.toolbar {}
.card {}
.drawer {}

<script async >
loadCSS
`
// using this Application shell architecture means that the
// page will reload almost instantly upon repeat visits

/*
1. Responsive - watch out for overlapping menu items
2. Web App Manifest
3. Service Worker
4. Content Caching
5. Universal Rendering

Ship your shell with sw-precache
adding sw-precache to your build process and get always up to date caching of your web app's most important resources.

sw-toolbox library for handeling all of the views or content that might get built later on
*/

// Command-line
// package.json
"scripts": {
  "build": "cp node_modules/sw-toolbox/sw-toolbox.js && nwb build && npm run precache",
  "precache": "sw-precache --root=public --config=sw-precache-config.jsaon"
}

// sw-precache-config.json
{
  "importScripts": [
    "sw-toolbox.js",
    "runtime-caching.js"
  ],
  "stripPrefix": "public/",
  "verbose": true,
  "staticFileGlobs": [
    "app/css/**.css",
    "app/**.html",
    "app/images/**.*",
    "app/js/**.js"
  ],
}

// runtime-caching.js
// allows me to cach anything i would like
(function(global) {
  'use strict'

  global.toolbox.router.get('/(.*)', global.toolbox.fastest, {
    origin: /\.(?:googleapis|gstatic)\.com$/
  });
  global.toolbox.router.get('/(.+)', global.toolbox.fastest, {
    origin: 'https://hacker-news.firebaseio.com'
  });
})(self)

// Register the service worker to the index file
`<div id = "app" > < /div>
<script src = "build/vendor.js"> </script>
<script src = "build/app.js"> </script>
<script>`
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', {
      scope: './'
    })
    .then(function(registration) {
      registration.onupdatefound = function() {
        if (navigator.serviceWorker.controller) {
          var installingWorker = registration.installing;
          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                break;
              case 'redundant';
            }
          }
        }
      }
    })
}

// firebases offline support is limited to the session
// don't use indexDB

// inside the react app the firebase api is being consumed in HNService.js
var Firebase = require('firebase')
var api = new Firebase('https://hacker-news.firebaseio.com/v0')

function fetchItem(id, cb) {
  itemRef(id).once('value', function(snapshot) {
    cb(snapshot.val())
  })
}

function fetchItems(ids, cb) {...
}


function storiesRef(path) {
  return api.child(path)
}

// Using WEB WORKERS!
importScripts('./localforage.js')

onmessage = (e) => {
  const batch = e.data;
  // Write batch to Indexed DB - index db still really sucks with these probs

}

// Using a REST API or the firebase api
// not entirely fresh but will have slightly stale content
// HNServiceRest.js
require('isomorphic-fetch')
var endPoint = 'https://hacker-news.firebaseio.com/v0'
var options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

function itemRef(id) {
  return fetch(endPoint + '/item/' + id + '.json', options)
}
// https://hacker-news.firebaseio.com/v0/item/11643791.json

// Server render + "Hydrate"
// Progressive render + bootstrap

//REACT ROUTER
// server.js
var express = require('express')
var React = require('react')
var renderToString = require('react-dom/server').renderToString
var ReactRouter = require('react-router')

require('babel/register')
var routes = require('./src/routes')

var app = express()
app.set('view engine', 'ejs')
app.set('wies', process.cwd() + '/src/views')
app.set('port', (process.envPORT || 5000))
app.use(express.static('public'))

app.get('*', function(req, res) {
  ReactRouter.match({
    routes: routes,
    location: req.url
  }, function(err, redirectLocation, props) {

  })
})


// Global Guards
// Deserialise caches from sessionStorage.
loadSession() {
    if (typeof window === 'undefined') return
    idCache = parseJSON(window.sessionStorage.idCache, {})
    itemCache = parseJSON(window.sessionStorage.itemCache, {})
  },

  // Serialise caches to sessionStorage as JSON.
  saveSession() {
    if (typeof window === 'undefined') return
    window.sessionStorage.idCache = JSON.stringify(idCache)
    window.sessionStorage.itemCache = JSON.stringify(itemCache)
  }

// Minimise reliance on the DOM
var url = requre('url')
var parseHost = function(uri) {
  var hostname = url.parse(uri).hostname
  var parts = hostname.split('.').slice(-3)
  if (parts[0] === 'www') {
    parts.shift()
  }
  return parts.join('.')
}


// Utileze a Manafest.json
