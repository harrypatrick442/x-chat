(function(){
	
	if (!Array.prototype.indexOf)
	{
	  Array.prototype.indexOf = function(elt /*, from*/)
	  {
		var len = this.length >>> 0;

		var from = Number(arguments[1]) || 0;
		from = (from < 0)
			 ? Math.ceil(from)
			 : Math.floor(from);
		if (from < 0)
		  from += len;

		for (; from < len; from++)
		{
		  if (from in this &&
			  this[from] === elt)
			return from;
		}
		return -1;
	  };
	}
})();/**
 * Function bind polyfill
 * https://github.com/ariya/phantomjs/issues/10522
 */

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context /* ...args */) {
    var fn = this;
    var args = Array.prototype.slice.call(arguments, 1);

    if (typeof(fn) !== 'function') {
      throw new TypeError('Function.prototype.bind - context must be a valid function');
    }

    return function () {
      return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    };
  };
}/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","The token must not contain space characters.");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return~a(this,t+"")},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",~a(this,t)||(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=a(this,t);~e;)this.splice(e,1),r=!0,e=a(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.replace=function(t,e){var n=a(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(p){void 0!==p.number&&-2146823252!==p.number||(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),i=n.indexOf(t+"");~i&&(n=n.slice(i),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}());!window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
	WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
		var target = this;

		registry.unshift([target, type, listener, function (event) {
			event.currentTarget = target;
			event.preventDefault = function () { event.returnValue = false };
			event.stopPropagation = function () { event.cancelBubble = true };
			event.target = event.srcElement || target;

			listener.call(target, event);
		}]);

		this.attachEvent("on" + type, registry[0][3]);
	};

	WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
		for (var index = 0, register; register = registry[index]; ++index) {
			if (register[0] == this && register[1] == type && register[2] == listener) {
				return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
			}
		}
	};

	WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
		return this.fireEvent("on" + eventObject.type, eventObject);
	};
})(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);/**
  @class BroadcastChannel

  A simple BroadcastChannel polyfill that works with all major browsers.
  Please refer to the official MDN documentation of the Broadcast Channel API.
  ======

  @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API">Broadcast Channel API on MDN</a>
  @author Alessandro Piana
  @version 1.0.0
  @copyright Alessandro Piana 2015
*/

(function( context ) {
    // Internal variables
    var _channels = null, // List of channels
        _tabId = null, // Current window browser tab identifier (see IE problem, later)
        _prefix = 'polyBC_'; // prefix to identify localStorage keys.
        
    /**
     * Internal function, generates pseudo-random strings.
     * @see http://stackoverflow.com/a/1349426/2187738
     * @private
     */
    function getRandomString( length ) {
        var text = "",
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < (length || 5); i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    
    /**
     * Check if an object is empty.
     * @see http://stackoverflow.com/a/679937/2187738
     * @private
     */
    function isEmpty(obj) {
        for( var prop in obj) { 
            if(obj.hasOwnProperty(prop))
                return false;
        }
        return true;
        // Also this is good.
        // returns 0 if empty or an integer > 0 if non-empty
        //return Object.keys(obj).length; 
    };
    
    /**
     * Gets the current timestamp
     * @private
     */
    function getTimestamp() {
        return (new Date().getTime());
    };
    
    /**
     * Build a "similar" response as done in the real BroadcastChannel API
     */
    function buildResponse( data ) {
        return {
            timestamp: getTimestamp(),
            isTrusted: true,
            target: null, // Since we are using JSON stringify, we cannot pass references.
            currentTarget: null,
            data: data,
            bubbles: false,
            cancelable: false,
            defaultPrevented: false,
            lastEventId: '',
            origin: context.location.origin
        }; 
    };
    
    /**
     * Creates a new BroadcastChannel
     * @param {String} channelName - the channel name.
     * return {BroadcastChannel}
     */
    function BroadcastChannel( channelName ) {
        
        // Check if localStorage is available.
        if (!context.localStorage) {
            throw new 'localStorage not available';
            return;
        }
    
        // Add custom prefix to Channel Name.
        var _channelId = _prefix + channelName,
            isFirstChannel = (_channels === null);
    
        this.channelId = _channelId;
        
        _tabId = _tabId || getRandomString(); // Creates a new tab identifier, if necessary.
        _channels = _channels || {}; // Initializes channels, if necessary.
        _channels[ _channelId ] = _channels[ _channelId ] || [];
        
        // Adds the current Broadcast Channel.
        _channels[ _channelId ].push( this );
    
        // Creates a sufficiently random name for the current instance of BC.
        this.name = _channelId + '::::' + getRandomString() + getTimestamp();
    
        // If it is the first instance of Channel created, also creates the storage listener.
        if (isFirstChannel) {
            // addEventListener.);
			console.log(context);
			console.log(context.addEventListener);
            context.addEventListener('storage', _onmsg.bind(this), false);
        }
    
        return this;
    };
    
    /**
     * Empty function to prevent errors when calling onmessage.
     */
    BroadcastChannel.prototype.onmessage = function( ev ){};
    
    /**
     * Sends the message to different channels.
     * @param {Object} data - the data to be sent ( actually, it can be any JS type ).
     */
    BroadcastChannel.prototype.postMessage = function( data ) {
        // Gets all the 'Same tab' channels available.
        if (!_channels) return;
        
        if (this.closed) {
            throw new 'This BroadcastChannel is closed.';
            return;
        }
        
        // Build the event-like response.
        var msgObj = buildResponse( data );
        
        // SAME-TAB communication.
        var subscribers = _channels[ this.channelId ] || [];
        for (var j in subscribers) {
            // We don't send the message to ourselves.
            if (subscribers[j].closed || subscribers[j].name === this.name) continue;

            if (subscribers[j].onmessage ) {
                subscribers[j].onmessage( msgObj );
            }
        } 
        
        // CROSS-TAB communication.
        // Adds some properties to communicate among the tabs.
        var editedObj = {
            channelId: this.channelId,
            bcId: this.name,
            tabId: _tabId,
            message: msgObj
        };
        try {
            var editedJSON = JSON.stringify( editedObj ),
                lsKey = 'eomBCmessage_' + getRandomString() + '_' + this.channelId;
            // Set localStorage item (and, after that, removes it).
            context.localStorage.setItem( lsKey, editedJSON );
        } catch (ex) {
            throw new 'Message conversion has resulted in an error.';
            return;
        }
        
        setTimeout(function(){ context.localStorage.removeItem( lsKey ) }, 1000);
        
    };
    
    /**
     * Handler of the 'storage' function. 
     * Called when another window has sent a message.
     * @param {Object} ev - the message.
     * @private
     */
    function _onmsg( ev ) {
        var key = ev.key,
            newValue = ev.newValue,
            isRemoved = !newValue,
            obj = null;
        
        // Actually checks if the messages if from us.
        if ( key.indexOf('eomBCmessage_') > -1 && !isRemoved) {
            
            try {
                obj = JSON.parse( newValue );
            } catch( ex ) {
                throw new 'Message conversion has resulted in an error.';
                return;
            }
            
            // NOTE: Check on tab is done to prevent IE error 
            // (localStorage event is called even in the same tab :( )
                    
            if ( (obj.tabId !== _tabId) &&
                 obj.channelId &&
                 _channels &&
                 _channels[ obj.channelId ] ) {
                
                var subscribers = _channels[ obj.channelId ];
                for (var j in subscribers) {
                    if (!subscribers[j].closed && subscribers[j].onmessage ) {
                        subscribers[j].onmessage( obj.message );
                    }
                }
                // Remove the item for safety.
                context.localStorage.removeItem( key );
            }     
        }
    };
    
    /**
     * Closes a Broadcast channel.
     */ 
    BroadcastChannel.prototype.close = function() {
        
        this.closed = true;
        
        var index = _channels[ this.channelId ].indexOf(this);
        if (index > -1)
            _channels[ this.channelId ].splice( index, 1 );
        
        // If we have no channels, remove the listener. 
        if (!_channels[ this.channelId ].length) {
            delete _channels[ this.channelId ];
        }
        if ( isEmpty( _channels ) ) {
            context.removeEventListener( 'storage', _onmsg.bind(this) );
        }
    };
    
    // Sets BroadcastChannel, if not available. 
    context.BroadcastChannel = context.BroadcastChannel || BroadcastChannel;
    
})( window );(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.adapter = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

'use strict';

var _adapter_factory = require('./adapter_factory.js');

var adapter = (0, _adapter_factory.adapterFactory)({ window: window });
module.exports = adapter; // this is the difference from adapter_core.

},{"./adapter_factory.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adapterFactory = adapterFactory;

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _chrome_shim = require('./chrome/chrome_shim');

var chromeShim = _interopRequireWildcard(_chrome_shim);

var _edge_shim = require('./edge/edge_shim');

var edgeShim = _interopRequireWildcard(_edge_shim);

var _firefox_shim = require('./firefox/firefox_shim');

var firefoxShim = _interopRequireWildcard(_firefox_shim);

var _safari_shim = require('./safari/safari_shim');

var safariShim = _interopRequireWildcard(_safari_shim);

var _common_shim = require('./common_shim');

var commonShim = _interopRequireWildcard(_common_shim);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Shimming starts here.
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
function adapterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      window = _ref.window;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
  };

  // Utils.
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  var adapter = {
    browserDetails: browserDetails,
    commonShim: commonShim,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      chromeShim.shimSenderReceiverGetStats(window);
      chromeShim.fixNegotiationNeeded(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimConnectionState(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      commonShim.removeAllowExtmapMixed(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      firefoxShim.shimRemoveStream(window);
      firefoxShim.shimSenderGetStats(window);
      firefoxShim.shimReceiverGetStats(window);
      firefoxShim.shimRTCDataChannel(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimConnectionState(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edgeShim;

      edgeShim.shimGetUserMedia(window);
      edgeShim.shimGetDisplayMedia(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);

      // the edge shim implements the full RTCIceCandidate object.

      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;

      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCreateOfferLegacy(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimTrackEventTransceiver(window);
      safariShim.shimGetUserMedia(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      commonShim.removeAllowExtmapMixed(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

// Browser shims.

},{"./chrome/chrome_shim":3,"./common_shim":6,"./edge/edge_shim":7,"./firefox/firefox_shim":11,"./safari/safari_shim":14,"./utils":15}],3:[function(require,module,exports){

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimMediaStream = shimMediaStream;
exports.shimOnTrack = shimOnTrack;
exports.shimGetSendersWithDtmf = shimGetSendersWithDtmf;
exports.shimSenderReceiverGetStats = shimSenderReceiverGetStats;
exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
exports.shimAddTrackRemoveTrack = shimAddTrackRemoveTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.fixNegotiationNeeded = fixNegotiationNeeded;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(function (name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function (id) {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  var filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  var trackStats = [];
  result.forEach(function (value) {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function (trackStat) {
    result.forEach(function (stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get: function get() {
        return this._ontrack;
      },
      set: function set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },

      enumerable: true,
      configurable: true
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function () {
      var _this = this;

      if (!this._ontrackpoly) {
        this._ontrackpoly = function (e) {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', function (te) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === te.track.id;
              });
            } else {
              receiver = { track: te.track };
            }

            var event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(function (track) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === track.id;
              });
            } else {
              receiver = { track: track };
            }
            var event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
        };
        this.addEventListener('addstream', this._ontrackpoly);
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } });
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
    var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
      return {
        track: track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function () {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
        var sender = origAddTrack.apply(this, arguments);
        if (!sender) {
          sender = shimSenderWithDtmf(this, track);
          this._senders.push(sender);
        }
        return sender;
      };

      var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack = function (sender) {
        origRemoveTrack.apply(this, arguments);
        var idx = this._senders.indexOf(sender);
        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }
    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function (stream) {
      var _this2 = this;

      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        _this2._senders.push(shimSenderWithDtmf(_this2, track));
      });
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      var _this3 = this;

      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);

      stream.getTracks().forEach(function (track) {
        var sender = _this3._senders.find(function (s) {
          return s.track === track;
        });
        if (sender) {
          // remove sender
          _this3._senders.splice(_this3._senders.indexOf(sender), 1);
        }
      });
    };
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function () {
      var _this4 = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this4;
      });
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimSenderReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function () {
        var _this5 = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this5;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function () {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function () {
      var sender = this;
      return this._pc.getStats().then(function (result) {
        return (
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          filterStats(result, sender.track, true)
        );
      });
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function () {
        var _this6 = this;

        var receivers = origGetReceivers.apply(this, []);
        receivers.forEach(function (receiver) {
          return receiver._pc = _this6;
        });
        return receivers;
      };
    }
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function () {
      var receiver = this;
      return this._pc.getStats().then(function (result) {
        return filterStats(result, receiver.track, false);
      });
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function () {
    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
      var track = arguments[0];
      var sender = void 0;
      var receiver = void 0;
      var err = void 0;
      this.getSenders().forEach(function (s) {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(function (r) {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || sender && receiver) {
        return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function () {
    var _this7 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
      return _this7._shimmedLocalStreams[streamId][0];
    });
  };

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    var sender = origAddTrack.apply(this, arguments);
    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }
    return sender;
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function (stream) {
    var _this8 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this8.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    var existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    var newSenders = this.getSenders().filter(function (newSender) {
      return existingSenders.indexOf(newSender) === -1;
    });
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function (stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack = function (sender) {
    var _this9 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
        var idx = _this9._shimmedLocalStreams[streamId].indexOf(sender);
        if (idx !== -1) {
          _this9._shimmedLocalStreams[streamId].splice(idx, 1);
        }
        if (_this9._shimmedLocalStreams[streamId].length === 1) {
          delete _this9._shimmedLocalStreams[streamId];
        }
      });
    }
    return origRemoveTrack.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams = function () {
    var _this10 = this;

    var nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(function (stream) {
      return _this10._reverseStreams[stream.id];
    });
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function (stream) {
    var _this11 = this;

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this11.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      var newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function (stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
    var _this12 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    var streams = [].slice.call(arguments, 1);
    if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
      return t === track;
    })) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
    }

    var alreadyExists = this.getSenders().find(function (s) {
      return s.track === track;
    });
    if (alreadyExists) {
      throw new DOMException('Track already exists.', 'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    var oldStream = this._streams[stream.id];
    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track);

      // Trigger ONN async.
      Promise.resolve().then(function () {
        _this12.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      var newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }
    return this.getSenders().find(function (s) {
      return s.track === track;
    });
  };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    window.RTCPeerConnection.prototype[method] = function () {
      var _this13 = this;

      var args = arguments;
      var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [function (description) {
          var desc = replaceInternalStreamId(_this13, description);
          args[0].apply(null, [desc]);
        }, function (err) {
          if (args[1]) {
            args[1].apply(null, err);
          }
        }, arguments[2]]);
      }
      return nativeMethod.apply(this, arguments).then(function (description) {
        return replaceInternalStreamId(_this13, description);
      });
    };
  });

  var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription = function () {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }
    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
    get: function get() {
      var description = origLocalDescription.get.apply(this);
      if (description.type === '') {
        return description;
      }
      return replaceInternalStreamId(this, description);
    }
  });

  window.RTCPeerConnection.prototype.removeTrack = function (sender) {
    var _this14 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.
    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
    }
    var isLocal = sender._pc === this;
    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
    }

    // Search for the native stream the senders track belongs to.
    this._streams = this._streams || {};
    var stream = void 0;
    Object.keys(this._streams).forEach(function (streamid) {
      var hasTrack = _this14._streams[streamid].getTracks().find(function (track) {
        return sender.track === track;
      });
      if (hasTrack) {
        stream = _this14._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }
      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}

function shimPeerConnection(window) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function (selector, successCallback, errorCallback) {
    var _this15 = this;

    var args = arguments;

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.
    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function')) {
      return origGetStats.apply(this, []);
    }

    var fixChromeStats_ = function fixChromeStats_(response) {
      var standardReport = {};
      var reports = response.result();
      reports.forEach(function (report) {
        var standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(function (name) {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    var makeMapStats = function makeMapStats(stats) {
      return new Map(Object.keys(stats).map(function (key) {
        return [key, stats[key]];
      }));
    };

    if (arguments.length >= 2) {
      var successCallbackWrapper_ = function successCallbackWrapper_(response) {
        args[1](makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
    }

    // promise-support
    return new Promise(function (resolve, reject) {
      origGetStats.apply(_this15, [function (response) {
        resolve(makeMapStats(fixChromeStats_(response)));
      }, reject]);
    }).then(successCallback, errorCallback);
  };

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    window.RTCPeerConnection.prototype[method] = function () {
      arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
      return nativeMethod.apply(this, arguments);
    };
  });

  // support for addIceCandidate(null or undefined)
  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function () {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };
}

function fixNegotiationNeeded(window) {
  utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
    var pc = e.target;
    if (pc.signalingState !== 'stable') {
      return;
    }
    return e;
  });
}

},{"../utils.js":15,"./getdisplaymedia":4,"./getusermedia":5}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function (constraints) {
    return getSourceId(constraints).then(function (sourceId) {
      var widthSpecified = constraints.video && constraints.video.width;
      var heightSpecified = constraints.video && constraints.video.height;
      var frameRateSpecified = constraints.video && constraints.video.frameRate;
      constraints.video = {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          maxFrameRate: frameRateSpecified || 3
        }
      };
      if (widthSpecified) {
        constraints.video.mandatory.maxWidth = widthSpecified;
      }
      if (heightSpecified) {
        constraints.video.mandatory.maxHeight = heightSpecified;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    });
  };
}

},{}],5:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logging = utils.log;

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  var browserDetails = utils.detectBrowser(window);

  var constraintsToChrome_ = function constraintsToChrome_(c) {
    if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function oldname_(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name === 'deviceId' ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function (mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function shimConstraints_(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && _typeof(constraints.audio) === 'object') {
      var remap = function remap(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && _typeof(constraints.video) === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'undefined' ? 'undefined' : _typeof(face)) === 'object' ? face : { ideal: face });
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches = void 0;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices = devices.filter(function (d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function (d) {
              return matches.some(function (match) {
                return d.label.toLowerCase().includes(match);
              });
            });
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function shimError_(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function (c) {
      navigator.webkitGetUserMedia(c, onSuccess, function (e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function (cs) {
    return shimConstraints_(cs, function (c) {
      return origGetUserMedia(c).then(function (stream) {
        if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function (track) {
            track.stop();
          });
          throw new DOMException('', 'NotFoundError');
        }
        return stream;
      }, function (e) {
        return Promise.reject(shimError_(e));
      });
    });
  };
}

},{"../utils.js":15}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimRTCIceCandidate = shimRTCIceCandidate;
exports.shimMaxMessageSize = shimMaxMessageSize;
exports.shimSendThrowTypeError = shimSendThrowTypeError;
exports.shimConnectionState = shimConnectionState;
exports.removeAllowExtmapMixed = removeAllowExtmapMixed;

var _sdp = require('sdp');

var _sdp2 = _interopRequireDefault(_sdp);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
    return;
  }

  var NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function (args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      var nativeCandidate = new NativeRTCIceCandidate(args);
      var parsedCandidate = _sdp2.default.parseCandidate(args.candidate);
      var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function () {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window) {
  if (window.RTCSctpTransport || !window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get: function get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  var sctpInDescription = function sctpInDescription(description) {
    var sections = _sdp2.default.splitSections(description.sdp);
    sections.shift();
    return sections.some(function (mediaSection) {
      var mLine = _sdp2.default.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
    // TODO: Is there a better solution for detecting Firefox?
    var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    var version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    var canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    var maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    var match = _sdp2.default.matchPrefix(description.sdp, 'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function () {
    this._sctp = null;

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      var isFirefox = getRemoteFirefoxVersion(arguments[0]);

      // Get the maximum message size the local peer is capable of sending
      var canSendMMS = getCanSendMaxMessageSize(isFirefox);

      // Get the maximum message size of the remote peer.
      var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

      // Determine final maximum message size
      var maxMessageSize = void 0;
      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      }

      // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.
      var sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get: function get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    var origDataChannelSend = dc.send;
    dc.send = function () {
      var data = arguments[0];
      var length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel = function () {
    var dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };
  utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}

/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get: function get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },

    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get: function get() {
      return this._onconnectionstatechange || null;
    },
    set: function set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
      }
    },

    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
    var origMethod = proto[method];
    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = function (e) {
          var pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            var newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeAllowExtmapMixed(window) {
  /* remove a=extmap-allow-mixed for Chrome < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function (desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      desc.sdp = desc.sdp.split('\n').filter(function (line) {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
    }
    return nativeSRD.apply(this, arguments);
  };
}

},{"./utils":15,"sdp":17}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimPeerConnection = shimPeerConnection;
exports.shimReplaceTrack = shimReplaceTrack;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

var _filtericeservers = require('./filtericeservers');

var _rtcpeerconnectionShim = require('rtcpeerconnection-shim');

var _rtcpeerconnectionShim2 = _interopRequireDefault(_rtcpeerconnectionShim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function (args) {
        return args;
      };
    }
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function (args) {
        return args;
      };
    }
    // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+
    if (browserDetails.version < 15025) {
      var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set: function set(value) {
          origMSTEnabled.set.call(this, value);
          var ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  }

  // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714
  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
  // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  var RTCPeerConnectionShim = (0, _rtcpeerconnectionShim2.default)(window, browserDetails.version);
  window.RTCPeerConnection = function (config) {
    if (config && config.iceServers) {
      config.iceServers = (0, _filtericeservers.filterIceServers)(config.iceServers, browserDetails.version);
      utils.log('ICE servers after filtering:', config.iceServers);
    }
    return new RTCPeerConnectionShim(config);
  };
  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}

function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
  }
}

},{"../utils":15,"./filtericeservers":8,"./getdisplaymedia":9,"./getusermedia":10,"rtcpeerconnection-shim":16}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterIceServers = filterIceServers;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function (url) {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        var validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');
        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }
        return validTurn && !hasTurn;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

},{"../utils":15}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
}

},{}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetUserMedia = shimGetUserMedia;
function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  var shimError_ = function shimError_(e) {
    return {
      name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function toString() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function (c) {
    return origGetUserMedia(c).catch(function (e) {
      return Promise.reject(shimError_(e));
    });
  };
}

},{}],11:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimOnTrack = shimOnTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.shimSenderGetStats = shimSenderGetStats;
exports.shimReceiverGetStats = shimReceiverGetStats;
exports.shimRemoveStream = shimRemoveStream;
exports.shimRTCDataChannel = shimRTCDataChannel;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    window.RTCPeerConnection.prototype[method] = function () {
      arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
      return nativeMethod.apply(this, arguments);
    };
  });

  // support for addIceCandidate(null or undefined)
  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function () {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };

  var modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function (selector, onSucc, onErr) {
    return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
      if (browserDetails.version < 53 && !onSucc) {
        // Shim only promise getStats with spec-hyphens in type names
        // Leave callback version alone; misc old uses of forEach before Map
        try {
          stats.forEach(function (stat) {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          }
          // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
          stats.forEach(function (stat, i) {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }
      return stats;
    }).then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function () {
      var _this = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this;
      });
      return senders;
    };
  }

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function () {
      var sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function () {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function () {
      var _this2 = this;

      var receivers = origGetReceivers.apply(this, []);
      receivers.forEach(function (receiver) {
        return receiver._pc = _this2;
      });
      return receivers;
    };
  }
  utils.wrapPeerConnectionEvent(window, 'track', function (e) {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function () {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream = function (stream) {
    var _this3 = this;

    utils.deprecated('removeStream', 'removeTrack');
    this.getSenders().forEach(function (sender) {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        _this3.removeTrack(sender);
      }
    });
  };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

},{"../utils":15,"./getdisplaymedia":12,"./getusermedia":13}],12:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function (constraints) {
    if (!(constraints && constraints.video)) {
      var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
      err.name = 'NotFoundError';
      // from https://heycam.github.io/webidl/#idl-DOMException-error-names
      err.code = 8;
      return Promise.reject(err);
    }
    if (constraints.video === true) {
      constraints.video = { mediaSource: preferredMediaSource };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }
    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

},{}],13:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimGetUserMedia(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function remap(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function () {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

},{"../utils":15}],14:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimLocalStreamsAPI = shimLocalStreamsAPI;
exports.shimRemoteStreamsAPI = shimRemoteStreamsAPI;
exports.shimCallbacksAPI = shimCallbacksAPI;
exports.shimGetUserMedia = shimGetUserMedia;
exports.shimConstraints = shimConstraints;
exports.shimRTCIceServerUrls = shimRTCIceServerUrls;
exports.shimTrackEventTransceiver = shimTrackEventTransceiver;
exports.shimCreateOfferLegacy = shimCreateOfferLegacy;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimLocalStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function () {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      return this._localStreams;
    };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    var _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function (stream) {
      var _this = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      stream.getTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
    };

    window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
      if (stream) {
        if (!this._localStreams) {
          this._localStreams = [stream];
        } else if (!this._localStreams.includes(stream)) {
          this._localStreams.push(stream);
        }
      }
      return _addTrack.call(this, track, stream);
    };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      var _this2 = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      var index = this._localStreams.indexOf(stream);
      if (index === -1) {
        return;
      }
      this._localStreams.splice(index, 1);
      var tracks = stream.getTracks();
      this.getSenders().forEach(function (sender) {
        if (tracks.includes(sender.track)) {
          _this2.removeTrack(sender);
        }
      });
    };
  }
}

function shimRemoteStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function () {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get: function get() {
        return this._onaddstream;
      },
      set: function set(f) {
        var _this3 = this;

        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!_this3._remoteStreams) {
              _this3._remoteStreams = [];
            }
            if (_this3._remoteStreams.includes(stream)) {
              return;
            }
            _this3._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            _this3.dispatchEvent(event);
          });
        });
      }
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function () {
      var pc = this;
      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }
            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            pc._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }
      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}

function shimCallbacksAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  var prototype = window.RTCPeerConnection.prototype;
  var createOffer = prototype.createOffer;
  var createAnswer = prototype.createAnswer;
  var setLocalDescription = prototype.setLocalDescription;
  var setRemoteDescription = prototype.setRemoteDescription;
  var addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function (successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = createOffer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function (successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = createAnswer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  var withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function withCallback(candidate, successCallback, failureCallback) {
    var promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    var mediaDevices = navigator.mediaDevices;
    var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = function (constraints) {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function (constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({}, constraints, { video: utils.compactObject(constraints.video) });
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  var OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection = function (pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      var newIceServers = [];
      for (var i = 0; i < pcConfig.iceServers.length; i++) {
        var server = pcConfig.iceServers[i];
        if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
          utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }
      pcConfig.iceServers = newIceServers;
    }
    return new OrigPeerConnection(pcConfig, pcConstraints);
  };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in window.RTCPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'receiver' in window.RTCTrackEvent.prototype &&
  // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
  // defined for some reason even when window.RTCTransceiver is not.
  !window.RTCTransceiver) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }
      var audioTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.sender.track && transceiver.sender.track.kind === 'audio';
      });
      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }
      var videoTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.sender.track && transceiver.sender.track.kind === 'video';
      });
      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver('video');
      }
    }
    return origCreateOffer.apply(this, arguments);
  };
}

},{"../utils":15}],15:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extractVersion = extractVersion;
exports.wrapPeerConnectionEvent = wrapPeerConnectionEvent;
exports.disableLog = disableLog;
exports.disableWarnings = disableWarnings;
exports.log = log;
exports.deprecated = deprecated;
exports.detectBrowser = detectBrowser;
exports.compactObject = compactObject;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logDisabled_ = true;
var deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    var wrappedCallback = function wrappedCallback(e) {
      var modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        cb(modifiedEvent);
      }
    };
    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    var unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function get() {
      return this['_on' + eventNameToWrap];
    },
    set: function set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },

    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  var navigator = window.navigator;

  // Returned result object.

  var result = { browser: null, version: null };

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  if (navigator.mozGetUserMedia) {
    // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
    // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
  } else {
    // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
    return data;
  }

  return Object.keys(data).reduce(function (accumulator, key) {
    var isObject = _typeof(data[key]) === 'object';
    var value = isObject ? compactObject(data[key]) : data[key];
    var isEmptyObject = isObject && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }

    return Object.assign(accumulator, _defineProperty({}, key, value));
  }, {});
}

},{}],16:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var SDPUtils = require('sdp');

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : dtlsRole || 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId ||
        transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    // spec.
    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
        trackId + '\r\n';
    sdp += 'a=' + msid;
    // for Chrome. Legacy should no longer be required.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;

    // RTX
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
}

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
            url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates()
      .find(function(remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation &&
            candidate.ip === remoteCandidate.ip &&
            candidate.port === remoteCandidate.port &&
            candidate.priority === remoteCandidate.priority &&
            candidate.protocol === remoteCandidate.protocol &&
            candidate.type === remoteCandidate.type;
      });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}


function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function(window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
        {track: track}));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
        {track: track}));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {receiver: receiver};
    trackEvent.streams = streams;
    window.setTimeout(function() {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          pc[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.canTrickleIceCandidates = null;

    this.needNegotiation = false;

    this.localStreams = [];
    this.remoteStreams = [];

    this._localDescription = null;
    this._remoteDescription = null;

    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';

    config = JSON.parse(JSON.stringify(config || {}));

    this.usingBundle = config.bundlePolicy === 'max-bundle';
    if (config.rtcpMuxPolicy === 'negotiate') {
      throw(makeError('NotSupportedError',
          'rtcpMuxPolicy \'negotiate\' is not supported'));
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;
      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;
      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config;

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;

    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function() {
      return this._remoteDescription;
    }
  });

  // set up event handlers on prototype
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function() {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this.remoteStreams;
  };

  // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function(s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function(track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function(t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError',
          'Sender was not created by this connection.');
    }
    var stream = transceiver.stream;

    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;

    // remove the stream from the set of local streams
    var localStreams = this.transceivers.map(function(t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 &&
        this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var pc = this;
    stream.getTracks().forEach(function(track) {
      var sender = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };


  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
      usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state',
        {value: 'new', writable: true}
    );

    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.
      iceGatherer.state = end ? 'completed' : 'gathering';
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };

  // start gathering from an RTCIceGatherer.
  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents =
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function(evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        }
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        // also the usernameFragment. TODO: update SDP to take both variants.
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate,
            SDPUtils.parseCandidate(serializedCandidate));

        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function() {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }

      // update local description.
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] +=
            'a=end-of-candidates\r\n';
      }
      pc._localDescription.sdp =
          SDPUtils.getDescription(pc._localDescription.sdp) +
          sections.join('');
      var complete = pc.transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';
        pc._emitGatheringStateChange();
      }

      // Emit candidate. Also emit null candidate when all gatherers are
      // complete.
      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }
      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
        pc.iceGatheringState = 'complete';
        pc._emitGatheringStateChange();
      }
    };

    // emit already gathered candidates.
    window.setTimeout(function() {
      bufferedCandidateEvents.forEach(function(e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set local ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });

      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) &&
            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters,
                  isIceLite ? 'controlling' : 'controlled');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          pc._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set remote ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function(stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      // treat bundle-only as not-rejected.
      var rejected = SDPUtils.isRejected(mediaSection) &&
          SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
          protocol === 'UDP/DTLS/SCTP'))) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] &&
          pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer =
            pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport =
            pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport =
            pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] ||
            pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
              usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        var isNewTrack = false;
        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver ||
              new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            // FIXME: does not work with Plan B.
            if (remoteMsid && remoteMsid.stream === '-') {
              // no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, 'id', {
                get: function() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
            var nativeTrack = s.getTracks().find(function(t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        pc._transceive(pc.transceivers[sdpMLineIndex],
            false,
            isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        pc.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) &&
              (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters,
                'controlling');
          }
          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }

        // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.
        var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function() {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function(item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._isClosed = true;
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this._dispatchEvent('signalingstatechange', event);
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var pc = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');
        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  };

  // Update the ice connection state.
  RTCPeerConnection.prototype._updateIceConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this._dispatchEvent('iceconnectionstatechange', event);
    }
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport &&
          !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');
      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    var offerOptions = arguments[0];
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver('video');
        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
            pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }

        // for subsequent offers, we might have to re-use the payload
        // type of the last offer.
        if (transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function(hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function(rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' &&
            !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
            transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
          'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
          (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' ||
        pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    var mediaSectionsInOffer = SDPUtils.getMediaSections(
        pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol +
                ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
              'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
              'a=rtpmap:120 VP8/90000\r\n';
        }
        sdp += 'c=IN IP4 0.0.0.0\r\n' +
            'a=inactive\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
              !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
        candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    }

    // TODO: needs to go into ops queue.
    return new Promise(function(resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError',
            'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ?
              SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.
          if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
              transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
            }
          }

          // update the remoteDescription.
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' +
              (cand.type ? candidateString : 'end-of-candidates')
              + '\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
        } else {
          return reject(makeError('OperationError',
              'Can not add ICE candidate'));
        }
      }
      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function(selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.rtpSender &&
            transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver &&
            transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }
      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
          'dtlsTransport'].forEach(function(method) {
            if (transceiver[method]) {
              promises.push(transceiver[method].getStats());
            }
          });
    });
    return Promise.all(promises).then(function(allStats) {
      var results = new Map();
      allStats.forEach(function(stats) {
        stats.forEach(function(stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };

  // fix low-level stat names and return Map instead of object.
  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
    'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function(ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function() {
        return nativeGetstats.apply(this)
        .then(function(nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function(id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });

  // legacy callback shims. Should be moved to adapter.js some days.
  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[0] === 'function' ||
          typeof args[1] === 'function') { // legacy
        return nativeMethod.apply(this, [arguments[2]])
        .then(function(description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function(error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function' ||
          typeof args[2] === 'function') { // legacy
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function(error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.
  ['getStats'].forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  return RTCPeerConnection;
};

},{"sdp":17}],17:[function(require,module,exports){
 /* eslint-env node */
'use strict';

// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
          ? '/' + headerExtension.direction
          : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
      'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return obj.attribute === 'cname';
      })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(msidParts) {
    return msidParts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (typeof module === 'object') {
  module.exports = SDPUtils;
}

},{}]},{},[1])(1)
});String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};function getWebsocketUrl(surfix){
	var loc = window.location, new_uri;
	if (loc.protocol === "https:") {
		new_uri = "wss:";
	} else {
		new_uri = "ws:";
	}
	new_uri += "//" + loc.host;
	new_uri += /*loc.pathname +*/'/'+ surfix;
	return new_uri;
}
var Dimension = (function(){
	var PX='px';
	var PERCENT='%';
	var _Dimension = function(value, unit){
		console.log(unit);
		var self = this;
		this.isDimension = true;
		set(value, unit);
		this.getValue= function(){
			return value;
		};
		this.getUnit = function(){
			return unit;
		};
		function set(valueIn, unitIn){
			if(!unitIn)
			{
				var valueAndUnit = seperateValueAndUnit(valueIn);
				console.log(valueAndUnit);
				value = valueAndUnit.value;
				unit = valueAndUnit.unit;
			}
		}
	};
	_Dimension.PX=PX;
	_Dimension.PERCENT=PERCENT;
	_Dimension.px, _Dimension.pixels= function(value){
		return new _Dimension(value, PX);
	};
	_Dimension.percent=function(value){
		return new _Dimension(value, PERCENT);
	};
	function seperateValueAndUnit(str){
		var index = str.indexOf('%');
		if(index>0)
		{	
			var value = str.substr(0, index);
			if(value.length<=0) throw getInvalidStringError(str);
			return {value:parseInt(value),unit:PERCENT};
		}
		var index = str.indexOf('px');
		console.log(index);
		if(index<=0) throw getInvalidStringError(str);
		var value = str.substr(0, index);
		if(value.length<=0) throw getInvalidStringError(tr);
		return {value:parseInt(value),unit:PX};
	}
	function getInvalidStringError(str){
		return new Error('The string 2'+str+'" is an invalid dimension');
	}
	return _Dimension;
})();//! moment.js
var moment;
;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));function each(arr, callback){
	for(var i=0; i<arr.length; i++){
		callback(arr[i]);
	}
}var When={NOW:'now', SECONDS:'seconds', MINUTES:'minutes', NEVER:'never'};var VideoOfferRejectedReasons ={
	PM_NOT_OPEN:1,
	DECLINED:2,
	ERRORs:3,
};function StopWatch(){
	var self = this;
	var ticksFromOtherRuns =0;
	var startTicks;
	var running = false;
	this.getMilliseconds = function(){
		var total = ticksFromOtherRuns;
		if(running)
			total += Date().getTime()- startTicks;
		return total;
	};
	this.getSeconds = function(){
		return self.getMilliseconds/1000;
	};
	this.start = function(){
		if(running)return;
		running = true;
		startTicks = new Date().getTime();
	};
	this.stop = function(){
		if(!running)return;
		running = false;
		ticksFromOtherRuns+=getTicksThisRun();
		startTicks=0;
	};
	this.reset = function(){
		running=false;
		ticksFromOtherRuns=0;
		startTicks=0;
	};
	function getTicksThisRun(){
		return new Date().getTime()-startTicks;
	}
}var E = new (function () {
    this.DIV = function () {
        return c('div');
    };
	this.IMG= function(){ return c('img');};
	this.CANVAS = function(){return c('canvas');};
    this.TABLE = function () {
        return c('table');
    };
    this.TR = function () {
        return c('tr');
    };
    this.TD = function () {
        return c('td');
    };
    this.TH = function () {
        return c('th');
    };
    this.H3 = function () {
        return c('h3');
    };
    this.H2 = function () {
        return c('h2');
    };
    this.H1 = function () {
        return c('h1');
    };
	this.VIDEO = function(){
		return c('video');
	};
	this.CHECKBOX = function(){
		return i('input', 'checkbox');
	};
    this.TEXT = function () {
        return i('input', 'text');
    };
    this.PASSWORD = function () {
        return i('input','password');
    };
    this.TEXTAREA = function () {
        return c('textarea');
    };
    this.SPAN = function () {
        return c('span');
    };
    this.SELECT = function () {
        return c('select');
    };
    this.OPTION = function () {
        return c('option');
    };
    this.TABLE = function () {
        return c('table');
    };
    this.COLGROUP = function () {
        return c('colgroup');
    };
    this.COL = function () {
        return c('col');
    };
    this.BUTTON = function () {
        return c('button');
    };
    this.A = function () {
        return c('a');
    };
    this.LABEL = function () {
        return c('label');
    };
	this.FILE = function(){
		return i('input', 'file');
	};
    function i(name, type) {
        var i = c(name);
        i.type = type;
        return i;
    }

    function c(name) {
        var element =  document.createElement(name);
		if(!element.addEventListener)
			element.addEventListener = element.attachEvent;
		return element;
    }
})();function EventEnabledBuilder(obj)
{

	obj.addEventListener= function ( type, listener ) {

		if ( this._listeners == undefined )
                this._listeners = {};
		var listeners = this._listeners;

		if ( listeners[ type ] == undefined ) {
			listeners[ type ] = [];
		}

		if ( listeners[ type ].indexOf( listener ) == - 1 ) {

			listeners[ type ].push( listener );

		}
	};

	obj.hasEventListener= function ( type, listener ) {

		if ( this._listeners == undefined ) return false;

		var listeners = this._listeners;

		if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {

			return true;

		}

		return false;

	};

	obj.removeEventListener= function ( type, listener ) {

		if ( this._listeners == undefined ) return;

		var listeners = this._listeners;
		var listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			var index = listenerArray.indexOf( listener );

			if ( index !== - 1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	};

	obj.dispatchEvent= function ( event ) {
		if ( this._listeners == undefined )
                    return;
		var listeners = this._listeners;
		var listenerArray = listeners[ event.type ];
                
		if ( listenerArray !== undefined ) {

			event.target = this;
			var array = [], i = 0;
			var length = listenerArray.length;

			for ( i = 0; i < length; i ++ ) {
				array[ i ] = listenerArray[ i ];
			}
			for ( i = 0; i < length; i ++ ) {
				array[ i ].call( this, event );

			}

		}

	};
}var EfficientMovingCycle = (function(){
	var MOUSE_MOVE='mousemove';
	var MOUSE_UP='mouseup';
	var MOUSE_DOWN='mousedown';
	var TOUCH_START='touchstart'
	var TOUCH_MOVE='touchmove';
	var TOUCH_END='touchend';
	var currentMouseMove;
	var currentMouseUp;
	var currentTouchMove;
	var currentTouchEnd;
	var documentElement = document.documentElement;
	var _EfficientMovingCycle = function(params)
	{
		var self = this;
		var element = params.element;
		var stopPropagation = params.stopPropagation;
		this.onStart = doNothing;
		this.onMove = doNothing;
		this.onEnd = doNothing;
		if (!isMobile)
		{
			element.addEventListener(MOUSE_DOWN, mouseDown);
			function mouseDown(e){
				if (!e)
					e = window.event;
				if(self.onStart(e)==false)return;
				clearCurrentMouseMove();
				clearCurrentMouseUp()
				addMouseMoveEvent();
				addMouseUpEvent();
				stopPropagationIfRequired(e);
			}
			function mouseMove(e) {
				if (!e)
					e = window.event;
				self.onMove(e);
				stopPropagationIfRequired(e);
			}
			function mouseUp(e) {
				if (!e)
					e = window.event;
				self.onEnd(e);
				clearCurrentMouseUp();
				clearCurrentMouseMove();
				stopPropagationIfRequired(e);
			}
			function stopPropagationIfRequired(e){
				if(stopPropagation)
				{
					e.stopPropagation&&e.stopPropagation();
					e.preventDefault&&e.preventDefault();
				}	
			}
			function addMouseMoveEvent(){
				documentElement.addEventListener(MOUSE_MOVE, mouseMove);
				currentMouseMove = mouseMove;
			}
			function addMouseUpEvent(){
				documentElement.addEventListener(MOUSE_UP, mouseUp);
				currentMouseUp = mouseUp;
			}
			
		}
		else
		{
			element.addEventListener(TOUCH_START, touchStart);
			function touchStart(e) {
				if (!e)
					e = window.event;
				if(self.onStart(e)==false)return;
				clearCurrentTouchMove();
				clearCurrentTouchEnd();
				addTouchMove();
				addTouchEnd();
			}
			function touchStartAnywhere(){
				if (!e)
					e = window.event;
				self.onStartAnywhere(e);
			}
			function touchMove(e) {
				if (!e)
					var e = window.event;
				self.onMove(e);
				e.preventDefault&&e.preventDefault();
			}
			function touchEnd(e) {
				if (!e)
					e = window.event;
				var keep = self.onEnd(e);
				if(keep)return;
				clearCurrentTouchEnd();
				clearCurrentTouchMove();
			}
			function addTouchMove(){
				documentElement.addEventListener(TOUCH_MOVE, touchMove);
				currentTouchMove = touchMove;
			}
			function addTouchEnd(){
				documentElement.addEventListener(TOUCH_END, touchEnd);
				currentTouchEnd = touchEnd;
			}
		}
    };
	return _EfficientMovingCycle;	
	function doNothing(){
		
	}
	function clearCurrentTouchEnd(){
		if(!currentTouchEnd)return;
		documentElement.removeEventListener(TOUCH_END, currentTouchEnd);
		currentTouchEnd=undefined;
	}
	function clearCurrentTouchMove(){
		if(!currentTouchMove)return;
		documentElement.removeEventListener(TOUCH_MOVE, currentTouchMove);
		currentTouchMove=undefined;
	}	
	function clearCurrentMouseUp(){
		if(!currentMouseUp)return;
		documentElement.removeEventListener(MOUSE_UP, currentMouseUp);
		currentMouseUp=undefined;
	}
	function clearCurrentMouseMove(){
		if(!currentMouseMove)return;
		documentElement.removeEventListener(MOUSE_MOVE, currentMouseMove);
		currentMouseMove=undefined;
	}
})();var DragManager = (function(){
	var _DragManager= function(params){
		var self = this;
		var handle = params.handle;
		var stopPropagation = params.stopPropagation;
		var efficientMovingCycle = new EfficientMovingCycle({element:handle.getElement(), stopPropagation:stopPropagation});
		var localConstraints;
		var offsets;
		efficientMovingCycle.onStart = function(e){
			self.onStart&&self.onStart(e);
			offsets = getOffsets(e);
			localConstraints = handle.getConstraints();
		};
		efficientMovingCycle.onMove = function(e){
			var newLocalPosition = getNewLocalPosition(e);
			constrainNewLocalPosition(newLocalPosition);
			handle.setPosition(newLocalPosition);
		};
		efficientMovingCycle.onEnd = function(){
			handle.endDrag&&handle.endDrag();
		};
		function constrainNewLocalPosition(localPosition){
			if(localPosition.x>localConstraints.maxX)
				localPosition.x=localConstraints.maxX;
			else
				if(localPosition.x<localConstraints.minX)
					localPosition.x = localConstraints.minX;
			if(localPosition.y>localConstraints.maxY)
				localPosition.y=localConstraints.maxY;
			else
				if(localPosition.y<localConstraints.minY)
					localPosition.y = localConstraints.minY;
		}
		function getOffsets(e){
			var absolute = handle.getAbsolutePosition(e);
			return {x:handle.getX() - absolute.left, 
					y:handle.getY() - absolute.top};
		}
		function getNewLocalPosition(e){
			return {x:e.pageX + offsets.x, y:e.pageY + offsets.y};
		}
	};
	return _DragManager;
})();function Iterator(array)
{
    var index=0;
    var length=array.length;
    this.next=function()
    {
        var next=array[index];
        index++;
        return next;
    };
    this.hasNext=function()
    {
      return index<length;
    };
    this.remove=function()
    {
        array.splice(index-1, 1);
        index--;
        length--;
    };
}function ReverseIterator(array)
{
	var length = array.length;
    var index=length-1;
    this.next=function()
    {
        var next=array[index];
        index--;
        return next;
    };
    this.previous=function()
    {
		index++;
        return array[index+1];
    };
    this.hasNext=function()
    {
      return index>=0;
    };
	this.hasPrevious = function(){
		return index+2<length;
	};
    this.remove=function()
    {
        array.splice(index+1, 1);
		length--;
    };
	this.insert = function(entry){
		array.splice(index+1, 0, entry);
		length++;
	};
	this.insertAfter = function(entry){
		array.splice(index+2, 0, entry);
		length++;
	};
	this.append = function(entry){
		array.push(entry);
		length++;
	};
}function Once(callback){//multiple triggers synchronously results in one call to the callback.
	var set=false;
	this.trigger = function(){
		if(!set){
			setIt();
		}
	};
	function setIt(){
		setTimeout(function(){set=false; callback();}, 0);
		set=true;
	}
}var Timer=(function(){
	var _Timer = function(params)
	{
		var self = this;
		var delay = params.delay;
		var callback = params.callback;
		var nTicks = params.nTicks;
		var nTicksCount = 0;
		var interval;
		var isRunning=false;
		if (nTicks == undefined)
		{
			nTicks = -1;
		}
		if (delay == undefined)
		{
			delay = 1000;
		}
		function tick()
		{
			if (nTicks >= 0)
			{
				nTicksCount++;
				if (nTicksCount >= nTicks)
					self.stop();
			}
			try
			{
				callback();
			} catch (ex)
			{
				console.log(ex);
			}
		};
		function _setInterval()
		{
			isRunning=true;
			interval = setInterval(tick, delay);
		}
		function _cancelInterval()
		{
			isRunning=false;
			if (!interval)return;
			clearInterval(interval);
			interval=null;
		}
		this.stop = _cancelInterval;
		this.reset = function()
		{
			nTimesCount = 0;
			_cancelInterval();
		};
		this.start=function(){
			if(isRunning)return;
			_setInterval();
		};
		this.setDelay = function(){
			self.reset();
			delay = value;
			_setInterval();
		};
		this.isRunning = function(){return isRunning;};
	};
	return _Timer;
})();var TemporalCallback = (function(){
	var _TemporalCallback = function(params){
		var self = this;
		var callback = params.callback;
		var maxNTriggers = params.maxNTriggers;
		var maxTotalDelay = params.maxTotalDelay;
		var delay = params.delay;
		if(!maxNTriggers&&!maxTotalDelay)maxTotalDelay=3*delay;
		var timerDelay = new Timer({callback:tick, delay:delay, nTicks:1});
		var timerMaxDelay = new Timer({callback:tick, delay:maxTotalDelay, nTicks:1});
		var nTriggers=0;
		this.trigger=function(){
			nTriggers++;
			if(!timerDelay.isRunning()){timerDelay.start(); timerMaxDelay.start(); return;}
			if(maxNTriggers&&nTriggers>maxNTriggers){
				tick();
				return;
			}
			timerDelay.reset();
		};
		function tick(){
			timerDelay.stop();
			timerMaxDelay.stop();
			nTriggers=0;
			callback();
		}
	};
	return _TemporalCallback;
})();
function Task(callback, done)
{
        this.run = function (c)
        {
    setTimeout(function() {
        try
        {
        callback();
        }catch(ex)
        {
         console.error(ex);
        }
                    if(done)
                    {
                        try
                        {
                     done();       
                        }
                        catch(ex)
                        {
         console.error(ex);
                        }
                    }
                    if(c)
                    {
                        try
                        {
                     c();       
                        }
                        catch(ex)
                        {
         console.error(ex);
                        }
                    }
    }, 0);

       };
}function getAbsolute(element)
{
    var rect = element.getBoundingClientRect();
    var docEl = document.documentElement;
    var rectTop = rect.top + window.pageYOffset - docEl.clientTop;
    var rectLeft = rect.left + window.pageXOffset - docEl.clientLeft;
    var rectRight = rect.right + window.pageYOffset - docEl.clientTop;
    var rectBottom = rect.bottom + window.pageXOffset - docEl.clientLeft;
    return { top: rectTop, left: rectLeft, right:rectRight, bottom:rectBottom };    
}var ImagePreloader = new (function(){
	var self = this;
	var preloaded={};
	var mapUrlToPreloaderPreloading={};
	this.preloadRange = function(urls, callback){
		var rangePreloader;
		each(urls, function(url){
			if(preloaded[url])return;
			var preloader = mapUrlToPreloaderPreloading[url];
			if(!rangePreloader)rangePreloader = new RangePreloader({callback:callback});
			rangePreloader.addPreloader(preloader?preloader:createPreloader(url));
		});
		if(!rangePreloader)
			callback&&callback();
			
	};
	function preloaderDone(e){
		var preloader = e.preloader;
		var url = preloader.getUrl();
		delete mapUrlToPreloaderPreloading[url];
		preloaded[url]=true;
	}
	function createPreloader(url){
		var preloader = new Preloader({url:url});
		mapUrlToPreloaderPreloading[url]=preloader;
		return preloader;
	}
	function RangePreloader(params){
		var callback = params.callback;
		var preloaders =[];
		this.addPreloader = function(preloader){
			preloader.addEventListener('done', done);
			preloaders.push(preloader);
		};
		function done(e){
			var preloader = e.preloader;
			remove(preloader);
			if(preloaders.length<1)
				callback&&callback();
		}
		function remove(preloader){
			var index = preloaders.indexOf(preloader);
			if(index<0)return;
			preloaders.splice(index, 1);
		}
	}
	function Preloader(params){
		EventEnabledBuilder(this);
		var self = this;
		var url = params.url;
		var img = E.IMG();
		var successful = false;
		console.log('preloading "'+url+'"');
		img.onload = function(e){
			successful = true;
			dispatchDone();
		};
		img.onerror=function(error){
			console.log(error);
			dispatchDone();
		};
		img.src=url;
		this.getSuccessful = function(){
			return successful;
		};
		function dispatchDone(){
			self.dispatchEvent({type:'done', preloader:self});
		}
	}
})();var ClickedOff = new (function () {
    var handles = [];
    this.register = function (element, callbackHide) {
		var handle =  new Handle(element, callbackHide, dispose);
		setTimeout(function () {
			if (!containsElement(element)) {
				handles.push(handle);
			}
		},0);
        return handle;
    };
	this.remove = function(element){
		var iterator = new Iterator(handles);
		while(iterator.hasNext()){
			var handle = iterator.next();
			if(handle.getElement()==element)
			{
				handle.dispose();
				break;
			}
				
		}
	};
    document.addEventListener('mousedown', clickedDocument);
	function dispose(handle){
		var index = handles.indexOf(handle);
		if(index<0)return;
		handles.splice(index, 1);
	}
    function clickedDocument(e) {
        var x = e.pageX;
        var y = e.pageY;
		var handlesSnashot = handles.slice();
        for (var i = 0, handle; handle = handlesSnashot[i]; i++) {
			var element = handle.getElement();
            var absolutePosition = getAbsolute(element);
            var xLeft = absolutePosition.left;
            var xRight = xLeft + element.offsetWidth;
            var yTop = absolutePosition.top;
            var yBottom = yTop + element.offsetHeight;
            if (x < xLeft || x > xRight || y < yTop || y > yBottom) {
                handle.hide();
            }
        }
    }
    function containsElement(element) {
        for (var i = 0, handle; handle = handles[i]; i++) {
            if (handle.getElement() == element)
                return true;
        }
        return false;
    }
    function Handle(element, callbackHide, callbackDispose){
		var additionalElements =[];
		this.addAdditionalElement= function(element){
			if(additionalElements.indexOf(element)<0)
				additionalElements.push(element);
		};
		this.removeAdditionalElement = function(element){
			var index = additionalElements.indexOf(element);
			if(index<0)return;
			additionalElements.splice(index, 1);
		};
		this.getElement = function(){
			return element;
		};
		this.hide = function(){
			callbackDispose();
			callbackHide();
		};
		this.dispose = callbackDispose;
	}

})();var Popup= new (function(){
	//var active;
	var _Popup = function(params){
		params=params||{};
		EventEnabledBuilder(this);
		var self = this;
		var clickedOffHandle;
		var childPopups = [];
		var element = E.DIV();
		var showing = false;
		var closeOnClickOff = params.closeOnClickOff==undefined?true:params.closeOnClickOff;
		element.classList.add('popup');
		this.show = function(){
			//if(active)
				//active.hide();
			if(closeOnClickOff)
				clickedOffHandle = ClickedOff.register(element, hide);
			setVisible(true);
			showing = true;
			//active = self;
		};
		this.hide = function(){
			showing = false;
			if(closeOnClickOff)
				clickedOffHandle.dispose();
			hide();
		};
		this.setPosition=function(params){
			if(params.left)
				element.style.left=String(params.left)+'px';
			if(params.top)
				element.style.top=String(params.top)+'px';
			if(params.right)
				element.style.right=String(params.right)+'px';
			if(params.bottom)
				element.style.bottom=String(params.bottom)+'px';
		};
		this.dispose = function(){
			if(closeOnClickOff)
				ClickedOff.dispose();
			element.parentNode.removeChild(element);
		};
		this.addChildPopup = function(childPopup){//a child control which can be outside the bounds but will not trigger a click off when its clicked on.
			if(!showing)throw new Error('Cant add child while popup is not showing. Children should be added when made visible only');
			if(!clickedOffHandle)return;
			childPopup.addEventListener('hide', childHidden);
			clickedOffHandle.addAdditionalElement(childPopup.getElement());
			childPopups.push(childPopup);
		};
		this.getElement = function(){return element;};
		function childHidden(e){
			removeChildPopup(e.popup);
		}
		function removeChildPopup(childPopup){
			clickedOffHandle.removeAdditionalElement(childPopup.getElement());
			var index = childPopups.indexOf(childPopup);
			if(index<0)return;
			childPopups.splice(index, 1);
		}
		function hide(){
			setVisible(false);
			each(childPopups.slice(), removeChildPopup);
			dispatchHide();
		}
		function setVisible(value){
			element.style.display=value?'block':'none';
		}
		function dispatchHide(){
			self.dispatchEvent({type:'hide', popup:self});
		}
	};
	return _Popup;
})();var Heading = (function(){
	var _Heading = function(params){
		var self = this;
		var ui = new UI(params);
		this.getElement = ui.getElement;
		this.getEntries = ui.getEntries;
	};
	return _Heading;
	function UI(params){
		var element = E.DIV();
		var entries = E.DIV();
		var title = E.DIV();
		
		element.classList.add('heading');
		title.classList.add('heading-title');
		entries.classList.add('heading-entries');
		title.title = title.innerHTML=params.title;
		element.appendChild(title);
		element.appendChild(entries);
		this.getElement = function(){
			return element;
		};
		this.getEntries = function(){
			return entries;
		};
	}
})();var StandardMenu = new (function(){
	var _StandardMenu = function(params){
		var self = this;
		var title = params.title;
		var classNames = params.classNames;
		var popup = new Popup({});
		var buttonClose = new Button({className:'button-close'});
		var ui = new UI({popup:popup, buttonClose:buttonClose,
		entries:[], title:title, classNames:classNames});
		var pms = params.pms;
		this.getElement = ui.getElement;
		this.getEntries = ui.getEntries;
		this.setVisible = ui.setVisible;
		this.show= function(){
			console.log('show');
			popup.show();
		};
		this.hide = hide;
		if(buttonClose)buttonClose.addEventListener('click',hide);
		function hide(){
			popup.hide();
		}
	};
	return _StandardMenu;
	function UI(params){
		var title = params.title;
		EventEnabledBuilder(this);
		var self = this;
		var title = params.title;
		var classNames = params.classNames;
		var element = params.popup.getElement();
		var inner = E.DIV();
		var entries = E.DIV();
		entries.classList.add('entries');
		inner.classList.add('standard-menu-inner');
		if(classNames)each(classNames, function(className){
			element.classList.add(className);
		});
		var buttonClose = params.buttonClose;
		var heading=E.DIV();
		heading.innerHTML='&nbsp;'+title;
		heading.classList.add('heading');
		heading.appendChild(buttonClose.getElement());
		element.appendChild(inner);
		inner.appendChild(heading);
		inner.appendChild(entries);
		element.classList.add('standard-menu');
		each(params.entries, function(entry){
			entries.appendChild(entry.getElement());
		});
		document.body.appendChild(element);
		this.getElement = function(){return element;};
		this.getEntries = function(){return entries;};
		this.setVisible=function(value){
			entries.style.display=value?'block':'none';
		};
	}
})();var StandardSearch = (function(){
	var _StandardSearch = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var callbackSearch = params.callbackSearch;
		var classNames = params.classNames;
		var getEntryId = params.getEntryId;
		var title = params.title;
		var spinner = new Spinner({});
		var standardMenu = new StandardMenu({title:title, classNames:classNames});
		var searchBar = new SearchBar({});
		var ui = new UI({standardMenu:standardMenu, searchBar:searchBar, callbackSearch:callbackSearch, spinner:spinner});
		var sortedFilteredEntries = new SortedFilteredEntries({element:ui.getEntries(), getEntryId:getEntryId});
		this.show = standardMenu.show;
		this.hide = standardMenu.hide;
		this.getEntries = ui.getEntries;
		this.showSpinner=spinner.show;
		this.hideSpinner = spinner.hide;
	};
	return _StandardSearch;
	function UI(params){
		var self = this;
		var spinner = params.spinner;
		var entries = E.DIV();
		var callbackSearch = params.callbackSearch;
		entries.classList.add('standard-search-entries');
		var standardMenu = params.standardMenu;
		var searchBar = params.searchBar;
		standardMenu.getElement().appendChild(spinner.getElement());
		standardMenu.getEntries().appendChild(searchBar.getElement());
		standardMenu.getEntries().appendChild(entries);
		this.getEntries = function(){
			return entries;
		};
		searchBar.addEventListener('search', callbackSearch);
	}
})();
function Spinner(params) {
	var preventInterraction=params.preventInterraction;
    var self = this;
	var spinner = E.DIV();
	var element;
	spinner.classList.add('spinner');
	for(var i=0; i<3; i++)
		spinner.appendChild(E.DIV());
	if(preventInterraction){
		var preventInterraction=E.DIV();
		preventInterraction.classList.add('prevent-interraction');
		document.documentElement.appendChild(preventInterraction);
		preventInterraction.appendChild(spinner);
		element = preventInterraction;
	}
	else{
		element = spinner;
	}
	element.style.display='none';
	this.getElement = function(){
		return element;
	};
    this.show = function () {
		self.setVisible(true);
    };
    this.hide = function () {
		self.setVisible(false);
    };
	this.setVisible = function(value){
        element.style.display = value?'inline-block':'none';
		if(!value||!preventInterraction)return;
        setTimeout(function () {
            if(document.activeElement&&document.activeElement.blur)
                document.activeElement.blur();
        }, 0);
	};
	if(preventInterraction){
		preventEventPropagation('click');
		preventEventPropagation('mousedown');
		preventEventPropagation('mouseup');
	}
    function preventEventPropagation(name) {
        element.addEventListener(name, function (e) {
            if (!e) e = window.event;
            e.stopPropagation&&e.stopPropagation();
			e.preventDefault&&e.preventDefault();
            return false;
        });
    }
}var Enumerable = (function () {
    var _Enumerable = function (moveNext, current, reset) {
        this.moveNext = moveNext;
        this.current = current;
        this.reset = reset;
    };
    _Enumerable.fromArray = function (arr) {
        return new (function (arr) {
            var index = -1;
            var length = arr.length;
            return new _Enumerable(function () {
                index++;
                return index < length;
            },
            function () {
                return arr[index];
            },
            function () {
                index = -1;
            });
        })(arr);
    };
    return _Enumerable;
})();Enumerable.prototype.toList = function () {
	this.reset();
	var list = [];
	var self = this;
	while (this.moveNext()) {
		list.push(self.current());
	}
	return list;
};
Enumerable.prototype.select = function (func) {
	var self = this;
	return new Enumerable(this.moveNext,
		function current() {
			return func(self.current());
		},
		this.reset);
};
Enumerable.prototype.take = function (n) {
	return (function(n, self){
		var count=0;
		return new Enumerable(function(){
			var next = self.moveNext();
			if(next){
				count++;
				if(count<=n)
					return true;
			}
			return false;
		},
		self.current,
		self.reset);
	})(n, this);
};
Enumerable.prototype.leave = function (n) {
	var self = this;
	var count=0;
	return new Enumerable(function(){
		var next = self.moveNext();
		if(next){
			count++;
			if(count>n)
				return true;
		}
		return false;
	},
	self.current,
	self.reset);
};
Enumerable.prototype.where = function (func) {
	var self = this;
	return new Enumerable(function () {
			do {
				if (!self.moveNext()) return false;
			} while (!func(self.current()));
			return true;
		},
		this.current,
		this.reset);
};
Enumerable.prototype.firstOrDefault = function () {
		this.reset();
		this.moveNext();
		return this.current();
};
Enumerable.prototype.reverse=function(){
	this.reset();
	return Enumerable.fromArray(this.toList().reverse());
};
Enumerable.prototype.sum=function(func){
	this.reset();	
	var sum=0;
	while (this.moveNext()) {
		sum+=func(this.current());
	}
	return sum;
};
Enumerable.prototype.count=function(){
	this.reset();	
	var count=0;
	while (this.moveNext()) {
		count++;
	}
	return count;
};
Enumerable.prototype.each=function(func){
	this.reset();	
	while (this.moveNext()) {
		func(this.current());
	}
};
Array.prototype.select = function (func) {
	return Enumerable.fromArray(this).select(func);
};
Array.prototype.where = function (func) {
	return Enumerable.fromArray(this).where(func);
};
Array.prototype.each=function(func){
	return Enumerable.fromArray(this).each(func);
};
Array.prototype.take=function(n){
	return Enumerable.fromArray(this).take(n);
};
Array.prototype.leave=function(n){
	return Enumerable.fromArray(this).leave(n);
};
Array.prototype.sum = function(func){
	return Enumerable.fromArray(this).sum(func);
};var Ajax = (function(){
	
	var DEFAULT_CONTENT_TYPE='application/json';
	var _Ajax= function(params){
		var url = params.url;
		this.post = function(params){
			params.url = params.url?params.url:url;
			return _Ajax.post(params);
		};
		this.get = function(params){
			params.url = params.url?params.url:url;
			return _Ajax.get(params);
		};
	};
	_Ajax.post= function(params){
		return ajax(params, true);
	};
	_Ajax.get= function(params){
		return ajax(params, false);
	};
	function ajax(params, isPost){var url = params.url;
		var parameters = params.parameters;
		var callbackSuccessful = params.callbackSuccessful;
		var callbackFailed= params.callbackFailed;
		var callbackTimeout = params.callbackTimeout;
		var contentType = params.contentType?params.contentType:DEFAULT_CONTENT_TYPE;
		var timeout = params.timeout;
		var xhr = new XMLHttpRequest();
		xhr.open(isPost?'POST':'GET', url, true);
		if(timeout)
			xhr.timeout=timeout;
		xhr.setRequestHeader('Content-Type', contentType);
		addUrlParameters(url, parameters);
		return new Handle(xhr, isPost?params.data:undefined, callbackSuccessful, callbackFailed, callbackTimeout);
	}
	function addUrlParameters(url, parameters){
		if(!parameters)return url;
		var first=true;
		for(var key in parameters){
			if(first)first=false;else url+='&';
			url+=key;
			url+='=';
			url+=value;
		}
		return url;
	}
	var gcount=0;
	function Handle(xhr, data, callbackSuccessful, callbackFailed, callbackTimeout){
		var count = gcount++;
		var self = this;
		var successful;
		xhr.onload = function() {
			if (xhr.readyState === 4)
			{
				if(xhr.status === 200) {
					successful = true;
					done();
					callbackSuccessful&&callbackSuccessful(xhr.responseText);
					return;
				}
				successful= false;
				console.log('Request failed.  Returned status of ' + xhr.status);
				done();
				callbackFailed&&callbackFailed();
			}
		};
		if(callbackTimeout)
			xhr.ontimeout = callbackTimeout;
		xhr.onprogress = onProgress;
		xhr.send(data);
		xhr.onerror=onError;
		this.getXhr = function(){
			return xhr;
		};
		this.abort = xhr.abort;
		this.getSuccessful = function(){
			return successful;
		};
		function done(){
			self.onDone&&self.onDone(self);
		}
		function onError(e){
			console.error(e);
			callbackFailed&&callbackFailed(e);
		}
		function onProgress(e){
			self.onProgress&&self.onProgress(e.total?(e.loaded/e.total):1);
		}
	}
	return _Ajax;
})();var Longpoll = (function(){
	//var TIMEOUT=30000;
	var _Longpoll = function(params){
		var self = this;
		var url = params.url;
		var id = params.id;
		var count=0;
		var ajax = new Ajax({url:url});
		var disposed=false;
		var started=false;
		var didFirstSend = false;
		var disposedByServer = false;
		var waitingToBeSent = [];
		this.send = function(msg){//issue was caused by multiple sends in parallel before an id got returned.
			if(disposed)return;
			if(started||!didFirstSend){
				didFirstSend = true;
				ajax.post({data:JSON.stringify({id:id, msg:msg}), callbackSuccessful:callbackSendSuccessful, callbackFailed:callbackSendError});
			}
			else
				waitingToBeSent.push(msg);
		};
		this.getDisposedByServer = function(){return disposedByServer;};
		this.dispose=function(){
			if(disposed)return;
			disposed=true;
			dispatchOnDispose();
		};
		function poll(){
			ajax.get({url:urlPoll+getUniqueParameter()/*, timeout:TIMEOUT*/, callbackSuccessful:callbackPollSuccessful, callbackFailed:callbackPollError, callbackTimeout:callbackPollTimeout});
		}
		function getUniqueParameter(){
			return '?t='+count++ +'_'+getTime();
		}
		function getTime(){
			return new Date().getTime();
		}
		function callbackSendSuccessful(res){
			console.log(res);
			res = JSON.parse(res);
			if(res.disposed)
			{
				disposedByServer = true;
				self.dispose();
				return;
			}
			if(started)return;
			started=true;
			id = res.id;
			urlPoll = url+'/'+id;
			dispatchGotId(id);
			each(waitingToBeSent, function(msg){
				self.send(msg);
			});
			waitingToBeSent=null;
			poll();
		}
		function callbackSendError(err){
			console.error(err);
			dispatchOnError(err);
		}
		function callbackPollTimeout(){
			poll();
		}
		function callbackPollError(err){
			console.error(err);
			dispatchOnError(err);
			if(disposed)return;
			poll();
		}
		function callbackPollSuccessful(res){
			poll();
			if(!res)
				return;
			
			res = JSON.parse(res);
			if(res.disposed){
				self.dispose();
			}
			handleMessages(res);
		}
		function handleMessages(res){
			if(!res.msgs)return;
			each(res.msgs, function(msg){
				dispatchOnMessage(msg);
			});
		}
		function dispatchOnDispose(){
			self.onDispose&&self.onDispose();
		}
		function dispatchOnError(err){
			self.onError&&self.onError(err);
		}
		function dispatchOnMessage(msg){
			console.log(msg);
			self.onMessage&&self.onMessage(msg);
		}
		function dispatchGotId(id){
			console.log('dispatchGotId');
			self.onGotId&&self.onGotId(id);
		}
	};
	return _Longpoll;
})();function Spinner(params) {
	var preventInterraction=params.preventInterraction;
    var self = this;
	var spinner = E.DIV();
	var element;
	spinner.classList.add('spinner');
	for(var i=0; i<3; i++)
		spinner.appendChild(E.DIV());
	if(preventInterraction){
		var preventInterraction=E.DIV();
		preventInterraction.classList.add('prevent-interraction');
		document.documentElement.appendChild(preventInterraction);
		preventInterraction.appendChild(spinner);
		element = preventInterraction;
	}
	else{
		element = spinner;
	}
	element.style.display='none';
	this.getElement = function(){
		return element;
	};
    this.show = function () {
		self.setVisible(true);
    };
    this.hide = function () {
		self.setVisible(false);
    };
	this.setVisible = function(value){
        element.style.display = value?'inline-block':'none';
		if(!value||!preventInterraction)return;
        setTimeout(function () {
            if(document.activeElement&&document.activeElement.blur)
                document.activeElement.blur();
        }, 0);
	};
	if(preventInterraction){
		preventEventPropagation('click');
		preventEventPropagation('mousedown');
		preventEventPropagation('mouseup');
	}
    function preventEventPropagation(name) {
        element.addEventListener(name, function (e) {
            if (!e) e = window.event;
            e.stopPropagation&&e.stopPropagation();
			e.preventDefault&&e.preventDefault();
            return false;
        });
    }
}var Settings = (function(){
	var _Settings = function(settingsName)
	{
		this.get = function (name)
		{
			try
			{
				return JSON.parse(localStorage.getItem(settingsName + '_' + name));
			}
			catch(ex)
			{
				return undefined;
			}
		};
		this.set = function (name, obj)
		{
			try
			{
				localStorage.setItem(settingsName + '_' + name, JSON.stringify(obj));
			}
			catch(ex)
			{
				console.log(ex);
			}
		};
	};
	return _Settings;
})();function TabPanel(tabNames, autoHeight, styleNames)
{
    styleNames=!styleNames?{}:styleNames;
    var self = this;
    this.panels = [];
    this.tabs = [];
    var nPanels = tabNames.length;
    this.div = E.DIV();
    var divPanelHousing = E.DIV();
    var divTabs = E.DIV();
	divTabs.classList.add('tabs');
    this.div.style.height =  autoHeight?'auto':'100%';
	this.div.classList.add('tab-panel');
    var tabPercent = 100 / nPanels;
    divPanelHousing.style.height = autoHeight?'auto':'calc(100% - 20px)';
    divPanelHousing.style.width = '100%';
    if(!autoHeight)
		divPanelHousing.style.top = '20px';
    divPanelHousing.style.float='left';
    divPanelHousing.style.position = autoHeight?'relative':'absolute';
    this.div.appendChild(divTabs);
    this.div.appendChild(divPanelHousing);
    function Tab(name, panel, iTab)
    {
        var self = this;
        this.div = E.DIV();
        var divName = E.DIV();
        this.div.style.width = String(tabPercent) + '%';
        this.div.style.left = String(iTab * tabPercent) + '%';
        this.div.classList.add('tab');
        divName.classList.add('name');
        this.div.appendChild(divName);
        divName.innerHTML = name;
        this.div.addEventListener("mousedown", function () {
            setActivePanel(panel);
        });
        this.close = function () {
            Themes.remove(themesObject);
        };
        this.setActive = function () {
            this.div.style.height = '18px';
        };
        this.setInactive = function () {
            this.div.style.height = '17px';
        };
    }
    function Panel()
    {
        var self = this;
        this.div = E.DIV();
        this.div.style.height =autoHeight?'auto':'calc(100% - 3px)';
        this.div.style.position = autoHeight?'relative':'absolute';
		this.div.classList.add('panel');

        this.show = function () {
            self.div.style.display = 'inline';
        };
        this.hide = function () {
            self.div.style.display = 'none';
        };
        this.close = function () {
            Themes.remove(themesObject);
        };
    }
    function setActivePanel(panel)
    {
        for (var i = 0; i < self.panels.length; i++)
        {
            var p = self.panels[i];
            p.hide();
            if (panel != p)
                self.tabs[i].setInactive();
            else
            {
                self.tabs[i].setActive();
                if(self.onChangeTab)self.onChangeTab(i);
            }
        }
        panel.show();
    }
    for (var i = 0; i < nPanels; i++)
    {
        var panel = new Panel();
        var tab = new Tab(tabNames[i], panel, i);
        self.panels.push(panel);
        self.tabs.push(tab);
        divPanelHousing.appendChild(panel.div);
        divTabs.appendChild(tab.div);
    }
    setActivePanel(self.panels[0]);
    this.close = function () {
        for (var i = 0; i < self.panels.length; i++)
        {
            self.panels[i].close();
            self.tabs[i].close();
        }
        Themes.remove(themesObject);
    };
}var WindowResizeManager=new (function(){
		EventEnabledBuilder(this);
		var self = this;
		/*var temporalCallback = new TemporalCallback({callback:doResize, delay:500,
		maxTotalDelay:800});*/
		window.addEventListener("resize", doResize);
		function scheduleResize(){
			//temporalCallback.trigger();
		}
		function doResize(){
			console.log('doing resize');
			dispatchResized();
		}
		function dispatchResized(){
			self.dispatchEvent({type:'resized'});
		}
})();
var ResizeManager=new (function(){
		EventEnabledBuilder(this);
		var self = this;
		this.add=function(params){
			return new Watcher(params);
		};
		function Watcher(params){
			EventEnabledBuilder(this);
			var self = this;
			var element = params.element;
			var onResized=params.onResized;
			var staggered=params.staggered;
			var temporalCallback = staggered?new TemporalCallback({callback:resized, delay:500,
			maxTotalDelay:800}):undefined;
			var loggedSize;
			this.manual=function(){
				resized();
			};
			if(window.ResizeObserver)
				new ResizeObserver(staggered?scheduleResize:resized).observe(element);
			else
				WindowResizeManager.addEventListener('resized', staggered?scheduleResize:resized);
			function logSize(){loggedSize= element.getBoundingClientRect();}
			function scheduleResize(){
				temporalCallback.trigger();
			}
			function resized(params){
				if(!loggedSize){logSize(); return;}
				var previousLoggedSize= loggedSize;
				logSize();
				if(previousLoggedSize.height==loggedSize.height&&previousLoggedSize.width==loggedSize.width)return;
				dispatchResized();
			}
			function dispatchResized(){
				self.dispatchEvent({type:'resized'});
				onResized&&onResized();
			}
		}
})();
var Tickbox = (function(){
	var TICKED='ticked';
	var _Tickbox = function(params){
		var ticked = false;
		var element = E.DIV();
		element.classList.add('tickbox');
		var box = E.DIV();
		box.classList.add('box');
		if(params.text){
			var text = E.DIV();
			text.classList.add('text');
			element.appendChild(text);
			text.innerHTML=params.text;
		}
		element.appendChild(box);
		this.getElement = function(){return element;};
		this.setTicked=function(value){
			ticked = value;
			tickedChanged();
		};
		this.getTicked = function(){
			return ticked;
		};
		box.addEventListener('click', toggle);
		function toggle(){
			ticked=!ticked;
			tickedChanged();
		}
		function tickedChanged(){
			if(ticked){
				if(box.classList.contains(TICKED))return;
				box.classList.add(TICKED);
			}else{
				if(!box.classList.contains(TICKED))return;
				box.classList.remove(TICKED);
			}
		}
	};
	return _Tickbox;
})();function Genders(){
    
}
function GenderPicker()
{
    var element = document.createElement('select');
	element.classList.add('gender');
    for(var i=0; i<Genders.values.length; i++)
    {
        var values = Genders.values[i];
        var option = document.createElement('option');
        option.innerHTML = values.txt;
        option.value=values.value;
        element.appendChild(option);
    }
    this.getValue=function(){
        return element.options[element.selectedIndex].value;
    };
	this.getElement = function(){return element;};
}
Genders.values =[{value: 0, txt: 'a man'},
        {value: 1, txt: 'a woman'},
        {value: 2, txt: 'a couple(man + woman)'},
        {value: 3, txt: 'a couple of men'},
        {value: 4, txt: 'a couple of women'},
        {value: 5, txt: 'a transexual man'},
        {value: 6, txt: 'a transexual women'}
    ];function Birthday()
{
    var element = E.DIV();
    var selectDay = E.SELECT();
    var selectMonth = E.SELECT();
    var selectYear = E.SELECT();
	element.classList.add('birthday');
    element.appendChild(selectDay);
    element.appendChild(selectMonth);
    element.appendChild(selectYear);
	selectDay.classList.add('not-right');
	selectMonth.classList.add('not-right');
    var now = new Date();
    var year = 1900 + now.getYear();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    selectDay.appendChild(createOption(undefined, 'Day'));
    selectMonth.appendChild(createOption(undefined, 'Month'));
    selectYear.appendChild(createOption(undefined, 'Year'));
    for (var i = 1; i < 32; i++)
    {
        var option = createOption(i, String(i));
        selectDay.appendChild(option);
    }
    for (var i = 1; i < 12; i++)
    {
        var option = createOption(i, months[i]);
        selectMonth.appendChild(option);
    }
    var maxYear = year - 17;
    for (var i = maxYear - 100; i < maxYear; i++)
    {
        var option = createOption(i, String(i));
        selectYear.appendChild(option);
    }
	this.getElement = function(){return element;};
    function createOption(value, txt)
    {
        var option = document.createElement('option');
        option.value = value;
        option.innerHTML = txt;
        return option;
    }
    this.getValue = function()
    {
        var day =selectDay.options[selectDay.selectedIndex].value;
        var month =selectMonth.options[selectMonth.selectedIndex].value;
        var year = selectYear.options[selectYear.selectedIndex].value;
        return{day:(day=='undefined'? undefined:parseInt(day)),month:(month=='undefined'?undefined:parseInt(month)), year:(year=='undefined'?undefined:parseInt(year))};
    };

}var Authenticate = (function(){
	var _Authenticate = function (params)
	{
		var callbackRegister = params.callbackRegister;
		var callbackSignIn = params.callbackSignIn;
		var callbackGuest = params.callbackGuest;
		var enablePassword = (callbackRegister != undefined);
		var self = this;
		var spinner = new Spinner({preventInterraction:true});
		document.documentElement.appendChild(spinner.getElement());
		var settings = new Settings("#username", function () {
			this.set("username");
		});
		var element = E.DIV();
		var divInner = E.DIV();
		var divInputsSignIn = E.DIV();
		var divInputsRegister;
		var divInputsGuest = E.DIV();
		var textUsername = E.TEXT();
		var tickboxStaySignedIn = new Tickbox({text:'Stay signed in'});
		var tickboxStaySignedInGuest = new Tickbox({text:'Stay signed in'});
		var textPasswordSignIn = E.PASSWORD();
		var textPasswordRegister = E.PASSWORD();
		var textPasswordReenterRegister = E.PASSWORD();
		var textEmailRegister = E.TEXT();
		var textUsernameRegister = E.TEXT();
		var tickboxStaySignedInRegister = new Tickbox({text:'Stay signed in'});
		var textUsernameGuest = E.TEXT();
		var button = new Button({classNames:['button-register'], text:'Enter'});
		var buttonEnterGuest = new Button({classNames:['button-register'], text:'Done'});
		var divError = E.DIV();
		var textError = E.TEXTAREA();
		element.classList.add('authenticate');
		divInner.classList.add('div-inner');
		divInputsSignIn.classList.add('div-inputs-sign-in');
		divInputsRegister = E.DIV();
		textUsernameGuest.className = 'form-control';
		textUsernameRegister.className='form-control';
		textEmailRegister.className='form-control';
		textPasswordReenterRegister.className='form-control';
		textPasswordRegister.className='form-control';
		textPasswordSignIn.className='form-control';
		textUsername.className='form-control';
		var birthday = new Birthday();
		var genderPicker = new GenderPicker();
		var buttonRegister = new Button({classNames:['button-register'], text:'Done'});
		styleTextInputRegister(textEmailRegister, 'Email');
		styleTextInputRegister(textUsernameRegister, 'Username');
		styleTextInputRegister(textPasswordRegister, 'Password');
		styleTextInputRegister(textPasswordReenterRegister, 'Re-enter Password');
		textUsernameGuest.onkeydown = detectEnterKey;
		textPasswordSignIn.onkeydown = detectEnterKey;
		textEmailRegister.onkeydown = detectEnterKey;
		textUsernameRegister.onkeydown = detectEnterKey;
		textPasswordRegister.onkeydown = detectEnterKey;
		textPasswordReenterRegister.onkeydown = detectEnterKey;
		divInputsRegister.appendChild(genderPicker.getElement());
		divInputsRegister.appendChild(birthday.getElement());
		divInputsRegister.appendChild(tickboxStaySignedInRegister.getElement());
		divInputsRegister.appendChild(buttonRegister.getElement());
		divInputsRegister.classList.add('inputs-register');
		divInputsGuest.appendChild(textUsernameGuest);
		buttonRegister.addEventListener('click',  sendRegister);
		styleTextInputGuest(textUsernameGuest, 'Username');
		styleTextInputSignIn(textUsername, 'Username');
		styleTextInputSignIn(textPasswordSignIn, 'Password');
		textPasswordSignIn.type = 'password';
		divError.classList.add('error');
		textError.classList.add('error-text');
		textError.readOnly = true;
		button.innerHTML = "Enter";

		this.setError = setError;
		buttonEnterGuest.addEventListener('click', sendGuest);
		button.addEventListener('click', sendSignIn);
		
		textUsername.onkeydown = detectEnterKey;
		textUsername.addEventListener('click', function ()
		{
			textUsername.focus();
		});
		var Showings={Guest:0, SignIn:1, Register:2};
		var showing = Showings.Guest;
		var tabPanel = new TabPanel(['Guest', 'Sign In', 'Register'], true);
		tabPanel.onChangeTab = function (i) {
			setError('');
			switch (i)
			{
				case 1:
					showing=Showings.SignIn;
					break;
				case 2:
					showing = Showings.Register;
					break;
				default:
					showing= Showings.Guest;
					break;
			}
		};
		element.appendChild(tabPanel.div);
		tabPanel.panels[0].div.appendChild(divInputsGuest);
		tabPanel.panels[1].div.appendChild(divInputsSignIn);
		tabPanel.panels[2].div.appendChild(divInputsRegister);
		tabPanel.panels[2].div.className='panel';

		
		tabPanel.div.style.height = 'auto';
		tabPanel.div.style.position = 'relative';
		divInputsGuest.appendChild(tickboxStaySignedInGuest.getElement());
		divInputsGuest.appendChild(buttonEnterGuest.getElement());
		divInputsSignIn.appendChild(tickboxStaySignedIn.getElement());
		divInputsSignIn.appendChild(button.getElement());
		element.appendChild(divError);
		divError.appendChild(textError);
		document.body.appendChild(element);
		var username = settings.get("username");
		if (username)
		{
			textUsername.value = username;
		}
		this.show=function(){
			element.style.display='block';
		};
		this.hide = function ()
		{
			spinner.setVisible(false);	
			element.style.display = 'none';
			settings.set("username", textUsername.value);
		};
		function setLayoutStyle(element)
		{
			element.classList.add('entry');
		}function showSpinner()
		{
			spinner.show();
		}
		function hideSpinner()
		{
			spinner.hide();
		}
		function sendRegister() {
			if (textEmailRegister.value.length < 1)
			{
				setError("You must enter an email address!");
				return;
			}
			if (textUsernameRegister.value.length < 1)
			{
				setError("You must enter a username!");
				return;
			}
			if (textPasswordRegister.value.length < 1)
			{
				setError("You must enter a password!");
				return;
			}
			if (textPasswordReenterRegister.value.length < 1)
			{
				setError("You must re-enter your password!");
				return;
			}
			if (textPasswordRegister.value != textPasswordReenterRegister.value)
			{
				setError("The passwords entered do not match!");
				return;
			}
			showSpinner();
			var bd= birthday.getValue();
			if( !bd.year)
			{
				setError("You must enter a birth year!");
				return;
			}
			if(bd.month==undefined)
			{
				setError("You must enter a birth month!");
				return;
			}
			if(!bd.day)
			{
				setError("You must enter a birth day!");
				return;
			}
			var jObject = {email: textEmailRegister.value, username: textUsernameRegister.value,
			password: textPasswordRegister.value, gender:genderPicker.getValue(), birthday:bd,
			staySignedIn:tickboxStaySignedInRegister.getTicked()};
			callbackRegister(jObject);
		}
		function sendSignIn() {
			showSpinner();
			callbackSignIn({password : textPasswordSignIn.value,username :textUsername.value,
				staySignedIn:tickboxStaySignedIn.getTicked()});
		}
		function sendGuest(){
			showSpinner();
			callbackGuest({username :textUsernameGuest.value, staySignedIn:tickboxStaySignedInGuest.getTicked()});
		}
		function detectEnterKey(evt) {
			evt = evt || window.event;
			if (evt.keyCode == 13)
			{
				switch(showing){
					case Showings.Guest:
						sendGuest();
						break;
					case Showings.SignIn:
						sendSignIn();
						break;
					default:
						sendRegister();
						break;
				}
			}
		}
		function styleTextInputGuest(txt, placeholder)
		{
			setLayoutStyle(txt);
			txt.placeholder = placeholder;
			divInputsGuest.appendChild(txt);
		}
		function styleTextInputSignIn(txt, placeholder)
		{
			setLayoutStyle(txt);
			txt.placeholder = placeholder;
			divInputsSignIn.appendChild(txt);
		}
		function styleTextInputRegister(txt, placeholder)
		{
			setLayoutStyle(txt);
			txt.placeholder=placeholder;
			divInputsRegister.appendChild(txt);
		}
		function setError(error)
		{
			if (error)
			{
				hideSpinner();
				divError.style.display = 'inline';
				textError.innerHTML = error;
			} else
			{
				divError.style.display = 'none';
			}
		}
	};
	return _Authenticate;
})();MappedSets=(function (){
	var _MappedSets = function(){
		var map ={};
		this.add = function(id, item){
			if(!item)return false;
			var items = map[id];
			if(!items){
				map[id]=new Items(item);
				return true;
			}
			return items.add(item);
		};
		this.remove= function(id, item){
			var items = map[id];
			if(!items){
				return false;
			}
			if(!item){
				delete map[id];
				return true;
			}
			var removed = items.remove(item);
			if(!removed) return false;
			if(items.count()<1)
				delete map[id];
			return true;
		};
		this.contains=function(id, item){
			var items = map[id];
			if(!items)return false;
			if(!item)return true;
			return items.contains(item);
		};
		this.getList = function(id){
			console.log(map);
			var items = map[id];
			if(!items)return;
			return items.getList();
		};
	};
	return _MappedSets;
	function Items(item){
		var self = this;
		var list =[item];
		this.add = function(item){
			if(self.contains(item))return false;
			list.push(item);
			return true;
		};
		this.remove = function(item){
			var index = list.indexOf(item);
			if(index<0)return false;
			list.splice(index, 1);
		};
		this.contains = function(item){
			return list.indexOf(item)>=0;
		};
		this.getList=function(){
			return list;
		};
		this.count = function(){ return list.length;};
	}
})();var TabPortal = new (function () {
	var mappedSets=new MappedSets();
	var broadcastChannel = new BroadcastChannel('x-chat');
	var _TabPortal = function(params){
		var id = params.id;
		var sendInOwnTab=params.sendInOwnTab;
		var receiveInOwnTab = params.receiveInOwnTab;
		EventEnabledBuilder(this);
		var self = this;
		this.sendMessage = function(message){
			console.log('send');
			console.log(message);
			sendMessage(id, message);
		};
		this.dispose = function(){
			mappedSets.remove(id, self);
			dispatchClosed();
		};
		mappedSets.add(id, new Instance(self, receivedMessage));
		function receivedMessage(msg){
			dispatchMessage(msg);
		}
		function dispatchMessage(message){
			self.dispatchEvent({type:'message', message:message});
		}
		function dispatchClosed(){
			self.dispatchEvent({type:'closed'});
		}
	};
	function Instance(tabPortal, receivedMessage){
		this.receivedMessage = receivedMessage;
	}
	broadcastChannel.onmessage=gotMessage;
	return _TabPortal;
	function gotMessage(e){
		var data = e.data;
		if(!data.id)return;
		var instances = mappedSets.getList(data.id);
		if(!instances)return;
		instances.each(function(x){ return x.receivedMessage(data.message);});
	}
	function sendMessage(id, message){
		broadcastChannel.postMessage({id:id, message:message});
	}
})();var Ignored=(function(){
	var _Ignored = function(params){
		this.getUsername = function(){return params.username;};
		this.getId=function(){return params.id;};
		this.toJSON=function(){return params;};
	};
	_Ignored.fromUser=function(user){
		return new _Ignored({id:user.getId(), username:user.getUsername()});
	};
	_Ignored.fromJSON= function(jObject){
		return new _Ignored(jObject);
	}
	return _Ignored;
})();var IgnoreManager = new (function(){
	var IGNORES='ignores';
	var _IgnoreManager = function(params){
		EventEnabledBuilder(this);
		var tabPortal = new TabPortal({id:'IgnoreManager'});
		var self = this;
		var getUserById=params.getUserById;
		var getUserMe = params.getUserMe;
		var settings = new Settings('ignore');
		var set=new Set({getEntryId:getEntryId});
		this.ignoreUser = function(user){
			ignoreUser(user);
		};
		this.ignoreUserById = function(id){
			if(self.userIdIsIgnored(id))return;
			var user = getUserById(id);
			if(!user)return;
			ignoreUser(user);
		};
		this.ignoreUserByIdAndUsername=function(params){
			var ignored = Ignored.fromJSON(params);
			ignore(ignored);
		};
		this.unignoreUser=function(user){
			self.unignoreUserById(user.getId());
		};
		this.unignoreUserById=function(id){
			var ignored = set.removeById(id);
			if(!ignored)return;
			dispatchUnignored(ignored.getId(), ignored);
			sendUnignoredToOtherTabs(ignored);
		};
		this.userIsIgnored=function(user){
			return self.userIdIsIgnored(user.getId());
		};
		this.userIdIsIgnored=function(id){
			return set.containsId(id);
		};
		this.getIgnores=function(){return set.getEntries();};
		this.clearSave=function(){	
			settings.set('ignores', []);
		};
		this.load = function(){
			var list = settings.get(IGNORES);
			if(!list)return;
			each(list, function(ignored){
				set.add(Ignored.fromJSON(ignored));
			});
		};
		tabPortal.addEventListener('message', messageFromAnotherTab);
		function save(){
			settings.set('ignores', set.getEntries().select(function(x){ return x.toJSON();}).toList());
		}
		function dispatchIgnored(userId, ignored){
			self.dispatchEvent({type:'ignored', userId:userId, ignored:ignored});
		}
		function dispatchUnignored(userId, ignored){
			self.dispatchEvent({type:'unignored', userId:userId, ignored:ignored});
		}
		function getEntryId(ignored){
			return ignored.getId();
		}
		function ignoreUser(user){
			var ignored = Ignored.fromUser(user);
			ignore(ignored);
		}
		function ignore(ignored){
			if(!set.add(ignored))return;
			save();
			dispatchIgnored(ignored.getId(), ignored);
			sendIgnoredToOtherTabs(ignored);
		}
		function messageFromAnotherTab(e){
			var ignored = Ignored.fromJSON(e.message.ignored);
			switch(e.message.type){
				case 'ignore':
					incomingIgnored(ignored);
				break;
				case 'unignore':
					incomingUnignored(ignored);
				break;
			}
			
		}
		function incomingIgnored(ignored){
			if(ignored.getId()==getUserMe().getId())return ;
			if(!set.add(ignored))return;
			save();
			dispatchIgnored(ignored.getId(), ignored);
		}
		function incomingUnignored(ignored){
			if(!set.remove(ignored))return;
			save();
			dispatchUnignored(ignored.getId(), ignored);
		}
		function sendIgnoredToOtherTabs(ignored){
			tabPortal.sendMessage({type:'ignore', ignored: ignored.toJSON()});
		}
		function sendUnignoredToOtherTabs(ignored){
			tabPortal.sendMessage({type:'unignore', ignored: ignored.toJSON()});
		}
	};
	return _IgnoreManager;
})();var OnlineIndicators  = (function(){
	var map = {};
	var __OnlineIndicator = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var online=false;
		this.setOnline= function(value){
			if(value){
				if(!online)
					dispatchCameOnline();
				online = value;
				return;
			}
			if(online)
				dispatchWentOffline();
			online = value;
		};
		this.getOnline = function(){
			return online;
		};
		function dispatchCameOnline(){
			self.dispatchEvent({type:'cameonline'});
		}
		function dispatchWentOffline(){
			self.dispatchEvent({type:'wentoffline'});
		}
	};
	var _OnlineIndicators={};
	_OnlineIndicators.get=function(userId){
		var onlineIndicator = map[userId];
		if(onlineIndicator)return onlineIndicator;
		onlineIndicator = new __OnlineIndicator();
		map[userId]=onlineIndicator;
		return onlineIndicator;
	};
	_OnlineIndicators.setOnline = function(userId, value){
		_OnlineIndicators.get(userId).setOnline(value);
	};
	return _OnlineIndicators;
})();function OnlineIndicatorUI(onlineIndicator){
	var element = E.DIV();
	element.classList.add('online-indicator');
	this.getElement = function(){
		return element;
	};
	onlineIndicator.addEventListener('cameonline', cameOnline);
	onlineIndicator.addEventListener('wentoffline', wentOffline);
	(onlineIndicator.getOnline()?cameOnline:wentOffline)();
	this.dispose = function(){
		onlineIndicator.addEventListener('cameonline', cameOnline);
		onlineIndicator.addEventListener('wentoffline', wentOffline);
	};
	function cameOnline(e){
		element.classList.add('online');
		element.classList.remove('offline');
	}
	function wentOffline(e){
		element.classList.remove('online');
		element.classList.add('offline');
	}
}var OverflowManager = new (function(){
	var _OverflowManager = function(params){
		var getMessages = params.getMessages;
		var remove = params.remove;
		var maxNMessages = params.maxNMessages;
		var self = this;
		var temporalCallback = new TemporalCallback({callback:overflow, maxNDelays:50, maxTotalDelay:6000});
		this.trigger = temporalCallback.trigger;
		function overflow(){
			var messages = getMessages();
			var nonIgnored = messages.where(function(x){ return !x.getIgnored();}).toList();
			var nNonIgnored = nonIgnored.length;
			var nToRemove =  nNonIgnored - maxNMessages;
			if(nToRemove<1)return;
			each(nonIgnored.take(nToRemove).toList(), function(message){
				remove(message);
			});
		}
	};
	return _OverflowManager;
})();var ChannelType = {
	JSONP:'jsonp',
	LONGPOLL:'longpoll',
	WEBSOCKET:'websocket'
};var MysocketChannelAnalysis = new (function(){
	var N_ERRORS_TO_STORE=30;
	var _MysocketChannelAnalysis = function(channelType){
		EventEnabledBuilder(this);
		var self = this;
		var successfullyOpened =false;
		var receivedMessages=false;
		var closed = false;
		var errors=[];
		var openedAt;
		var closedAt;
		var stopWatchOpenFor = new StopWatch();
		this.getSuccessfullyOpened= function(){
				return successfullyOpened;
		};
		this.getOpenForMilliseconds = stopWatchOpenFor.getMilliseconds;
		this.getOpenForSeconds = stopWatchOpenFor.getSeconds;
		this.getOpenedAt = function(){
			return openedAt;
		};
		this.getClosedAt = function(){
			return closedAt;
		};
		this.getChannelType =function(){
			return channelType;
		};
		this.opened = function(){
			successfullyOpened=true;
			openedAt = getTime();
			stopWatchOpenFor.start();
		};
		this.receivedMessage = function(){
			receivedMessages = true;
		};
		this.closed = function(){
			stopWatchOpenFor.stop();
			closed = true;
			closedAt = getTime();
			dispatchClosed();
		};
		this.error = function(error){
			errors.push(error);
			while(errors.length>N_ERRORS_TO_STORE)errors.splice(0, 1);
		};
		function dispatchClosed(){
			self.dispatchEvent({type:'closed', mysocketChannelAnalysis:self});
		}
	};
	return _MysocketChannelAnalysis;
	function getTime(){
		return new Date().getTime();
	}
})();var MysocketChannelManager = (function(){
	var N_TIMES_HISTORY=4;
	var COUPLE_SECONDS=2000;
	var TEN_SECONDS=10000;
	var WhenToCreate={NOW:'now', SHORT_DELAY:'oneMinute', LONG_DELAY:'longDelay'};
	var _MysocketChannelManager = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var mysocketAnalysis = params.mysocketAnalysis;
		var url = params.url;
		var urlWebsocket = params.urlWebsocket;
		var getId = params.getId;
		var channel;
		var pendingCreate=false;
		this.wouldLikeNewChannel = function(){
			if(pendingCreate)return;
			var recommendedDelay = mysocketAnalysis.getRecommendedDelayBeforeCreatingChannel();
			console.log('Reccomended delay before creating a channel was: '+recommendedDelay.type);
			console.log(recommendedDelay);
			switch(recommendedDelay.type){
				case When.NOW:
					return createNewChannel();
				case When.SECONDS:
					var seconds = recommendedDelay.seconds;
					console.log(seconds);
					createNewChannelAfterDelayMilliseconds(seconds*1000);
					break;
			}
		};
		function createNewChannelAfterDelayMilliseconds(milliseconds){
			pendingCreate = true;
			console.log('function createNewChannelAfterDelayMilliseconds(milliseconds){');
			new Timer({delay:milliseconds, callback:callbackCreateChannel, nTicks:1}).start();
		}
		function callbackCreateChannel(){
			console.log('callbackCreateChannel');
			disposeOldChannel();
			createNewChannel();
			dispatchNewChannel();
			pendingCreate=false;
		}
		function disposeOldChannel(){
			
		}
		function createNewChannel(){
			console.log('get id is: '+getId());
			channel = MysocketChannelFactory.create({id:getId(), urlWebsocket:urlWebsocket, url:url, mysocketAnalysis:mysocketAnalysis});
			return channel;
		}
		function dispatchNewChannel(){
			self.dispatchEvent({type:'newchannel', channel:channel});
		}
	};
	return _MysocketChannelManager;
})();var MysocketAnalysis = (function(){
	var CLOSED= 'closed';
	var MAX_OPEN_FOR_WEBSOCKET_FOR_FAIL =5000;
	var DELAY_BEFORE_ATTEMPT_WEBSOCKET_AGAIN= 60000;
	var MAX_N_CHANNELS_PER_MINUTE=3;
	var MIN_DELAY_BETWEEN_CLOSE_AND_CREATE=2000;
	var MAX_N_CHANNEL_ANALYSISS= 20;
	var FAILED_QUICKLY_DELAY_MILLISECONDS=5000;
	var _MysocketAnalysis = function(params){
		var self = this;
		var mysocket = params.mysocket;
		var channelAnalysiss = [];
		var currentChannelAnalysis;
		this.getRecommendedTypes = function(){
			/*var requiresCors = isCrossDomain(mysocket.getUrl());
			if(requiresCors)return [ChannelType.JSONP];*/
			var nRecentWebsocketsFailedQuickly = getNRecentWebsocketsFailedQuickly();
			var supportsWebsocket=window.WebSocket?true:false;
			var websocketFailedQuickly;
			var shouldUseWebsocket=supportsWebsocket&&!(websocketFailedQuickly= nRecentWebsocketsFailedQuickly>0);
			console.log('nRecentWebsocketsFailedQuickly'+nRecentWebsocketsFailedQuickly);
			console.log('shouldUseWebsocket'+shouldUseWebsocket);
			console.log('websocket failed quickly'+websocketFailedQuickly);
			if(shouldUseWebsocket&&websocketFailedQuickly)
			{
				console.log('websocket failed quickly');
				var shouldAttemptWebsocketAgain = new Date().getTime()-websocketFailedQuickly.getOpenedAt()
				>DELAY_BEFORE_ATTEMPT_WEBSOCKET_AGAIN;
				shouldUseWebsocket = shouldAttemptWebsocketAgain;
				console.log('shouldAttemptWebsocketAgain'+shouldAttemptWebsocketAgain);
				shouldUseWebsocket=shouldAttemptWebsocketAgain;
			}
			if(shouldUseWebsocket)
			{
				return [ChannelType.WEBSOCKET, ChannelType.LONGPOLL];
			}
			return [ChannelType.LONGPOLL];
		};
		this.getRecommendedDelayBeforeCreatingChannel= function(){
			console.log(isFirstChannel());
			if(isFirstChannel())return {type:When.NOW};
			var tooManyChannelsThisMinute=getNChannelsCreatedLastMinute()>MAX_N_CHANNELS_PER_MINUTE;
			if(tooManyChannelsThisMinute)return {type:When.SECONDS , seconds:5};
			var minimumDelayBetweenCloseAndReopenPassed = getTime() - getLastChannelClosedAt()> MIN_DELAY_BETWEEN_CLOSE_AND_CREATE;
			if(!minimumDelayBetweenCloseAndReopenPassed) return {type:When.SECONDS, seconds:1};
			return {type:When.NOW};
		};
		this.add=function(channelAnalysis){
			currentChannelAnalysis = channelAnalysis;       
			channelAnalysis.addEventListener(CLOSED, channelAnalysisClosed);
		};
		this.clear = function(){
			currentChannelAnalysis.closed();
			channelAnalysiss=[];
			currentChannelAnalysis=undefined;
		};
		function getNRecentWebsocketsFailedQuickly(){
			return getRecentWebsockets().where(function(x){ return x.getOpenForMilliseconds()<FAILED_QUICKLY_DELAY_MILLISECONDS;}).count();
		}
		function getRecentWebsockets(){
			
			return getRecentChannels().where(function(x){ return x.getChannelType()==ChannelType.WEBSOCKET;});
		}
		function getRecentChannels(){
			var now = getTime();
			var i=channelAnalysiss.length-1;
			var list=[];
			var backThen = now - 60000;
			console.log('channelAnalysiss.length is: '+channelAnalysiss.length);
			while(i>=0)
			{
				var channelAnalysis=channelAnalysiss[i];
				if(backThen <channelAnalysis.getClosedAt())
					list.push(channelAnalysis);
				else
					return list;
				i--;
			}
			return list;
		}
		function isFirstChannel(){
			return channelAnalysiss.length<1;
		}
		function getTime(){
			return new Date().getTime();
		}
		function getNChannelsCreatedLastMinute(){
			var count=0;
			var minuteAgo = getTime()-60000;
			for(var i=channelAnalysiss.length-1; i>=0; i--){
				if(channelAnalysiss[i].getOpenedAt()>minuteAgo)count++;
				else break;
			}
			return count;
		}
		function getLastChannelClosedAt(){
			return channelAnalysiss[channelAnalysiss.length-1].getClosedAt();
		}
		function channelAnalysisClosed(e){
			console.log('channelAnalysisClosed');
			var channelAnalysis = e.mysocketChannelAnalysis;
			channelAnalysis.removeEventListener(CLOSED, channelAnalysisClosed);
			channelAnalysiss.push(channelAnalysis);
			overflowChannelAnalysiss();
			analyseOnClose(channelAnalysis);
		}
		function analyseOnClose(channelAnalysis){
			switch(channelAnalysis.getChannelType())
			{
				case Mysocket.WEBSOCKET:
				break;
			}
		}
		function overflowChannelAnalysiss(){
			while(channelAnalysiss.length>MAX_N_CHANNEL_ANALYSISS){
				channelAnalysis.splice(0, 1);
			}
		}
		function isCrossDomain(mysocketUrl){
			console.log(window.location.href);
			console.log(mysocketUrl);
			return mysocketUrl.indexOf(window.href)<0;
		}
		function getTime(){
			return new Date().getTime();
		}
	};
	return _MysocketAnalysis;
})();var MysocketChannelFactory = new (function(){
	this.create = function(params){
		var mysocketAnalysis = params.mysocketAnalysis;
		var recommendedChannelTypes = mysocketAnalysis.getRecommendedTypes();
		console.log('The recommended channel types was: '+recommendedChannelTypes);
		switch(recommendedChannelTypes[0]){
			case Mysocket.WEBSOCKET:
				return new _Websocket(params.id, params.urlWebsocket);
			case Mysocket.JSONP:
			default:
			console.log(params.url);
				return new _Longpoll(params.id, params.url);
		}
	};
	function _Websocket(id, url){
		console.log('websocket created' +id);
		var self = this;
		var analysis = new MysocketChannelAnalysis(ChannelType.WEBSOCKET);
		var websocket;
		var disposedByServer = false;
		this.send = function(msg){
			console.log(msg);
			websocket.send(JSON.stringify(msg));
		};
		this.getAnalysis= function(){
			return analysis;
		};
		this.getChannelType = function(){
			return ChannelType.WEBSOCKET;
		};
		this.isOpen = function(){
			return websocket&&(websocket.readyState==websocket.OPEN);
		};
		//new Task(function(){onClose('test');}).run();
		//return;
		websocket = new WebSocket(url+(id?'?mysocketId='+id:''));
		websocket.onmessage = onMessage;
		websocket.onopen = onOpen;
		websocket.onclose=onClose;
		websocket.onerror = onError
		this.close = function(){websocket.close();};
		this.getDisposedByServer = function(){
			console.log(disposedByServer);
			return disposedByServer;
		};
		window.channel = this;
		function onMessage(e){
			var msg = JSON.parse(e.data);
				console.log('on message');
				console.log(msg);
			if(msg.mysocketId){
				id=msg.mysocketId;
			}
			if(msg.disposed){
				console.log('got disposed message');
				disposedByServer = true;
				websocket.close();
				return;
			}
			analysis.receivedMessage();
			self.onMessage&&self.onMessage(msg);
		}
		function onOpen(){
			analysis.opened();
			self.onOpen&&self.onOpen();
		}
		function onClose(){
			analysis.closed();
			self.onClose&&self.onClose();
		}
		function onError(err){
			analysis.error(err);
			console.log(err);
			self.onError&&self.onError(err);
		}
	}
	function _Longpoll(id, url){
		var self = this;
		var closed=false;
		var lastErrorAt;
		var analysis = new MysocketChannelAnalysis(ChannelType.LONGPOLL);
		var longpoll = new Longpoll({url:url, id:id});
		longpoll.onMessage= onMessage;
		longpoll.onError = onError;
		longpoll.onSent = nothing;//onOpen
		longpoll.onDispose = onDispose;
		
		window.channel = this;
		this.close= close;
		this.send = longpoll.send;
		this.getAnalysis= function(){
			return analysis;
		};
		this.getChannelType = function(){
			return ChannelType.LONGPOLL;
		};
		this.getDisposedByServer = longpoll.getDisposedByServer;
		setTimeout(onOpen, 0);
		function nothing(){}
		function onMessage(msg){
			analysis.receivedMessage();
			self.onMessage&&self.onMessage(msg);
		}
		function onDispose(){
			console.log('on dispose');
			close();
		}
		function onOpen(){
			analysis.opened();
			self.onOpen&&self.onOpen();
		}
		function onClose(){
			analysis.closed();
			self.onClose&&self.onClose();
		}
		function onError(err){
			analysis.error(err);
			console.log(err);
			//var now = getTime();
			//if(secondErrorInTenSeconds)        
				close();
			//else lastErrorAt= now;
			self.onError&&self.onError(err);
		}
		function getTime(){
			return new Date().getTime()-10000;
		}
		function close(){
			if(closed)return;
			closed=true;
			longpoll.dispose();
			onClose();
		}
		function secondErrorInTenSeconds(now){
			return lastErrorAt&&lastErrorAt<now;
		}
		this.isOpen = function(){
			return !closed;
		};
	}
})();var Mysocket = (function(){
	var MYSOCKET_ID = 'mysocket_id';
	var _Mysocket= function(params){
		var url = params.url;
		var urlWebsocket = params.urlWebsocket;
		EventEnabledBuilder(this);
		var self = this;
		var channel;
		var id;
		var toSend=[];
		var resetting=false;
		this.reset = function(){
			resetting=true;
			id=null;
			toSend=[];
			channel&&channel.dispose();
			channel=null;
			mysocketAnalysis.clear();
		};
		this.send = function(msg){
			resetting=false;
			var channel = getChannel();
			if(channel&&channel.isOpen()){
				channel.send(msg);
				return;
			}
			toSend.push(msg);
		};
		this.getUrl = function(){
			return url;
		};
		var mysocketAnalysis = new MysocketAnalysis({mysocket:this});
		var channelManager = new MysocketChannelManager({mysocketAnalysis:mysocketAnalysis, urlWebsocket:urlWebsocket, url:url, getId:getId});
		channelManager.addEventListener('newchannel', onNewChannel);
		getChannel();
		function callbackOnOpen(){
			dispatchOnOpen();
		}
		function callbackOnClose(){
			dispatchClose();
		}
		function dispatchMessage(msg){
			self.dispatchEvent({type:'message', msg:msg});
		}
		function dispatchOpen(){
			self.dispatchEvent({type:'open'});
		}
		function dispatchClose(){
			self.dispatchEvent({type:'close'});
		}
		function getChannel(){
			if(channel)return channel;
			channel = channelManager.wouldLikeNewChannel();
			if(!channel)return;
			prepareChannel(channel);
		}
		function getId(){
			return id;
		}
		function prepareChannel(channel){
			channel.onClose = onChannelClose;
			channel.onOpen = onChannelOpen;
			channel.onMessage = onChannelMessage;
			mysocketAnalysis.add(channel.getAnalysis());
		}
		function onChannelMessage(msg){
			console.log(msg);
			console.log(new Error().stack);
			if(msg.type==MYSOCKET_ID){
				id=msg.id;
				return;
			}
			dispatchMessage(msg);
		}
		function onChannelClose(){
			var disposedByServer = channel.getDisposedByServer();
			console.log(disposedByServer);
			channel = null;
			if(disposedByServer)
			{
				dispatchDisposedByServer();
				return;
			}
			if(!resetting)
				setTimeout(getChannel,0);
		}
		function onChannelOpen(){
			console.log('open');
			if(toSend.length>0)
				sendPending();
			else
				sayHiAgain();
			dispatchOpen();
		}
		function onNewChannel(e){
			channel = e.channel;
			prepareChannel(channel);
		}
		function dispatchDisposedByServer(){
			console.log(new Error().stack);
			console.log('dispatchDisposedByServer');
			self.dispatchEvent({type:'disposedbyserver'});
		}
		function sayHiAgain(){
			console.log('sayHiAgain');
					channel&&channel.isOpen()&&channel.send({type:'hi'});
		}
		function sendPending(){	
			var iterator = new Iterator(toSend);
			while(iterator.hasNext())
			{
				var msg = iterator.next();
				try{
					channel&&channel.isOpen()&&channel.send(msg);
					iterator.remove();
				}
				catch(ex){
					break;
				}
			}
		}
	};
	_Mysocket.JSONP='jsonp';
	_Mysocket.LONGPOLL='longpoll';
	_Mysocket.WEBSOCKET='websocket';
	return _Mysocket;
})();var SplitPane= (function(){
var MIN_MIN_HEIGHT=20;
var MIN_MIN_WIDTH=20;
	var _SplitPane = function(params){
		var nPanelsWidth= params.nPanelsWidth;
		var nPanelsHeight = params.nPanelsHeight;
		var rowProfiles=params.rowProfiles;
		var columnProfiles = params.columnProfiles;
		var initialized=false;
		EventEnabledBuilder(this);
		var self = this;
		var panelRows=new PanelRows();
		var panelColumns=new PanelColumns();
		var slidersX=new Sliders();
		var slidersY=new Sliders();
		var currentDimensions;
		var element = E.DIV();
		element.classList.add('split-pane');
		this.getElement = function(){
			return element;
		};
		this.getPanelColumns=function(){
			return panelColumns;
		};
		this.getPanelRows=function(){
			return panelRows;
		};
		this.getPanelRow = panelRows.get;
		this.getPanelColumn = panelColumns.get;
		this.getPanelXY=function(x, y){
			var column = panelColumns.get(x);
			return column.getPanel(y);
		};
		createPanels();
		createSliders();
		this.resize=resize;
		this.initialize=initialize;
		function resize(){
			if(!initialized)
			return initialize();
			updateSliderVisibility();
			resizePanelColumnsPositionDimensions(getWidth(), getSliderWidth(), getProportionallyAdaptedPanelColumnWidth);
			initializePanelRowsPositionDimensions(getHeight(), getSliderHeight());
			captureCurrentDimensions();
		}
		function initialize(){
			initialized=true;
			updateSliderVisibility();
			resizePanelColumnsPositionDimensions(getWidth(), getSliderWidth(), function(panelColumn){ return panelColumn.getDesiredWidth();});
			initializePanelRowsPositionDimensions(getHeight(), getSliderHeight());
			captureCurrentDimensions();
		}
		function getProportionallyAdaptedPanelColumnWidth(panelColumn){
			var p = getWidth()/currentDimensions.width;
			return p*panelColumn.getWidth();
		}
		function captureCurrentDimensions(){
			currentDimensions = {width: getWidth(), height:getHeight()};
		}
		function PanelColumns(){
			return new PanelCollections();
		}
		function PanelRows(){
			return new PanelCollections();
		}
		function PanelCollections(){
			var list =[];
			this.add = function(panelCollection){
				list.push(panelCollection);
			};
			this.get=function(x){
				return list[x];
			};
			this.getVisible = function(){
				var visibles=[];
				each(list, function(panelCollection){
					if(panelCollection.getVisible())
						visibles.push(panelCollection);
				});
				return visibles;
			};
			this.count=function(){return list.length;};
			this.getNextSiblingVisible = function(panelCollection){//when a panel gets hidden it takes its right hand side slider with it. Therefore
			//the panel to the right of a slider may not be the next one but cos that may be hidden and its the slider to the right of that, not this slider,
			//which will have been hidden.
			//The exception to that is when an end panel gets hidden but since the slider is taken with it its a non issue.
				for(var i=0; i<list.length;i++){
					var pc = list[i]; 
					if(pc!=panelCollection)continue;
					for(var j=i+1; j<list.length; j++){
						var pc2 = list[j];
						if(pc2.getVisible())
							return pc2;
					}
					return;
				}
			};
		}
		function updateSliderVisibility(){
			slidersX.updateVisibility();
			slidersY.updateVisibility();
		}
		function initializePanelRowsPositionDimensions(heightForPanels, sliderHeight){
			var remainingHeight = heightForPanels;
			var panelRowsVisible = panelRows.getVisible();
			var length = panelRowsVisible.length;
			var currentY=0;
			panelRowsVisible[0].setTop(0);
			for(var y=0; y<length; y++){
				var panelRow = panelRowsVisible[y];
				var rowsToBottomNotIncludingThisOne = panelRowsVisible.slice(y+1);
				var nRowsToBottomNotIncludingThisOne = rowsToBottomNotIncludingThisOne.length;
				var minHeightRequiredToBottom=rowsToBottomNotIncludingThisOne.sum(function(panelRow){return panelRow.getMinHeight();})+(nRowsToBottomNotIncludingThisOne*sliderHeight);
				
				var desiredHeight = panelRow.getDesiredHeight();
				var lastOne = y>=length-1;
				if(!desiredHeight||lastOne)
					desiredHeight = (remainingHeight-(nRowsToBottomNotIncludingThisOne*sliderHeight))/(nRowsToBottomNotIncludingThisOne+1);
				if(remainingHeight - desiredHeight < minHeightRequiredToBottom)
					desiredHeight = remainingHeight - minHeightRequiredToBottom;
				if(!lastOne)
					panelRow.getAssociatedSlider().setTop(currentY+desiredHeight);
				else
					panelRow.setBottom(heightForPanels);
				
				currentY = currentY+desiredHeight+sliderHeight;
				remainingHeight = heightForPanels - currentY;
			}	
		}
		function resizePanelColumnsPositionDimensions(widthForPanels, sliderWidth, getWidth){
			var remainingWidth = widthForPanels;
			var panelColumnsVisible = panelColumns.getVisible();
			var length = panelColumnsVisible.length;
			var currentX=0;
			panelColumnsVisible[0].setLeft(0);
			for(var x=0; x<length; x++){
				var panelColumn = panelColumnsVisible[x];
				var rowsToRightNotIncludingThisOne = panelColumnsVisible.slice(x+1);
				var nColumnsToRightNotIncludingThisOne = rowsToRightNotIncludingThisOne.length;
				var minWidthRequiredToRight=rowsToRightNotIncludingThisOne.sum(function(panelColumn){return panelColumn.getMinWidth();})+(nColumnsToRightNotIncludingThisOne*sliderWidth);
				
				var width = getWidth(panelColumn);
				var lastOne = x>=length-1;
				if(!width||lastOne)
					width = (remainingWidth-(nColumnsToRightNotIncludingThisOne*sliderWidth))/(nColumnsToRightNotIncludingThisOne+1);
				if(remainingWidth - width < minWidthRequiredToRight)
					width = remainingWidth - minWidthRequiredToRight;
				if(!lastOne)
					panelColumn.getAssociatedSlider().setLeft(currentX+width);
				else
					panelColumn.setRight(widthForPanels);
				
				currentX = currentX+width+sliderWidth;
				remainingWidth = widthForPanels - currentX;
			}	
		}
		function getSliderWidth(){
			if(slidersX.count()<1)return 0;
			return slidersX.get(0).getWidth();
		}
		function getSliderHeight(){
			if(slidersY.count()<1)return 0;
			return slidersY.get(0).getHeight();
		}
		function getWidth(){
			return element.getBoundingClientRect().width;
		}
		function getHeight(){
			return element.getBoundingClientRect().height;
		}
		function createPanels(){
			createPanelColumns();
			createPanelRows();
		}
		function createPanelRows(){
			var previousPanelRow;
			for(var y=0; y<nPanelsHeight; y++){
				var currentPanelRow=[];
				var rowProfile = rowProfiles?rowProfiles[y]:undefined;
				for(var x=0; x<nPanelsWidth; x++){
					var panel = new Panel({
						isLeft:x<1?true:false,
						isRight:x>=nPanelsWidth-1?true:false,
						isTop:y<1?true:false,
						isBottom:y>=nPanelsHeight-1?true:false,
					});
					element.appendChild(panel.getElement());
					panelColumns.get(x).addNextPanel(panel);
					currentPanelRow.push(panel);
				}
				var panelRow = new PanelRow({
					rowAbove:previousPanelRow,
					panels:currentPanelRow,
					minHeight:rowProfile?rowProfile.minHeight:undefined,
					height:rowProfile?rowProfile.height:undefined,
					getPaneHeight:getHeight
				});
				panelRow.addEventListener('setvisible', onSetVisible);
				previousPanelRow = panelRow;
				panelRows.add(panelRow);
			}
		}
		function createPanelColumns(){
			var previousPanelColumn;
			for(var i=0; i<nPanelsWidth; i++)
			{
				var columnProfile = columnProfiles?columnProfiles[i]:undefined;
				var panelColumn=new PanelColumn({
					panelColumnLeft:panelColumns.get(i-1),
					minWidth:columnProfile?columnProfile.minWidth:undefined,
					width:columnProfile?columnProfile.width:undefined
				});
				panelColumn.addEventListener('setvisible', onSetVisible);
				previousPanelColumn&&previousPanelColumn.setPanelColumnRight(panelColumn);
				previousPanelColumn=panelColumn;
				panelColumns.add(panelColumn);
			}
		}
		function createSliders(){
			for(var x=0; x<nPanelsWidth-1; x++){
				var slider = new SliderX({leftPanelColumn:panelColumns.get(x), getNextSiblingVisible:panelColumns.getNextSiblingVisible});
				slidersX.add(slider);
				element.appendChild(slider.getElement());
			}
			for(var y=0; y<nPanelsHeight-1; y++){
				var slider = new SliderY({topPanelRow:panelRows.get(y), getNextSiblingVisible:panelRows.getNextSiblingVisible});
				slidersY.add(slider);
				element.appendChild(slider.getElement());
			}
		}
		function onSetVisible(){
			initialize();
		}
	};
	function PanelRow(params){
		EventEnabledBuilder(this);
		var self = this;
		var panels = params.panels;
		var getPaneHeight = params.getPaneHeight;
		var minHeight = params.minHeight;
		var visible=true;
		if(!minHeight)minHeight=Dimension.pixels(MIN_MIN_HEIGHT);
		else if(!minHeight.isDimension)minHeight = new Dimension(minHeight);
		
		var maxHeight = params.maxHeight;
		if(maxHeight&&!maxHeight.isDimension)maxHeight = new Dimension(maxHeight);
		
		var desiredHeight = params.height;
		if(desiredHeight&&!desiredHeight.isDimension)desiredHeight = new Dimension(desiredHeight);
		var associatedSlider;
		this.setAssociatedSlider = function(value){//bottom slider
			associatedSlider = value;
		};
		this.getAssociatedSlider = function(){
			return associatedSlider;
		};
		this.getTop = function(){
			return panels[0].getTop();
		};
		this.setVisible = function(value){
			visible = value;
			each(panels, function(panel){
				panel.setVisible(value);
			});
			dispatchSetVisible(value);
		};
		this.getVisible = function(){
			return visible;
		};
		this.setTop = function(value){
			each(panels, function(panel){
				panel.setTop(value);
			});
		};
		this.setBottom = function(bottom){
			var top = self.getTop();
			self.setHeight(bottom-top);
		};
		this.getDesiredHeight = function(){
			return getDimensionPixels(desiredHeight);
		};
		this.getHeight = function(){
			return panels[0].getHeight();
		};
		this.setHeight = function(value){
			each(panels, function(panel){
				panel.setHeight(value);
			});
		};
		this.getMinHeight = function(){
			return getDimensionPixels(minHeight);
		};
		function getDimensionPixels(dimension){
			if(!dimension)return;
			switch(dimension.getUnit()){
				case Dimension.PX:
					return dimension.getValue();
				case Dimension.PERCENT:
					return dimension.getValue()*getPaneHeight()/100;
			}
		}
		function dispatchSetVisible(visible){
			self.dispatchEvent({type:'setvisible', visible:visible});
		}
	}
	function PanelColumn(params){
		EventEnabledBuilder(this);
		var self = this;
		var panelColumnLeft = params.panelColumnLeft;
		var getPaneWidth = params.getPaneWidth;
		var minWidth = params.minWidth;
		var visible=true;
		if(!minWidth)minWidth=Dimension.pixels(MIN_MIN_WIDTH);
		else if (!minWidth.isDimension) minWidth = new Dimension(minWidth);
		
		var maxWidth = params.maxWidth;
		if(maxWidth&&!maxWidth.isDimension)maxWidth = new Dimension(maxWidth);
		
		var desiredWidth = params.width;
		if(desiredWidth&&!desiredWidth.isDimension)desiredWidth = new Dimension(desiredWidth);
		
		var panels=[];
		var columnRight;
		var associatedSlider;
		this.getFirstPanel = function(){return panels[0];};
		this.setAssociatedSlider = function(value){//rhs slider
			associatedSlider = value;
		};
		this.getAssociatedSlider = function(){
			return associatedSlider;
		};
		this.setVisible = function(value){
			visible = value;
			each(panels, function(panel){
				panel.setVisible(value);
			});
			dispatchSetVisible(value);
		};
		this.getVisible = function(){
			return visible;
		};
		this.getPanel = function(i){
			return panels[i];
		};
		this.setPanelColumnRight = function(value){
			columnRight = value;
		};
		this.addNextPanel= function(panel){
			panels.push(panel);
		};
		this.setLeft = function(value){
			each(panels, function(panel){
				panel.setLeft(value);
			});
		};
		this.getLeft = function(){
			return panels[0].getLeft();
		};
		this.setLeft=function(value){
			each(panels, function(panel){
				panel.setLeft(value);
			});
		};
		this.setRight = function(right){
			var left = self.getLeft();
			self.setWidth(right-left);
		};
		this.getWidth = function(){
			return panels[0].getWidth();
		};
		this.getDesiredWidth = function(){
			return getDimensionPixels(desiredWidth);
		};
		this.setWidth = function(value){
			each(panels, function(panel){
				panel.setWidth(value);
			});
		};
		this.getMinWidth = function(){
			return getDimensionPixels(minWidth);
		};
		
		function getDimensionPixels(dimension){
			if(!dimension)return;
			switch(dimension.getUnit()){
				case Dimension.PX:
					return dimension.getValue();
				case Dimension.PERCENT:
					return dimension.getValue()*getPaneWidth()/100;
			}
		}
		function dispatchSetVisible(visible){
			self.dispatchEvent({type:'setvisible', visible:visible});
		}
	}
	function Panel(params){
		var self = this;
		var element = E.DIV();
		element.classList.add('panel');
		params.isLeft&&element.classList.add('panel-left');
		params.isRight&&element.classList.add('panel-right');
		params.isTop&&element.classList.add('panel-top');
		params.isBottom&&element.classList.add('panel-bottom');
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.getElement = function(){
			return element;
		};
		this.setTop=function(value){
			element.style.top= String(value)+'px';
		};
		this.setLeft=function(value){
			element.style.left=String(value)+'px';
		};
		this.setWidth = function(value){
			element.style.width = String(value)+'px';
		};
		this.getWidth = function(){
			return element.clientWidth;
		};
		this.getLeft = function(){
			return element.offsetLeft;
		};
		this.getTop = function(){
			return element.offsetTop;
		};
		this.setHeight = function(value){
			element.style.height = String(value)+'px';
		};
		this.getHeight = function(){
			return element.clientHeight;
		};
	}
	function SliderX(params){
		var self = this;
		var getPanelWidth = params.getPanelWidth;
		var leftPanelColumn = params.leftPanelColumn;
		var getNextSiblingVisible = params.getNextSiblingVisible;
		var leftPanelColumnStartWidth;
		var rightPanelColumnStartWidth;
		var rightPanelColumnStartLeft;
		var startLeft;
		var currentRightPanelColumn;
		var element = E.DIV();
		element.classList.add('slider');
		element.classList.add('x');
		leftPanelColumn.setAssociatedSlider(this);
		this.updateVisibility= function(){
			if(!leftPanelColumn.getVisible())
			{
				self.setVisible(false);
				return;
			}
			var rightPanelColumn = getNextSiblingVisible(leftPanelColumn);
			if(!rightPanelColumn||!rightPanelColumn.getVisible()){
				self.setVisible(false);
				return;
			}
			self.setVisible(true);
		};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.setLeft=function(value){
			element.style.left=String(value)+'px';
			leftPanelColumn.setRight(value);
			var rightPanelColumn = getNextSiblingVisible(leftPanelColumn);
			rightPanelColumn&&rightPanelColumn.setLeft(value+self.getWidth());
		};
		this.getWidth= function(){
			return element.getBoundingClientRect().width;
		};
		this.getConstraints=function(){
			captureInitialVariables();
			return getConstraintsLeftOfSlider();
		};
		this.getElement = function(){
			return element;
		};
		this.getX=getXLeft;	
		this.getY=function(){
			return element.offsetTop;
		};
		this.setPosition = function(position){
			var x = position.x;
			var dx = x-startLeft;
			element.style.left=String(x)+'px';
			leftPanelColumn.setWidth(leftPanelColumnStartWidth+dx);
			currentRightPanelColumn.setWidth(rightPanelColumnStartWidth-dx);
			currentRightPanelColumn.setLeft(rightPanelColumnStartLeft+dx);
		};
		this.endDrag = function(){
			
		};
		this.getAbsolutePosition=function(){
			return getAbsolute(element);
		};
		function captureInitialVariables(){
			currentRightPanelColumn = getNextSiblingVisible(leftPanelColumn);
			leftPanelColumnStartWidth= leftPanelColumn.getWidth();
			rightPanelColumnStartWidth = currentRightPanelColumn.getWidth();
			rightPanelColumnStartLeft = currentRightPanelColumn.getLeft();
			startLeft = getXLeft();
		}
		var dragManager = new DragManager({
			handle:this
		});
		function getXLeft(){
			return element.offsetLeft;
		}
		function getXRight(){
			return getXLeft()+getWidth();
		}
		function getWidth(){
			return element.getBoundingClientRect().width;
		}
		function getConstraintsLeftOfSlider(){
			var width = getWidth();
			var xLeft = getXLeft();
			var minX = xLeft-(leftPanelColumn.getWidth()-leftPanelColumn.getMinWidth());
			var maxX = xLeft+(currentRightPanelColumn.getWidth() - currentRightPanelColumn.getMinWidth());//right now only giving minimum but no maximum sizes
			return {minX:minX, maxX:maxX};
		}
	}
	function SliderY(params){
		var self = this;
		var getPanelHeight = params.getPaneleHeight;
		var getNextSiblingVisible= params.getNextSiblingVisible;
		var topPanelRow=params.topPanelRow;
		var topPanelColumnStartHeight;
		var bottomPanelRowStartHeight;
		var bottomPanelRowStartTop;
		var currentBottomPanelRow;
		var startTop;
		var element = E.DIV();
		element.classList.add('slider');
		element.classList.add('y');
		topPanelRow.setAssociatedSlider(this);
		this.updateVisibility= function(){
			if(!topPanelRow.getVisible())
			{
				self.setVisible(false);
				return;
			}
			var bottomPanelRow = getNextSiblingVisible(topPanelRow);
			if(!bottomPanelRow||!bottomPanelRow.getVisible()){
				self.setVisible(false);
				return;
			}
			self.setVisible(true);
		};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.setTop= function(value){
			element.style.top=String(value)+'px';
			topPanelRow.setBottom(value);
			var bottomPanelRow = getNextSiblingVisible(topPanelRow);
			bottomPanelRow&&bottomPanelRow.setTop(value+self.getHeight());
		};
		this.getHeight = function(){
			return element.getBoundingClientRect().height;
		};
		this.getConstraints=function(){
			captureInitialVariables();
			return getConstraintsTopOfSlider();
		};
		this.getElement = function(){
			return element;
		};
		this.getX=function(){
			return element.offsetLeft;
		};
		this.getY=function(){
			return element.offsetTop;
		};
		this.setPosition = function(position){
			var y = position.y;
			var dy = y-startTop;
			element.style.top=String(position.y)+'px';
			topPanelRow.setHeight(topPanelRowStartHeight+dy);
			currentBottomPanelRow.setHeight(bottomPanelRowStartHeight-dy);
			currentBottomPanelRow.setTop(bottomPanelRowStartTop+dy);
		};
		this.endDrag = function(){
			
		};
		this.getAbsolutePosition=function(){
			return getAbsolute(element);
		};
		var dragManager = new DragManager({
			handle:this
		});
		function captureInitialVariables(){
			currentBottomPanelRow=getNextSiblingVisible(topPanelRow);
			topPanelRowStartHeight= topPanelRow.getHeight();
			bottomPanelRowStartHeight = currentBottomPanelRow.getHeight();
			bottomPanelRowStartTop = currentBottomPanelRow.getTop();
			startTop = getYTop();
		}
		function getYTop(){
			return element.offsetTop;
		}
		function getYBottom(){
			return getYTop()+getHeight();
		}
		function getHeight(){
			return element.getBoundingClientRect().width;
		}
		function getConstraintsTopOfSlider(){
			var height = getHeight();
			var yTop = getYTop();
			var minY = yTop-(topPanelRow.getHeight()-topPanelRow.getMinHeight());
			var maxY = yTop+(currentBottomPanelRow.getHeight() - currentBottomPanelRow.getMinHeight());//right now only giving minimum but no maximum sizes
			return {minY:minY, maxY:maxY};
		}
	}
	function Sliders(){
		var list=[];
		this.add = function(slider){
			list.push(slider);
		};
		this.count = function(){
			return list.length;
		};
		this.get = function(i){
			return list[i];
		};
		this.updateVisibility = function(){
			each(list, function(slider){slider.updateVisibility();});
		};
	}
	//ToDo  only visible sliders so they get positioned in correct places. Or position them along with panels. (associated slider);
	return _SplitPane;
})();(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.adapter = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

'use strict';

var _adapter_factory = require('./adapter_factory.js');

var adapter = (0, _adapter_factory.adapterFactory)({ window: window });
module.exports = adapter; // this is the difference from adapter_core.

},{"./adapter_factory.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adapterFactory = adapterFactory;

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _chrome_shim = require('./chrome/chrome_shim');

var chromeShim = _interopRequireWildcard(_chrome_shim);

var _edge_shim = require('./edge/edge_shim');

var edgeShim = _interopRequireWildcard(_edge_shim);

var _firefox_shim = require('./firefox/firefox_shim');

var firefoxShim = _interopRequireWildcard(_firefox_shim);

var _safari_shim = require('./safari/safari_shim');

var safariShim = _interopRequireWildcard(_safari_shim);

var _common_shim = require('./common_shim');

var commonShim = _interopRequireWildcard(_common_shim);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Shimming starts here.
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
function adapterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      window = _ref.window;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
  };

  // Utils.
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  var adapter = {
    browserDetails: browserDetails,
    commonShim: commonShim,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      chromeShim.shimSenderReceiverGetStats(window);
      chromeShim.fixNegotiationNeeded(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimConnectionState(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      commonShim.removeAllowExtmapMixed(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      firefoxShim.shimRemoveStream(window);
      firefoxShim.shimSenderGetStats(window);
      firefoxShim.shimReceiverGetStats(window);
      firefoxShim.shimRTCDataChannel(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimConnectionState(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edgeShim;

      edgeShim.shimGetUserMedia(window);
      edgeShim.shimGetDisplayMedia(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);

      // the edge shim implements the full RTCIceCandidate object.

      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      break;
    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;

      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCreateOfferLegacy(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimTrackEventTransceiver(window);
      safariShim.shimGetUserMedia(window);

      commonShim.shimRTCIceCandidate(window);
      commonShim.shimMaxMessageSize(window);
      commonShim.shimSendThrowTypeError(window);
      commonShim.removeAllowExtmapMixed(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

// Browser shims.

},{"./chrome/chrome_shim":3,"./common_shim":6,"./edge/edge_shim":7,"./firefox/firefox_shim":11,"./safari/safari_shim":14,"./utils":15}],3:[function(require,module,exports){

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimMediaStream = shimMediaStream;
exports.shimOnTrack = shimOnTrack;
exports.shimGetSendersWithDtmf = shimGetSendersWithDtmf;
exports.shimSenderReceiverGetStats = shimSenderReceiverGetStats;
exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
exports.shimAddTrackRemoveTrack = shimAddTrackRemoveTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.fixNegotiationNeeded = fixNegotiationNeeded;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(function (name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function (id) {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  var filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  var trackStats = [];
  result.forEach(function (value) {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function (trackStat) {
    result.forEach(function (stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get: function get() {
        return this._ontrack;
      },
      set: function set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },

      enumerable: true,
      configurable: true
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function () {
      var _this = this;

      if (!this._ontrackpoly) {
        this._ontrackpoly = function (e) {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', function (te) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === te.track.id;
              });
            } else {
              receiver = { track: te.track };
            }

            var event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(function (track) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === track.id;
              });
            } else {
              receiver = { track: track };
            }
            var event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
        };
        this.addEventListener('addstream', this._ontrackpoly);
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } });
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
    var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
      return {
        track: track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function () {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
        var sender = origAddTrack.apply(this, arguments);
        if (!sender) {
          sender = shimSenderWithDtmf(this, track);
          this._senders.push(sender);
        }
        return sender;
      };

      var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack = function (sender) {
        origRemoveTrack.apply(this, arguments);
        var idx = this._senders.indexOf(sender);
        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }
    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function (stream) {
      var _this2 = this;

      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        _this2._senders.push(shimSenderWithDtmf(_this2, track));
      });
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      var _this3 = this;

      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);

      stream.getTracks().forEach(function (track) {
        var sender = _this3._senders.find(function (s) {
          return s.track === track;
        });
        if (sender) {
          // remove sender
          _this3._senders.splice(_this3._senders.indexOf(sender), 1);
        }
      });
    };
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function () {
      var _this4 = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this4;
      });
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimSenderReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function () {
        var _this5 = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this5;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function () {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function () {
      var sender = this;
      return this._pc.getStats().then(function (result) {
        return (
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          filterStats(result, sender.track, true)
        );
      });
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function () {
        var _this6 = this;

        var receivers = origGetReceivers.apply(this, []);
        receivers.forEach(function (receiver) {
          return receiver._pc = _this6;
        });
        return receivers;
      };
    }
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function () {
      var receiver = this;
      return this._pc.getStats().then(function (result) {
        return filterStats(result, receiver.track, false);
      });
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function () {
    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
      var track = arguments[0];
      var sender = void 0;
      var receiver = void 0;
      var err = void 0;
      this.getSenders().forEach(function (s) {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(function (r) {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || sender && receiver) {
        return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function () {
    var _this7 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
      return _this7._shimmedLocalStreams[streamId][0];
    });
  };

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    var sender = origAddTrack.apply(this, arguments);
    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }
    return sender;
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function (stream) {
    var _this8 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this8.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    var existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    var newSenders = this.getSenders().filter(function (newSender) {
      return existingSenders.indexOf(newSender) === -1;
    });
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function (stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack = function (sender) {
    var _this9 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
        var idx = _this9._shimmedLocalStreams[streamId].indexOf(sender);
        if (idx !== -1) {
          _this9._shimmedLocalStreams[streamId].splice(idx, 1);
        }
        if (_this9._shimmedLocalStreams[streamId].length === 1) {
          delete _this9._shimmedLocalStreams[streamId];
        }
      });
    }
    return origRemoveTrack.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams = function () {
    var _this10 = this;

    var nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(function (stream) {
      return _this10._reverseStreams[stream.id];
    });
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function (stream) {
    var _this11 = this;

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this11.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      var newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function (stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
    var _this12 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    var streams = [].slice.call(arguments, 1);
    if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
      return t === track;
    })) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
    }

    var alreadyExists = this.getSenders().find(function (s) {
      return s.track === track;
    });
    if (alreadyExists) {
      throw new DOMException('Track already exists.', 'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    var oldStream = this._streams[stream.id];
    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track);

      // Trigger ONN async.
      Promise.resolve().then(function () {
        _this12.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      var newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }
    return this.getSenders().find(function (s) {
      return s.track === track;
    });
  };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    window.RTCPeerConnection.prototype[method] = function () {
      var _this13 = this;

      var args = arguments;
      var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [function (description) {
          var desc = replaceInternalStreamId(_this13, description);
          args[0].apply(null, [desc]);
        }, function (err) {
          if (args[1]) {
            args[1].apply(null, err);
          }
        }, arguments[2]]);
      }
      return nativeMethod.apply(this, arguments).then(function (description) {
        return replaceInternalStreamId(_this13, description);
      });
    };
  });

  var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription = function () {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }
    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
    get: function get() {
      var description = origLocalDescription.get.apply(this);
      if (description.type === '') {
        return description;
      }
      return replaceInternalStreamId(this, description);
    }
  });

  window.RTCPeerConnection.prototype.removeTrack = function (sender) {
    var _this14 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.
    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
    }
    var isLocal = sender._pc === this;
    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
    }

    // Search for the native stream the senders track belongs to.
    this._streams = this._streams || {};
    var stream = void 0;
    Object.keys(this._streams).forEach(function (streamid) {
      var hasTrack = _this14._streams[streamid].getTracks().find(function (track) {
        return sender.track === track;
      });
      if (hasTrack) {
        stream = _this14._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }
      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}

function shimPeerConnection(window) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function (selector, successCallback, errorCallback) {
    var _this15 = this;

    var args = arguments;

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.
    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function')) {
      return origGetStats.apply(this, []);
    }

    var fixChromeStats_ = function fixChromeStats_(response) {
      var standardReport = {};
      var reports = response.result();
      reports.forEach(function (report) {
        var standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(function (name) {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    var makeMapStats = function makeMapStats(stats) {
      return new Map(Object.keys(stats).map(function (key) {
        return [key, stats[key]];
      }));
    };

    if (arguments.length >= 2) {
      var successCallbackWrapper_ = function successCallbackWrapper_(response) {
        args[1](makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
    }

    // promise-support
    return new Promise(function (resolve, reject) {
      origGetStats.apply(_this15, [function (response) {
        resolve(makeMapStats(fixChromeStats_(response)));
      }, reject]);
    }).then(successCallback, errorCallback);
  };

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    window.RTCPeerConnection.prototype[method] = function () {
      arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
      return nativeMethod.apply(this, arguments);
    };
  });

  // support for addIceCandidate(null or undefined)
  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function () {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };
}

function fixNegotiationNeeded(window) {
  utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
    var pc = e.target;
    if (pc.signalingState !== 'stable') {
      return;
    }
    return e;
  });
}

},{"../utils.js":15,"./getdisplaymedia":4,"./getusermedia":5}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function (constraints) {
    return getSourceId(constraints).then(function (sourceId) {
      var widthSpecified = constraints.video && constraints.video.width;
      var heightSpecified = constraints.video && constraints.video.height;
      var frameRateSpecified = constraints.video && constraints.video.frameRate;
      constraints.video = {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          maxFrameRate: frameRateSpecified || 3
        }
      };
      if (widthSpecified) {
        constraints.video.mandatory.maxWidth = widthSpecified;
      }
      if (heightSpecified) {
        constraints.video.mandatory.maxHeight = heightSpecified;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    });
  };
}

},{}],5:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logging = utils.log;

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  var browserDetails = utils.detectBrowser(window);

  var constraintsToChrome_ = function constraintsToChrome_(c) {
    if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function oldname_(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name === 'deviceId' ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function (mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function shimConstraints_(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && _typeof(constraints.audio) === 'object') {
      var remap = function remap(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && _typeof(constraints.video) === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'undefined' ? 'undefined' : _typeof(face)) === 'object' ? face : { ideal: face });
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches = void 0;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices = devices.filter(function (d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function (d) {
              return matches.some(function (match) {
                return d.label.toLowerCase().includes(match);
              });
            });
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function shimError_(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function (c) {
      navigator.webkitGetUserMedia(c, onSuccess, function (e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function (cs) {
    return shimConstraints_(cs, function (c) {
      return origGetUserMedia(c).then(function (stream) {
        if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function (track) {
            track.stop();
          });
          throw new DOMException('', 'NotFoundError');
        }
        return stream;
      }, function (e) {
        return Promise.reject(shimError_(e));
      });
    });
  };
}

},{"../utils.js":15}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimRTCIceCandidate = shimRTCIceCandidate;
exports.shimMaxMessageSize = shimMaxMessageSize;
exports.shimSendThrowTypeError = shimSendThrowTypeError;
exports.shimConnectionState = shimConnectionState;
exports.removeAllowExtmapMixed = removeAllowExtmapMixed;

var _sdp = require('sdp');

var _sdp2 = _interopRequireDefault(_sdp);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
    return;
  }

  var NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function (args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      var nativeCandidate = new NativeRTCIceCandidate(args);
      var parsedCandidate = _sdp2.default.parseCandidate(args.candidate);
      var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function () {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window) {
  if (window.RTCSctpTransport || !window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get: function get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  var sctpInDescription = function sctpInDescription(description) {
    var sections = _sdp2.default.splitSections(description.sdp);
    sections.shift();
    return sections.some(function (mediaSection) {
      var mLine = _sdp2.default.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
    // TODO: Is there a better solution for detecting Firefox?
    var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    var version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    var canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    var maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    var match = _sdp2.default.matchPrefix(description.sdp, 'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function () {
    this._sctp = null;

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      var isFirefox = getRemoteFirefoxVersion(arguments[0]);

      // Get the maximum message size the local peer is capable of sending
      var canSendMMS = getCanSendMaxMessageSize(isFirefox);

      // Get the maximum message size of the remote peer.
      var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

      // Determine final maximum message size
      var maxMessageSize = void 0;
      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      }

      // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.
      var sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get: function get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    var origDataChannelSend = dc.send;
    dc.send = function () {
      var data = arguments[0];
      var length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel = function () {
    var dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };
  utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}

/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get: function get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },

    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get: function get() {
      return this._onconnectionstatechange || null;
    },
    set: function set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
      }
    },

    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
    var origMethod = proto[method];
    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = function (e) {
          var pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            var newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeAllowExtmapMixed(window) {
  /* remove a=extmap-allow-mixed for Chrome < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  var browserDetails = utils.detectBrowser(window);
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function (desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      desc.sdp = desc.sdp.split('\n').filter(function (line) {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
    }
    return nativeSRD.apply(this, arguments);
  };
}

},{"./utils":15,"sdp":17}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimPeerConnection = shimPeerConnection;
exports.shimReplaceTrack = shimReplaceTrack;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

var _filtericeservers = require('./filtericeservers');

var _rtcpeerconnectionShim = require('rtcpeerconnection-shim');

var _rtcpeerconnectionShim2 = _interopRequireDefault(_rtcpeerconnectionShim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function (args) {
        return args;
      };
    }
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function (args) {
        return args;
      };
    }
    // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+
    if (browserDetails.version < 15025) {
      var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set: function set(value) {
          origMSTEnabled.set.call(this, value);
          var ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  }

  // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714
  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
  // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  var RTCPeerConnectionShim = (0, _rtcpeerconnectionShim2.default)(window, browserDetails.version);
  window.RTCPeerConnection = function (config) {
    if (config && config.iceServers) {
      config.iceServers = (0, _filtericeservers.filterIceServers)(config.iceServers, browserDetails.version);
      utils.log('ICE servers after filtering:', config.iceServers);
    }
    return new RTCPeerConnectionShim(config);
  };
  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}

function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
  }
}

},{"../utils":15,"./filtericeservers":8,"./getdisplaymedia":9,"./getusermedia":10,"rtcpeerconnection-shim":16}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterIceServers = filterIceServers;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function (url) {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        var validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');
        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }
        return validTurn && !hasTurn;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

},{"../utils":15}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
}

},{}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetUserMedia = shimGetUserMedia;
function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  var shimError_ = function shimError_(e) {
    return {
      name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function toString() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function (c) {
    return origGetUserMedia(c).catch(function (e) {
      return Promise.reject(shimError_(e));
    });
  };
}

},{}],11:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimOnTrack = shimOnTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.shimSenderGetStats = shimSenderGetStats;
exports.shimReceiverGetStats = shimReceiverGetStats;
exports.shimRemoveStream = shimRemoveStream;
exports.shimRTCDataChannel = shimRTCDataChannel;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimPeerConnection(window) {
  var browserDetails = utils.detectBrowser(window);

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    window.RTCPeerConnection.prototype[method] = function () {
      arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
      return nativeMethod.apply(this, arguments);
    };
  });

  // support for addIceCandidate(null or undefined)
  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function () {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };

  var modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function (selector, onSucc, onErr) {
    return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
      if (browserDetails.version < 53 && !onSucc) {
        // Shim only promise getStats with spec-hyphens in type names
        // Leave callback version alone; misc old uses of forEach before Map
        try {
          stats.forEach(function (stat) {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          }
          // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
          stats.forEach(function (stat, i) {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }
      return stats;
    }).then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function () {
      var _this = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this;
      });
      return senders;
    };
  }

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function () {
      var sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function () {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function () {
      var _this2 = this;

      var receivers = origGetReceivers.apply(this, []);
      receivers.forEach(function (receiver) {
        return receiver._pc = _this2;
      });
      return receivers;
    };
  }
  utils.wrapPeerConnectionEvent(window, 'track', function (e) {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function () {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream = function (stream) {
    var _this3 = this;

    utils.deprecated('removeStream', 'removeTrack');
    this.getSenders().forEach(function (sender) {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        _this3.removeTrack(sender);
      }
    });
  };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

},{"../utils":15,"./getdisplaymedia":12,"./getusermedia":13}],12:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function (constraints) {
    if (!(constraints && constraints.video)) {
      var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
      err.name = 'NotFoundError';
      // from https://heycam.github.io/webidl/#idl-DOMException-error-names
      err.code = 8;
      return Promise.reject(err);
    }
    if (constraints.video === true) {
      constraints.video = { mediaSource: preferredMediaSource };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }
    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

},{}],13:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimGetUserMedia(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function remap(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function () {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

},{"../utils":15}],14:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimLocalStreamsAPI = shimLocalStreamsAPI;
exports.shimRemoteStreamsAPI = shimRemoteStreamsAPI;
exports.shimCallbacksAPI = shimCallbacksAPI;
exports.shimGetUserMedia = shimGetUserMedia;
exports.shimConstraints = shimConstraints;
exports.shimRTCIceServerUrls = shimRTCIceServerUrls;
exports.shimTrackEventTransceiver = shimTrackEventTransceiver;
exports.shimCreateOfferLegacy = shimCreateOfferLegacy;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimLocalStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function () {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      return this._localStreams;
    };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    var _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function (stream) {
      var _this = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      stream.getTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
    };

    window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
      if (stream) {
        if (!this._localStreams) {
          this._localStreams = [stream];
        } else if (!this._localStreams.includes(stream)) {
          this._localStreams.push(stream);
        }
      }
      return _addTrack.call(this, track, stream);
    };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      var _this2 = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      var index = this._localStreams.indexOf(stream);
      if (index === -1) {
        return;
      }
      this._localStreams.splice(index, 1);
      var tracks = stream.getTracks();
      this.getSenders().forEach(function (sender) {
        if (tracks.includes(sender.track)) {
          _this2.removeTrack(sender);
        }
      });
    };
  }
}

function shimRemoteStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function () {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get: function get() {
        return this._onaddstream;
      },
      set: function set(f) {
        var _this3 = this;

        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!_this3._remoteStreams) {
              _this3._remoteStreams = [];
            }
            if (_this3._remoteStreams.includes(stream)) {
              return;
            }
            _this3._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            _this3.dispatchEvent(event);
          });
        });
      }
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function () {
      var pc = this;
      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }
            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            pc._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }
      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}

function shimCallbacksAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  var prototype = window.RTCPeerConnection.prototype;
  var createOffer = prototype.createOffer;
  var createAnswer = prototype.createAnswer;
  var setLocalDescription = prototype.setLocalDescription;
  var setRemoteDescription = prototype.setRemoteDescription;
  var addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function (successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = createOffer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function (successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = createAnswer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  var withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function withCallback(candidate, successCallback, failureCallback) {
    var promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    var mediaDevices = navigator.mediaDevices;
    var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = function (constraints) {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function (constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({}, constraints, { video: utils.compactObject(constraints.video) });
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  var OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection = function (pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      var newIceServers = [];
      for (var i = 0; i < pcConfig.iceServers.length; i++) {
        var server = pcConfig.iceServers[i];
        if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
          utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }
      pcConfig.iceServers = newIceServers;
    }
    return new OrigPeerConnection(pcConfig, pcConstraints);
  };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in window.RTCPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'receiver' in window.RTCTrackEvent.prototype &&
  // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
  // defined for some reason even when window.RTCTransceiver is not.
  !window.RTCTransceiver) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }
      var audioTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.sender.track && transceiver.sender.track.kind === 'audio';
      });
      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }
      var videoTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.sender.track && transceiver.sender.track.kind === 'video';
      });
      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver('video');
      }
    }
    return origCreateOffer.apply(this, arguments);
  };
}

},{"../utils":15}],15:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extractVersion = extractVersion;
exports.wrapPeerConnectionEvent = wrapPeerConnectionEvent;
exports.disableLog = disableLog;
exports.disableWarnings = disableWarnings;
exports.log = log;
exports.deprecated = deprecated;
exports.detectBrowser = detectBrowser;
exports.compactObject = compactObject;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logDisabled_ = true;
var deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    var wrappedCallback = function wrappedCallback(e) {
      var modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        cb(modifiedEvent);
      }
    };
    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    var unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function get() {
      return this['_on' + eventNameToWrap];
    },
    set: function set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },

    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  var navigator = window.navigator;

  // Returned result object.

  var result = { browser: null, version: null };

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  if (navigator.mozGetUserMedia) {
    // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
    // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
  } else {
    // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
    return data;
  }

  return Object.keys(data).reduce(function (accumulator, key) {
    var isObject = _typeof(data[key]) === 'object';
    var value = isObject ? compactObject(data[key]) : data[key];
    var isEmptyObject = isObject && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }

    return Object.assign(accumulator, _defineProperty({}, key, value));
  }, {});
}

},{}],16:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var SDPUtils = require('sdp');

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : dtlsRole || 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId ||
        transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    // spec.
    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
        trackId + '\r\n';
    sdp += 'a=' + msid;
    // for Chrome. Legacy should no longer be required.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;

    // RTX
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
}

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
            url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates()
      .find(function(remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation &&
            candidate.ip === remoteCandidate.ip &&
            candidate.port === remoteCandidate.port &&
            candidate.priority === remoteCandidate.priority &&
            candidate.protocol === remoteCandidate.protocol &&
            candidate.type === remoteCandidate.type;
      });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}


function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function(window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
        {track: track}));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
        {track: track}));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {receiver: receiver};
    trackEvent.streams = streams;
    window.setTimeout(function() {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          pc[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.canTrickleIceCandidates = null;

    this.needNegotiation = false;

    this.localStreams = [];
    this.remoteStreams = [];

    this._localDescription = null;
    this._remoteDescription = null;

    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';

    config = JSON.parse(JSON.stringify(config || {}));

    this.usingBundle = config.bundlePolicy === 'max-bundle';
    if (config.rtcpMuxPolicy === 'negotiate') {
      throw(makeError('NotSupportedError',
          'rtcpMuxPolicy \'negotiate\' is not supported'));
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;
      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;
      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config;

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;

    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function() {
      return this._remoteDescription;
    }
  });

  // set up event handlers on prototype
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function() {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this.remoteStreams;
  };

  // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function(s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function(track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function(t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError',
          'Sender was not created by this connection.');
    }
    var stream = transceiver.stream;

    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;

    // remove the stream from the set of local streams
    var localStreams = this.transceivers.map(function(t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 &&
        this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var pc = this;
    stream.getTracks().forEach(function(track) {
      var sender = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };


  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
      usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state',
        {value: 'new', writable: true}
    );

    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.
      iceGatherer.state = end ? 'completed' : 'gathering';
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };

  // start gathering from an RTCIceGatherer.
  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents =
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function(evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        }
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        // also the usernameFragment. TODO: update SDP to take both variants.
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate,
            SDPUtils.parseCandidate(serializedCandidate));

        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function() {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }

      // update local description.
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] +=
            'a=end-of-candidates\r\n';
      }
      pc._localDescription.sdp =
          SDPUtils.getDescription(pc._localDescription.sdp) +
          sections.join('');
      var complete = pc.transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';
        pc._emitGatheringStateChange();
      }

      // Emit candidate. Also emit null candidate when all gatherers are
      // complete.
      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }
      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
        pc.iceGatheringState = 'complete';
        pc._emitGatheringStateChange();
      }
    };

    // emit already gathered candidates.
    window.setTimeout(function() {
      bufferedCandidateEvents.forEach(function(e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set local ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });

      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) &&
            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters,
                  isIceLite ? 'controlling' : 'controlled');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          pc._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set remote ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function(stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      // treat bundle-only as not-rejected.
      var rejected = SDPUtils.isRejected(mediaSection) &&
          SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
          protocol === 'UDP/DTLS/SCTP'))) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] &&
          pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer =
            pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport =
            pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport =
            pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] ||
            pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
              usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        var isNewTrack = false;
        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver ||
              new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            // FIXME: does not work with Plan B.
            if (remoteMsid && remoteMsid.stream === '-') {
              // no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, 'id', {
                get: function() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
            var nativeTrack = s.getTracks().find(function(t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        pc._transceive(pc.transceivers[sdpMLineIndex],
            false,
            isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        pc.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) &&
              (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters,
                'controlling');
          }
          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }

        // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.
        var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function() {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function(item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._isClosed = true;
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this._dispatchEvent('signalingstatechange', event);
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var pc = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');
        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  };

  // Update the ice connection state.
  RTCPeerConnection.prototype._updateIceConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this._dispatchEvent('iceconnectionstatechange', event);
    }
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport &&
          !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');
      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    var offerOptions = arguments[0];
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver('video');
        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
            pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }

        // for subsequent offers, we might have to re-use the payload
        // type of the last offer.
        if (transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function(hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function(rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' &&
            !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
            transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
          'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
          (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' ||
        pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    var mediaSectionsInOffer = SDPUtils.getMediaSections(
        pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol +
                ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
              'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
              'a=rtpmap:120 VP8/90000\r\n';
        }
        sdp += 'c=IN IP4 0.0.0.0\r\n' +
            'a=inactive\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
              !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
        candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    }

    // TODO: needs to go into ops queue.
    return new Promise(function(resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError',
            'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ?
              SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.
          if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
              transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
            }
          }

          // update the remoteDescription.
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' +
              (cand.type ? candidateString : 'end-of-candidates')
              + '\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
        } else {
          return reject(makeError('OperationError',
              'Can not add ICE candidate'));
        }
      }
      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function(selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.rtpSender &&
            transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver &&
            transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }
      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
          'dtlsTransport'].forEach(function(method) {
            if (transceiver[method]) {
              promises.push(transceiver[method].getStats());
            }
          });
    });
    return Promise.all(promises).then(function(allStats) {
      var results = new Map();
      allStats.forEach(function(stats) {
        stats.forEach(function(stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };

  // fix low-level stat names and return Map instead of object.
  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
    'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function(ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function() {
        return nativeGetstats.apply(this)
        .then(function(nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function(id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });

  // legacy callback shims. Should be moved to adapter.js some days.
  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[0] === 'function' ||
          typeof args[1] === 'function') { // legacy
        return nativeMethod.apply(this, [arguments[2]])
        .then(function(description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function(error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function' ||
          typeof args[2] === 'function') { // legacy
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function(error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.
  ['getStats'].forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  return RTCPeerConnection;
};

},{"sdp":17}],17:[function(require,module,exports){
 /* eslint-env node */
'use strict';

// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
          ? '/' + headerExtension.direction
          : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
      'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return obj.attribute === 'cname';
      })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(msidParts) {
    return msidParts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (typeof module === 'object') {
  module.exports = SDPUtils;
}

},{}]},{},[1])(1)
});var ClientClientVideoAudio = new (function () {
	var _ClientClientVideoAudio = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rtcPeerConnection;
		this.createOffer = function(callback){
			getUserPermission(function(result){
				if(!result.successful){
					callback&&callback(result);
					dispatchOfferFailed(result.error);
					return;
				}
				createNewPC();
				handleLocalStream(result.stream);
				sendOffer();
			});
		};
		this.incomingOffer = function(offer){
			createNewPC();
			console.log('setting remote description b');
			console.log('set offer b');
			rtcPeerConnection.setRemoteDescription(offer, function(){
			},function(err){
				error(err);
			});
		};
		this.acceptedOffer = function(offer){
			console.log('ClientClientVideoAudio.acceptedOffer');
			getUserPermission(function(result){
				if(!result.successful){
					dispatchAcceptFailed(result.error);
					return;
				}
				handleLocalStream(result.stream);
				sendAccept();
			});
		};
		this.incomingIceCandidate = function(candidate){
			console.log('incoming ice candidate');
			rtcPeerConnection&&rtcPeerConnection.addIceCandidate(candidate, function(){
				dispatchAddedIceCandidate(candidate);
			}, error);
		};
		this.incomingAccept = function(accept){
			console.log(accept);
			console.log('setting remote description a');
				console.log('set answer b');
			rtcPeerConnection.setRemoteDescription(accept, function(){
				console.log('set');
			}, 
			function(){
				console.error(error);
			});
		};
		function handleLocalStream(stream){
				for (var track of stream.getTracks()) {
					rtcPeerConnection.addTrack(track, stream);
				}
				dispatchLocalStream(stream);
		}
		function sendAccept(){
			createAccept(function(result){
				if(result.successful){
					dispatchSendAccept(result.answer);
					return;
				}
				dispatchAcceptFailed(result.error);
			});
		}
		function sendOffer(){
			createOffer(function(result){
				if(result.successful){
					dispatchSendOffer(result.offer);
					return;
				}
				dispatchOfferFailed(result.error);
			});
		}
		function createOffer(callback){
			rtcPeerConnection.createOffer(function(offer){
				console.log('set offer a');
                rtcPeerConnection.setLocalDescription(offer,function(){
					callback({successful:true, offer:offer});
				},
				function(error){
					errorCallback(callback, error);
				});
			},
			function(error){
					errorCallback(callback, error);
			});
		}
		function createAccept(callback)
		{
            rtcPeerConnection.createAnswer(function (answer)
			{
				console.log('set answer a');
				rtcPeerConnection.setLocalDescription(answer, function(){
					callback({successful:true, answer:answer});
				},
				function(error){
					errorCallback(callback, error)
				});
			}, 
			function(error){
				errorCallback(callback, error)
			});
		}
		function clearOldPC(){
			if(!rtcPeerConnection)return;
			rtcPeerConnection.close();	
		}
		function createNewPC() {
			clearOldPC();
			rtcPeerConnection = new RTCPeerConnection(null);
			rtcPeerConnection.ontrack = onTrack;
			rtcPeerConnection.onremovestream = onRemoveStream;
			rtcPeerConnection.oniceconnectionstatechange = onIceConnectionStateChange;
			rtcPeerConnection.onicecandidate = onIceCandidate;
			return rtcPeerConnection;
		}
		function errorCallback(callback, err){
			error(err);
			callback({successful:false, error:err});
		}
		function error(err){
			console.error(err.message?err.message:err);
			console.error(new Error().stack);
		}
		function dispatchAcceptFailed(error){
			self.dispatchEvent({type:'acceptfailed', error:error});
		}
		function dispatchOfferFailed(error){
			self.dispatchEvent({type:'offerfailed', error:error});
		}
		function dispatchSendIce(candidate){
			self.dispatchEvent({type:'sendice', candidate:candidate});
		}
		function dispatchAddedIceCandidate(candidate){
			self.dispatchEvent({type:'addedicecandidate', candidate:candidate});
		}
		function dispatchAllIceCandidatesSent(){
			self.dispatchEvent({type:'allicecandidatessent'});
		}
		function dispatchLocalStream(stream){
			console.log('dispatching local stream');
			self.dispatchEvent({type:'localstream', stream:stream});
		}
		function dispatchAddRemoteStream(stream){
			console.log('dispatchAddRemoteStream');
			self.dispatchEvent({type:'addremotestream', stream:stream});
		}
		function dispatchRemoveRemoteStream(stream){
			self.dispatchEvent({type:'removeremotestream', stream:stream});
		}
		function dispatchSendOffer(offer){
			self.dispatchEvent({type:'sendoffer', offer:offer});
		}
		function dispatchSendAccept(accept){
			self.dispatchEvent({type:'sendaccept', accept:accept});
		}
		function dispatchEnded(iceConnectionState){
			self.dispatchEvent({type:'ended', iceConnectionState:iceConnectionState});
		}
		function onTrack(e){
			console.log(e.streams[0]);
			dispatchAddRemoteStream(e.streams[0]);
		}
		function onRemoveStream(e){
			dispatchRemoveRemoteStream(e.stream);
		}
		function onIceConnectionStateChange(e){
			console.log('ICE state: ',rtcPeerConnection.iceConnectionState);
			var iceConnectionState = rtcPeerConnection.iceConnectionState;
			switch(iceConnectionState){
				case 'failed':
				case 'disconnected':
				case 'closed':
					dispatchEnded(iceConnectionState);
				break;
			}
		}
		function onIceCandidate(e){
			console.log('onicecandidate');
			console.log(e);
			var candidate=e.candidate;
			if (candidate != null) {
				dispatchSendIce(candidate);
				return;
			}
			dispatchAllIceCandidatesSent();
		}
		function getUserPermission(callback){
			var constraints =  {audio: false,  video: true};
			navigator.getUserMedia(constraints, function(stream) {
				console.log('GOT USRE MEDIA');
				callback({successful:true, stream:stream});
			},
			function(error){
					errorCallback(callback, error)
			});
		}
	};
	return _ClientClientVideoAudio;
})();var VideoFeedUI = (function(){
	var _VideoFeedUI = function(videoFeed){
		EventEnabledBuilder(this);
		var self = this;
		var latestWrappedOffer;
		var currentDialog;
		var element = E.DIV();
		var me = E.DIV();
		var videoMe = E.VIDEO();
		element.classList.add('video-feed');
		me.classList.add('me');
		var videoThem = E.VIDEO();
		videoThem.classList.add('video-them');
		videoMe.classList.add('video-me');
		element.appendChild(videoThem);
		element.appendChild(me);
		me.appendChild(videoMe);
		videoFeed.addEventListener('gotoffer', onGotOffer);
		videoFeed.addEventListener('setlocalstream', onSetLocalStream);
		videoFeed.addEventListener('setremotestream', onSetRemoteStream);
		videoFeed.addEventListener('stopped', onStopped);
		videoFeed.addEventListener('offerfailed', onOfferFailed);
		videoFeed.addEventListener('acceptfailed', onAcceptFailed);
		this.getElement = function(){return element;};
		function onGotOffer(e){
			latestWrappedOffer = e.wrappedOffer;
			console.log(e.offer);
			if(currentDialog)currentDialog.dispose();
			currnetDialog = Dialog.show({message:latestWrappedOffer.userFrom.getUsername()+" want's to video chat!",
			buttons:[{text:'Accept', callback:accept},{text:'decline', callback:decline}]});
		}
		function accept(){
			videoFeed.acceptedOffer(latestWrappedOffer.offer);
		}
		function decline(){
			dispatchOfferRejected(VideoOfferRejectedReasons.DECLINED);
		}
		function onSetLocalStream(e){
			console.log('setting stream');
			var stream = e.stream;
			console.log(e);
			console.log(e.stream);
			videoMe.srcObject=stream;
			videoMe.play();
			dispatchShow();
		}
		function onSetRemoteStream(e){
			var stream = e.stream;
			console.log(stream);
			console.log(new Error().stack);
			console.log('setting videoThem and calling play');
			videoThem.srcObject = stream;
			videoThem.play();
		}
		function onStopped(e){
			dispatchHide();
		}
		function onAcceptFailed(e){
			var reason = e.error?e.error.message:undefined;
			dispatchShowMessageToUser(reason?'Accept failed with reason: '+reason:'Accept failed');
			console.log(reason);
			dispatchOfferRejected(VideoOfferRejectedReasons.ERROR);
		}
		function onOfferFailed(e){
			var reason = e.error?e.error.message:undefined;
			dispatchShowMessageToUser(reason?'Offer failed with reason: '+reason:'Offer failed');
		}
		function dispatchShow(){
			self.dispatchEvent({type:'show'});
		}
		function dispatchHide(){
			self.dispatchEvent({type:'hide'});
		}
		function dispatchShowMessageToUser(message){
			self.dispatchEvent({type:'showmessagetouser', message:message});
		}
		function dispatchOfferRejected(reason){
			console.log(reason);
			self.dispatchEvent({type:'offerrejected', reason:reason});
		}
	};
	return _VideoFeedUI;
})();var VideoFeed = (function(){
	var _VideoFeed = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getOfferTemplate = params.getOfferTemplate;
		var getAcceptTemplate = params.getAcceptTemplate;
		var getIceCandidateTemplate = params.getIceCandidateTemplate;
		var send = params.send;
		var clientClientVideoAudio = new ClientClientVideoAudio({});
		var started=false;
		var stream;
		this.start = function(){
			stop();
			clientClientVideoAudio.createOffer(function(result){
				if(result.successful)
					started=true;
			});
		};
		this.acceptedOffer = clientClientVideoAudio.acceptedOffer;
		this.incomingOffer = function(wrappedOffer){
			clientClientVideoAudio.incomingOffer(wrappedOffer.offer);
			dispatchGotOffer(wrappedOffer);
		};
		this.incomingAccept = clientClientVideoAudio.incomingAccept;
		this.incomingIceCandidate = clientClientVideoAudio.incomingIceCandidate;
		this.stop = function(){
			stop();
			dispatchStopped();
		};
		clientClientVideoAudio.addEventListener('acceptfailed', onAcceptFailed);
		clientClientVideoAudio.addEventListener('offerfailed', onOfferFailed);
		clientClientVideoAudio.addEventListener('sendice', onSendIce);
		clientClientVideoAudio.addEventListener('allicesent', onAllIceCandidatesSent);
		clientClientVideoAudio.addEventListener('localstream', onLocalStream);
		clientClientVideoAudio.addEventListener('addremotestream', onAddRemoteStream);
		clientClientVideoAudio.addEventListener('remoteremotestream', onRemoveRemoteStream);
		clientClientVideoAudio.addEventListener('sendoffer', onSendOffer);
		clientClientVideoAudio.addEventListener('sendaccept', onSendAccept);
		clientClientVideoAudio.addEventListener('ended', onEnded);
		function onOfferFailed(e){
			dispatchGeneralFailure(e);
			dispatchOfferFailed(e);
		}
		function onAcceptFailed(e){
			console.log(new Error().stack);
			console.log(e);
			dispatchGeneralFailure(e);
			dispatchAcceptFailed(e);
		}
		function onSendIce(e){
			sendIce(e.candidate);
		}
		function onAllIceCandidatesSent(){
			
		}
		function onLocalStream(e){
			dispatchSetLocalStream(e.stream);
		}
		function onEnded(e){
			dispatchStopped();
		}
		function onAddRemoteStream(e){
			console.log('onAddRemoteStream');
			closeCurrentStream();
			stream = e.stream;
			dispatchSetRemoteStream(stream);
		}
		function onRemoveRemoteStream(e){
			closeCurrentStream();
			dispatchSetRemoteStream();
		}
		function dispatchGotOffer(wrappedOffer){
			self.dispatchEvent({type:'gotoffer', wrappedOffer:wrappedOffer, offer:wrappedOffer.offer});
		}
		function dispatchStopped(){
			self.dispatchEvent({type:'stopped'});
		}
		function dispatchSetRemoteStream(stream){
			self.dispatchEvent({type:'setremotestream', stream:stream});
		}
		function dispatchSetLocalStream(stream){
			self.dispatchEvent({type:'setlocalstream', stream:stream});
		}
		function dispatchLocalStream(stream){
			self.dispatchEvent(e);
		}
		function dispatchGeneralFailure(e){
			self.dispatchEvent({type:'generalfailure', error:e.error});
		}
		function dispatchOfferFailed(e){
			self.dispatchEvent({type:'offerfailed', error:e.error});
		}
		function dispatchAcceptFailed(e){
			self.dispatchEvent({type:'acceptfailed', error:e.error});
		}
		function onSendOffer(e){
			sendOffer(e.offer);
		}
		function onSendAccept(e){
			sendAccept(e.accept);
		}
		function sendOffer(offer){
			var msg = getOfferTemplate();
			msg.offer = offer;
			console.log(msg);
			send(msg);
		}
		function sendAccept(accept){
			var msg = getAcceptTemplate();
			msg.accept = accept;
			console.log( msg);
			send(msg);
		}
		function sendIce(candidate){
			var msg = getIceCandidateTemplate();
			msg.candidate=candidate;
			console.log(msg);
			send(msg);
		}
		function stop(){
			closeCurrentStream();
		}
		function closeCurrentStream(){
			stream&&stream.getTracks().forEach(function(track) { track.stop(); })
			stream = null;
		}
	};
	return _VideoFeed;
})();var VideoFeedPm = (function(){
	var _VideoFeedPm = function(params){
		var roomId = params.roomId;
		var userTo = params.userTo;
		var getSessionId=params.getSessionId;
		var send = params.send;
		var videoFeed = new VideoFeed({getOfferTemplate:getOfferTemplate, getAcceptTemplate:getAcceptTemplate, getIceCandidateTemplate:getIceCandidateTemplate,
			send:send});
		this.acceptedOffer = videoFeed.acceptedOffer;
		this.incomingAccept = videoFeed.incomingAccept;
		this.iceCandidate = videoFeed.iceCandidate;
		function getOfferTemplate(){
			return {
				type:'pm_video_offer',
				userToId:userTo.getId(),
				sessionId:getSessionId()
			};
		}
		function getAcceptTemplate(){
			return {
				type:'pm_video_accept',
				userToId:userTo.getId(),
				sessionId:getSessionId()
			};
		}
		function getIceCandidateTemplate(){
			return {
				type:'pm_video_ice_candidate',
				userToId:userTo.getId(),
				sessionId:getSessionId()
			};
		}
		return videoFeed;
	};
	return _VideoFeedPm;
})();var Button = (function(){
	var _Button = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var preventPropagation = params.preventPropagation;
		var className = params.className;
		var classNames = params.classNames;
		var classNameToggled = params.classNameToggled;
		var isToggle = params.toggle;
		var toggled = params.toggled?true:false;
		var text = params.text;
		var element = E.BUTTON();
		if(text)
			element.innerHTML = text;
		if(className)
			element.classList.add(className);
		if(classNames)
			each(classNames, function(className){
				element.classList.add(className);
			});
		if(isToggle)
			_toggle();
		element.addEventListener('click', click);
		this.getElement = function(){return element;};
		function click(e){
			if(preventPropagation){
				e = e || window.event;
				e.stopPropagation();
			}
			dispatchClick();
			toggle();
		}
		function toggle(){
			if(isToggle&&classNameToggled){
				_toggle();
				dispatchToggled(toggled);
			}
		}
		function _toggle(){
				if(toggled){
					element.classList.remove(classNameToggled);
					toggled=false;
				}
				else{
					element.classList.add(classNameToggled);
					toggled = true;
				}
		}
		function dispatchClick(){
	        self.dispatchEvent({type:'click'});
		}
		function dispatchToggled(){
			self.dispatchEvent({type:'toggled', toggled:toggled});
		}
	};
	return _Button;
})();var VideoButton = (function(){
	var _VideoButton = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var button = new Button(params);
		var on=false;
		this.setOn = function(value){
			if(on==value)return;
			if(value)
				button.getElement().classList.add('on');
			else
				button.getElement().classList.remove('on');
			on=value;
		};
		this.getElement = button.getElement;
		button.addEventListener('click', dispatchClick);
		function dispatchClick(){
			self.dispatchEvent({type:'click'});
		}
	};
	return _VideoButton;
})(); 
var ClickMenu = new (function () {
	var OptionEntry=(function(){
		var _OptionEntry=function(params){
			EventEnabledBuilder(this);
			var self = this;
			var text = params.text;
			var tooltip = params.tooltip;
			var ui = new UI({text:text, tooltip:tooltip});
			this.getElement = ui.getElement;
			ui.getElement().addEventListener('click', click);
			function click(){
				params.callback();
				dispatchHide();
			}
			function dispatchHide(){
				self.dispatchEvent({type:'hide'});
			}
		};
		return _OptionEntry;
		function UI(params){
			var element = E.DIV();
			element.classList.add('option-entry');
			element.innerText = params.text;
			this.getElement = function(){return element;};
		}
	})();
	var _ClickMenu= function(params){
		EventEnabledBuilder(this);
		var self = this;
		if(params.options)setOptions(params.options);
		console.log(new Error().stack);
		var currentOptionEntries=[];
		var popup = new Popup();
		var element = popup.getElement();
		document.body.appendChild(element);
		var ui = new UI({element:element});
		this.show = function(params){
			if(params.options){
				clearOptions();
				setOptions(params.options);
			}
			popup.show();
		};
		this.setPosition = popup.setPosition;
		function dispatchSelected(option){
			self.dispatchEvent({type:'selected', option:option});
		}
		function setOptions(options){
			each(options, function(option){
				var optionEntry=new OptionEntry(option);
				ui.addOptionEntry(optionEntry);
				optionEntry.addEventListener('hide', hide);
				currentOptionEntries.push(optionEntry);
			});
		}
		function clearOptions(){
			each(currentOptionEntries, function(optionEntry){
				ui.removeOptionEntry(optionEntry);
			});
			currentOptionEntries=[];
		}
		function hide(e){
			popup.hide();
		}
	};
	return _ClickMenu;
	function UI(params){
		var element = params.element;
		element.classList.add('click-menu');
		this.removeOptionEntry=function(optionEntry){
			element.removeChild(optionEntry.getElement());
		};
		this.addOptionEntry=function(optionEntry){
			element.appendChild(optionEntry.getElement());
		};
	}
})();var Dialog = (function(){
	var _Dialog = function(params){
		var self = this;
		var disposeOnHide=params.disposeOnHide;
		var message = params.message;
		var popup = new Popup({closeOnClickOff:false});
		var element = popup.getElement();
		var inner = E.DIV();
		var message = E.DIV();
		element.classList.add('dialog');
		inner.classList.add('inner');
		message.classList.add('message');
		message.innerHTML = params.message;
		document.body.appendChild(popup.getElement());
		popup.getElement().appendChild(inner);
		inner.appendChild(message);
		var buttons = createButtons(params);
		this.show = function(){
			setVisible(true);
		};
		this.dispose = dispose;
		function hide(){
			if(disposeOnHide){
				dispose();
				return;
			}
		}
		function setVisible(value){
			element.style.display=value?'block':'none';
		}
		function dispose(){
			popup.dispose();
		}
		function createButtons(params){
			each(params.buttons, function(buttonProfile){
				var button = new Button({text:buttonProfile.text, className:'dialog-button'});
				button.addEventListener('click', buttonProfile.callback?function(){
					hide();
					buttonProfile.callback();
				}:hide);
				inner.appendChild(button.getElement());
			});
		}
	};
	_Dialog.show = function(params){
		params.disposeOnHide = true;
		var dialog = new _Dialog(params);
		dialog.show();
		return dialog;
	};
	return _Dialog;
})();var MissingUsersManager = new (function(){
	var _MissingUsersManager = function(){
		this.get = function(userId){
			
		};
		this.getRange = function(userIds){
			
		};
	};
	return _MissingUsersManager;
})();var Set = (function(){
	var _Set = function(params){
		var self = this;
		var getEntryId = params.getEntryId;
		var list =[];
		var mapIdToItem={};
		this.add=function(item){
			if(self.contains(item))return false;
				list.push(item);
			mapIdToItem[getEntryId(item)]=item;
			return true;
		};
		this.remove=function(item){
			if(!self.contains(item)) return;
			list.splice(list.indexOf(item), 1);
			delete mapIdToItem[getEntryId(item)];
			return item;
		};
		this.removeById=function(id){
			var item = self.getById(id);
			if(!item)return;
			list.splice(list.indexOf(item), 1);
			delete mapIdToItem[id];
			return item;
		};
		this.count = function(){return list.length; };
		this.contains=function(item){
			return mapIdToItem[getEntryId(item)]?true:false;
		};
		this.getByIndex=function(index){
			return list[index];
		};
		this.getById= function(id){
			return mapIdToItem[id];
		};
		this.containsId=function(id){return mapIdToItem[id]?true:false;};
		this.getIds = function(){
			return Object.keys(mapIdToItem);
		};
		this.getEntries = function(){return list;};
		this.each = function(func){
			each(list, func);
		};	
	};
	return _Set;
})();function ReferenceCounter(callbackDispose){
	var referers =[];
	this.add=function(referer){
		var index = referers.indexOf(referer);
		if(index>=0)return;
		referers.push(referer);
	};
	this.remove= function(referer){
		var index = referers.indexOf(referer);
		if(index<0)return;
		referers.splice(index, 1);
		if(referers.length<1)
			callbackDispose();
	};
}var User = (function(){//Two kinds of users information from server. 1) a comprehensive list of all users and what room they are in.
//This is periodically sent out. 2) a single message to a room when a user enters.
//problem is no way to know for sure if a users message has been dropped.
//one solution is to retrieve a users list when mysocket opens again.
//better still it could be sent automatically upon reconnection.
//This could be a comprehensive dictionary for the entire site and mapping individual rooms.
//one issue is showing an entire user list for pms while at the same time showing which users are in a single room.
//however echat offer no improvement on this.
//single user entered user left mesage.
//this message could contain a list of ids only. and upon there being one missing, a request to server made for entire list.
//upon user joining a message is sent to lobby. jut like other rooms.

//single message with id when user leaves or joins any room.
//single mesage with all info when uer join lobby. this contains map of all rooms user is in.
//if us
	var TYPE = 'user';
	var set = new Set({getEntryId:getEntryId});
	function _User(params){
		EventEnabledBuilder(this);
		var referenceCounter = new ReferenceCounter();
		var self = this;
		this.getId = function(){return params.id;};
		this.setId = function(value){params.id = value;};
		this.getUsername = function(){return String(params.username);};
		this.getEmail = function(){return params.email;};
		this.isGuest= function(){return params.isGuest;};
		this.getGender = function(){return params.gender;};
		this.getBirthday = function(){return params.birthday;};
		this.getImage= function(){return params.image;};
		this.setImage = function(value){
			params.image = value;
		};
		this.toJSON = function(){return params;};
		this.left = function(){
			dispatchLeft();
		};
		function dispatchLeft(){
			self.dispatchEvent({type:'left', user:self});
		}
	};
	var ret={};
	ret.fromJSON = function(params){
		var user = getExisting(params.id);
		if(user) return user;
		user = new _User(params);
		set.add(user);
		return user;
	};
	ret.fromMessage = function(message){
		var user = getExisting(message.getUserId());
		if(user) return user;
		var user = new _User({id:message.getUserId(), username:message.getUsername(), image:message.getImage()});
		set.add(user);
		return user;
	};
	ret.fromPmNotification = function(pmNotification){
		var user = getExisting(pmNotification.getId());
		if(user) return user;
		user = new _User({id:pmNotification.getId(), username:pmNotification.getUsername(), image:pmNotification.getImage()});
		set.add(user);
		return user;
	};
	ret.TYPE=TYPE;
	return ret;
	function getEntryId(user){
		return user.getId();
	}
	function getExisting(id){
		return set.getById(id);
	}
})();var Users = (function(){
	var _Users = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getUserById=params.getUserById;
		var set = new Set({getEntryId:getEntryId});
		this.add=function(user){
			if(!set.add(user))return;
			user.addEventListener('left', userLeft);
			dispatchAdd(user);
		};
		this.contains = set.contains;
		this.containsId = set.containsId;
		this.getById=set.getById;
		this.remove=function(user){
			user.removeEventListener('left', userLeft);
			remove(user);
		};
		this.clear = function(){
			var list = set.getEntries().slice();
			each(list, self.remove);
		};
		this.getIds = set.getIds;
		this.getEntries=set.getEntries;
		function remove(user){
			if(!set.remove(user))return false;
			dispatchRemove(user);
		}
		function getEntryId(user){
			return user.getId();
		}
		function userLeft(e){
			remove(e.user);
		}
		function dispatchAdd(user){
			self.dispatchEvent({type:'add', user:user});
		}
		function dispatchRemove(user){
			console.log('dispatchingt remove');
			self.dispatchEvent({type:'remove', user:user});
		}
		function dispatchMissingIds(missingIds){
			self.dispatchEvent({type:'missingids', missingIds:missingIds});
		}
	};
	return _Users;
})();var SortedFilteredEntries = new (function () {
    var _SortedFilteredEntries = function (params) {
        var compare = params.compare;
        var element = params.element;
        var getEntryId = params.getEntryId;
        var self = this;
        var entries = [];
        var mapIdToEntry = {};
        this.containsEntryId = function (entryId) {
            return containsEntryId(entryId);
        };
        this.getByEntryId = function (entryId) {
            return mapIdToEntry[entryId];
        };
        this.getEntries = function () {
            return entries;
        };
        this.addEntry = function (entry) {
            if (containsEntry(entry)) {
                    return;
            }
            insertInPlace(entry);
        };
        this.removeEntry = function (entry) {
            var index = entries.indexOf(entry);
            if (index < 0) return;
            entries.splice(index, 1);
            element.removeChild(entry.getElement());
            delete mapIdToEntry[getEntryId(entry)];
        };
        this.removeEntryById = function (entryId) {
			var entry = self.getByEntryId(entryId);
			if(!entry)return;
			self.removeEntry(entry);
        };
        this.clear = function () {
            while (entries.length > 0) {
                var entry = entries.splice(0, 1)[0];
                element.removeChild(entry.getElement());
            }
        };
        function insertInPlace(entry) {
            map(entry);
            if (entries.length < 1) {
                entries.push(entry)
                element.appendChild(entry.getElement());
                return;
            }
            var lastIndex = entries.length - 1;
            var insertAtIndex = _findInsertPosition(0, lastIndex, entry);
            if (insertAtIndex <= lastIndex) {
				element.insertBefore(entry.getElement(),entries[insertAtIndex].getElement());
                entries.splice(insertAtIndex, 0, entry);
				
                return;
            }
            entries.push(entry);
            element.appendChild(entry.getElement());
        }
        function map(entry) {
            mapIdToEntry[getEntryId(entry)] = entry;
        }
        function _findInsertPosition(fromIndex, toIndex, entry) {
            var n = toIndex - fromIndex;
            if (n < 5) {
                return findInsertPositionByIteration(fromIndex, toIndex, entry);
            }
            var middleIndex = Math.floor(n / 2) + fromIndex;
            var middleEntry = entries[middleIndex];
            var greaterThan = compare(entry, middleEntry);
            return greaterThan ? _findInsertPosition(middleIndex+1, toIndex, entry) : _findInsertPosition(fromIndex, middleIndex, entry);
        }
        function findInsertPositionByIteration(fromIndex, toIndex, entry) {
            for (var i = fromIndex; i<=toIndex; i++){
                var entryAtIndex = entries[i];
                if (!compare(entry, entryAtIndex)) {
                    return i;
                }
            }
            return toIndex+1;
        }
        function containsEntry(entry) { return containsEntryId(getEntryId(entry)); }
        function containsEntryId(entryId) { return mapIdToEntry[entryId] ? true : false; }
    };
    return _SortedFilteredEntries;
})();var OverlappingEntries = new (function(){
	var _OverlappingEntries = function(params){
		var self = this;
		var set=new Set({getEntryId:getEntryId});
		var element = params.element;
		var name = params.name;
		this.show= function(entryToShow){
			var overlappingEntry = set.getById(entryToShow.getId());
			if(!overlappingEntry)return;
			overlappingEntry.setIsSetShow(true);
			set.each(function(x){ return x.setVisible(x==overlappingEntry);});
			bringToFront(overlappingEntry);
		};
		this.hide = function(entryToHide){
			var overlappingEntry = set.getById(entryToHide.getId());
			overlappingEntry.setVisible(false);
			overlappingEntry.setIsSetShow(false);
			showNext(overlappingEntry)
		};
		this.add = function(entry){
			if(set.containsId(entry.getId()))return;
			entry.addEventListener('show', show);
			entry.addEventListener('show', hide);
			var overlappingEntry = new OverlappingEntry(entry);
			set.add(overlappingEntry);
			element.appendChild(entry.getElement());
		};
		this.remove = function(entry){
			var overlappingEntry = set.getById(entry.getId());
			if(!overlappingEntry) return;
			set.remove(overlappingEntry);
			overlappingEntry.removeElement();
			showNext(overlappingEntry);
		};
		this.getTopEntry = function(){
			return set.getByIndex(set.count()-1);
		};
		function show(e){
			self.show(e.entry);
		}
		function hide(e){
			self.hide(e.entry);
		}
		function bringToFront(overlappingEntry){
			set.remove(overlappingEntry);
			set.add(overlappingEntry);
			overlappingEntry.bringElementToFront();
		}
		function showNext(entryToHide){
			var overlappingEntryToShow = getNextToShow(entryToHide);
			if(!overlappingEntryToShow)return;
			overlappingEntryToShow.setVisible(true);
		}
		function getEntryId(entry){
			return entry.getId();
		}
		function getNextToShow(){
			var str=name+' ';
			return set.getEntries().slice().reverse().where(function(x){ return x.getIsSetShow();}).firstOrDefault();
		}
		function OverlappingEntry(entry){
			var isSetShow = false;
			if(entry.getVisible())isSetShow = true;
			this.getId= function(){return entry.getId();};
			this.getIsSetShow = function(){return isSetShow;};
			this.setIsSetShow=function(value){
				isSetShow = value;
			};
			this.setVisible = function(value){
				entry.setVisible(value);
			};
			this.bringElementToFront=function(){
				var element = entry.getElement();
				var parent = element.parentNode;
				parent.removeChild(element);
				parent.appendChild(element);
			};
			this.removeElement = function(){
				var element = entry.getElement();
				element.parentNode.removeChild(element);
			};
			this.getString = function(){return (entry.getName?entry.getName():'')+isSetShow ;};
			this.getEntry = function(){return entry; };
		}
	};
	return _OverlappingEntries;
})();var ConnectedImage = (function(){
	var mapTypeToMapIdToInstances={};
	var _ConnectedImage = function(params)
	{
		var self = this;
		var id = params.id;
		var type = params.type;
		var instance = {connectedImage:this, set:set};
		var def=params.def;	
		var url = params.url;
		var element = E.DIV();
		element.classList.add('connected-image');
		var img = E.IMG();
		element.appendChild(img);
		var errorCount=0;
		img.onerror = function (e) {
			if(errorCount++<2)
				img.src = def;
		};	
		img.src=url?url:def;
		this.getElement = function(){return element;};
		this.dispose = function(){
			removeInstance(type, id, instance);
		};
		map(type, id, instance);
		function set(url){
			img.src=url;
		}
	};
	_ConnectedImage.update= function(type, id, url){
		var instances = getInstances(type, id);
		if(!instances)return;
		each(instances, function(instance){
			instance.set(url);
		});
	};
	return _ConnectedImage;
	function getInstances(type, id){
		var mapIdToInstances = mapTypeToMapIdToInstances[type];
		if(!mapIdToInstances) return;
		return mapIdToInstances[id];
	}
	function map(type, id, instance){
		var mapIdToInstances = mapTypeToMapIdToInstances[type];
		if(!mapIdToInstances) 
		{
			mapTypeToMapIdToInstances[type]={id:[instance]};
			return;
		}
		var instances = mapIdToInstances[id];
		if(!instances){
			mapIdToInstances[id]=[instance];
			return;
		}
		if(instances.indexOf(instance)<0)
			instances.push(instance);
	}
	function removeInstance(type, id, instance){
		var instances = getInstances(type, id);
		if(!instances) return;
		var index = instances.indexOf(instance);
		if(index<0) return;
		instances.splice(index, 1);
		if(instances.length>0) return;
		delete mapTypeToMapIdToInstances[type][id];
		if(Object.keys(mapTypeToMapIdToInstances[type]).length<2)
		delete mapTypeToMapIdToInstances[type];
	}
})();var RoomImage = new(function(){
	var _RoomImage = function(id){
		var __RoomImage = new ConnectedImage({def:'/images/room-default.gif', type:'room-image', id:id});
		return __RoomImage;
	};
	return _RoomImage;
})();function PmsOpenHistory(params){
		var LIST_USERS = 'listUsers';
		var PMS_OPEN_HISTORY='PmsOpenHistory_';
		var id = PMS_OPEN_HISTORY+userMeId;
		var userMeId = params.userMeId;
		var settings = new Settings(id);
		var set = new Set({getEntryId:getEntryId});
		var tabPortal = new TabPortal({id:id});
		this.add= function(user){
			add(user);
		};
		this.remove = function(user){
			remove(user);
		};
		this.getUsers = set.getEntries;
		load();
		function add(user){
			set.add(user);
			save();
		}
		function remove(user){
			set.remove(user);
			save();
		}
		function getEntryId(user){
			return user.getId();
		}
		function load(){
			var listUsers = settings.get(LIST_USERS);
			if(!listUsers){
				listUsers=[];
				return
			}
			each(listUsers, function(user){
				user = User.fromJSON(user);
				set.add(user);
			});
		}
		function save(){
			var listUsers =[];
			each(set.getEntries(), function(user){
				listUsers.push(user.toJSON());
			});
			settings.set(LIST_USERS, listUsers);
		}
	}var Pms=  (function(){
	var _Pms= function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rooms = params.rooms;
		var getUserMe = params.getUserMe;
		var getUserById= params.getUserById;
		var openHistory;
		var tabPortal;
		this.showPmWithUser = function(user){
			showPmWithUser(user);
			sendAddToOtherTabs(user);
		};
		this.closePmWithUser=function(user){
			closePmWithUser(user);
			sendRemoveToOtherTabs(user);
		};
		this.incomingMessage = function(msg){
			var roomId = getRoomId(msg.userId);
			var room = rooms.getById(roomId);
			if(!room){notify(msg);return;}
			room.incomingMessage(msg.message);
		};
		this.incomingMessages = function(msg){
			var room = rooms.getById(getRoomId(msg.userId));
			if(!room){notify(msg);return;}
			room.incomingMessages(msg.messages);
		};
		this.videoOfferFail = function(msg){
			var room = rooms.getById(getRoomId(msg.userToId));
			if(!room){return;}
			room.videoOfferFail(msg);
		};
		this.videoOffer = function(msg){
			console.log(msg);
			var room = rooms.getById(getRoomId(msg.userFromId));
			if(!room){
				dispatchVideoOfferRejectedResponse(msg.userFromId, VideoOfferRejectedReasons.PM_NOT_OPEN);
				return;}
			msg.userFrom = getUserById(msg.userFromId);
			room.videoOffer(msg);
		};
		this.videoAcceptFail = function(msg){
			var room = rooms.getById(getRoomId(msg.userToId));
			if(!room)return;
			room.videoAcceptFail(msg);
		};
		this.videoAccept = function(msg){
			var room = rooms.getById(getRoomId(msg.userFromId));
			if(!room)return;
			room.videoAccept(msg.accept);
		};
		this.videoIceCandidate = function(msg){
			console.log('video ice candidate');
			console.log(msg);
			var room = rooms.getById(getRoomId(msg.userFromId));
			console.log('roomId is: ');
			console.log(getRoomId(msg.userFromId));
			console.log(room);
			if(!room)return;
			console.log('video ice candidate b');
			room.videoIceCandidate(msg.candidate);
		};
		this.load = function(userMeId){
			openHistory = new PmsOpenHistory({userMeId:userMeId});
			tabPortal = new TabPortal({id:'PmsMenu_'+userMeId});
			tabPortal.addEventListener('message', messageFromAnotherTab);
			var userTos = openHistory.getUsers();
			each(userTos, dispatchAddClosed);
		};
		this.videoOfferRejected= function(msg){
			var room = rooms.getById(getRoomId(msg.userFromId));
			if(!room)return;
			room.videoOfferRejected(msg);
		};
		rooms.addEventListener('showpm', showPm);
		rooms.addEventListener('sendpm', function(e){ return self.dispatchEvent(e);});
		rooms.addEventListener('getpms', function(e){ return self.dispatchEvent(e);});
		rooms.addEventListener('createdroom', createdRoom);
		rooms.addEventListener('destroyedroom', destroyedRoom);
		function showPmWithUser(user){
			var roomId = getRoomId(user.getId());
			rooms.showRoom({id:roomId, name:'PM with '+user.getUsername(), isPm:true, userTo:user});
			dispatchShowingPm(user);
		}
		function closePmWithUser(user){
			openHistory.remove(user);
			var roomId = getRoomId(user.getId());
			var room = rooms.getById(roomId);
			if(!room) return;
			room.close();
		}
		function messageFromAnotherTab(e){
			var message = e.message;
			console.log(e);
			switch(message.type){
				case 'add':
					addFromAnotherTab(User.fromJSON(message.userTo));
				break;
				case 'remove':
					removeFromAnotherTab(User.fromJSON(message.userTo));
				break;
			}
			
		}
		function addFromAnotherTab(userTo){
			showPmWithUser(userTo);
		}
		function removeFromAnotherTab(userTo){
			closePmWithUser(userTo);
		}
		function sendAddToOtherTabs(user){
			if(tabPortal)
				tabPortal.sendMessage({type:'add', userTo: user.toJSON()});
		}
		function sendRemoveToOtherTabs(user){
			if(tabPortal)
				tabPortal.sendMessage({type:'remove', userTo: user.toJSON()});
		}
		function showPm(e){
			console.log('called');
			self.showPmWithUser(e.user);
		}
		function getRoomId(userId){
			return 'pm_'+String(userId);
		}
		function notify(msg){
			dispatchAddNotification(Notification.pmNotificationFromJSON(msg.message));
		}
		function dispatchAddNotification(notification){
			self.dispatchEvent({type:'addnotification', notification:notification});
		}
		function getEntryId(room){
			return room.getId();
		}
		function createdRoom(e){
			var room = e.room;
			if(!room.isPm())return;
			var userTo = room.getUserTo();
			if(!userTo)return;
			dispatchAdd(userTo);
			openHistory.add(userTo);
		}
		function dispatchShowingPm(user){
			self.dispatchEvent({type:'showingpm', user:user});
		}
		function destroyedRoom(e){
			var room = e.room;
			if(!room.isPm())return;
			var userTo = room.getUserTo();
			if(!userTo)return;
			dispatchRemove(userTo);
			openHistory.remove(userTo);
			sendRemoveToOtherTabs(userTo);//The other tabs will echo back but this time closePmWithUser will exit when the room is not returned from rooms.getById() call...
		}
		function dispatchAdd(userTo){
			self.dispatchEvent({type:'add', userTo:userTo});
		}
		function dispatchAddClosed(userTo){
			self.dispatchEvent({type:'addclosed', userTo:userTo});
		}
		function dispatchRemove(userTo){
			self.dispatchEvent({type:'remove', userTo:userTo});
		}
		function dispatchVideoOfferRejectedResponse(userToId, reason){
			self.dispatchEvent({type:'videoofferrejected', userToId:userToId, reason:reason});
		}
	};
	return _Pms;
})();var PmEntry= new (function(){
	var _PmEntry = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var userTo = params.userTo;
		var buttonClose = new Button({className:'button-close', preventPropagation:true});
		var userImage = new UserImage({userId:userTo.getId(), username:userTo.getUsername()});
		var ui = new UI({userImage:userImage, name:userTo.getUsername(), buttonClose:buttonClose, userId:userTo.getId()});
		this.getId = function(){
			return userTo.getId();
		};
		this.getUsername=function(){return userTo.getUsername();};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.parentWidth = ui.parentWidth;
		this.dispose = ui.dispose;
		ui.addEventListener('click',dispatchShowPm);
		buttonClose.addEventListener('click', dispatchClosePm);
		function dispatchShowPm(){
			self.dispatchEvent({
				type:'showpm', user:userTo
			});
		}
		function dispatchClosePm(){
			self.dispatchEvent({
				type:'closepm', user:userTo, pmEntry:self
			});
		}
	};
	return _PmEntry;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var userImage = params.userImage;
		var buttonClose = params.buttonClose;
		var userId = params.userId;
		var onlineIndicatorUI = new OnlineIndicatorUI(OnlineIndicators.get(userId));
		var element = E.DIV();
		element.classList.add('pm-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		inner.appendChild(buttonClose.getElement());
		inner.appendChild(onlineIndicatorUI.getElement());
		username.innerHTML=params.name;
		element.title = 'Open PM with '+params.name;
		this.getElement=function(){return element;};
		this.dispose = function(){
			userImage.dispose();
			onlineIndicatorUI.dispose();
		};
		this.parentWidth = function(clientWidth){
			if(clientWidth<200){
				element.style.width='100%';
				return;
			}
			if(clientWidth<=400)
			{
				element.style.width = '50%';
				return;
			}
			if(clientWidth<= 600){
				element.style.width = '33.3%';
				return;
			}
			element.style.width = '25%';
		};
		inner.addEventListener('click', dispatchClick);
		function dispatchClick(){
			self.dispatchEvent({type:'click'});
		}
	}
})();var PmsMenu = new (function(){
		ImagePreloader.preloadRange([
		'/images/close.jpg', 
		'/images/close-hover.jpg'
		]);
	var _PmsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var popup = isMobile?new Popup({}):undefined;
		var buttonClose = isMobile?new Button({className:'button-close'}):undefined;
		var ui = new UI({popup:popup, buttonClose:buttonClose, getEntries:getEntries, onResized:onResized});
		var pms = params.pms;
		var sortedFilteredEntries = new SortedFilteredEntries({getEntryId:getEntryId, element:ui.getEntries(), compare:compare});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.show= ui.show;
		this.clear = function(){
			each(sortedFilteredEntries.getEntries().slice(), _remove);
		};
		this.resize = ui.resize;
		var tabPortal;
		pms.addEventListener('add', add);
		pms.addEventListener('remove', remove);
		pms.addEventListener('addclosed', addClosed);
		if(buttonClose)buttonClose.addEventListener('click',popup.hide);
		function getEntries(){
			return sortedFilteredEntries.getEntries();
		}
		function add(e){
			_add(e);
		}
		function addClosed(e){
			_add(e);
		}
		function _add(e){
			var pmEntry= new PmEntry({userTo:e.userTo});
			pmEntry.parentWidth(ui.getElement().clientWidth);
			pmEntry.addEventListener('showpm', showPm);
			pmEntry.addEventListener('closepm', closePm);
			sortedFilteredEntries.addEntry(pmEntry);
			ui.checkResized();
		}
		function remove(e){
			var pmEntry = sortedFilteredEntries.getByEntryId(e.userTo.getId());
			pmEntry.dispose();
			_remove(pmEntry);
		}
		function _remove(pmEntry){
			if(!pmEntry)return;
			sortedFilteredEntries.removeEntry(pmEntry);
			ui.checkResized();
			pmEntry.dispose();
		}
		function getEntryId(pmEntry){
			return pmEntry.getId();
		}
		function compare(pmEntryA, pmEntryB){
			return pmEntryA.getUsername()>pmEntryB.getUsername();
		}
		function showPm(e){
			pms.showPmWithUser(e.user);
			if(popup)popup.hide();
		}
		function closePm(e){
			sortedFilteredEntries.removeEntry(e.pmEntry);
			ui.checkResized();
			pms.closePmWithUser(e.user);
		}
		function onResized(){
			dispatchResized();
		}
		function dispatchResized(){
			self.dispatchEvent({type:'resized'});
		}
	};
	return _PmsMenu;
	function UI(params){
		var self = this;
		var popup = params.popup;
		var element = isMobile?popup.getElement():E.DIV();
		var buttonClose = params.buttonClose;
		var onResized = params.onResized;
		var getEntries = params.getEntries;
		var entries = E.DIV();
		var entriesWrapper = E.DIV();
		var inner = E.DIV();
		var resizeWatched;
		
		if(!isMobile)
		{
			
		}
		else
		{
			document.body.appendChild(popup.getElement());
			var heading= new Heading({title:'&nbsp;Pms '});
			var headingWrapper = E.DIV();
			headingWrapper.classList.add('heading-wrapper');
			heading.getEntries().appendChild(buttonClose.getElement());
			headingWrapper.appendChild(heading.getElement());
			inner.appendChild(headingWrapper);
		}
		inner.classList.add('pms-menu-inner');
		element.classList.add('pms-menu');
		entriesWrapper.classList.add('entries-wrapper');
		entries.classList.add('entries');
		
			entriesWrapper.appendChild(entries); 
			inner.appendChild(entriesWrapper);
		element.appendChild(inner); 
		this.getElement = function(){return element;};
		this.setVisible=function(value){
			entries.style.display=value?'block':'none';
		};
		this.getEntries = function(){return entries;};
		this.show = function(){
			popup.show();
			resize();
		};
		this.checkResized=function(){
			resizeWatched.manual(true);
		};
		resizeWatched = ResizeManager.add({element:element, onResized:resize, staggered:true});
		resizeWatched.manual(true);
		this.resize = resize;
		function resize(){
			var clientWidth = entries.clientWidth;
			each(getEntries(), function(pmEntry){
				pmEntry.parentWidth(clientWidth);
			});
			onResized();
		}
	}
})();var RoomEntry = new (function(){
	var _RoomEntry = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var roomImage = new RoomImage();
		var ui = new UI({name:params.name, roomImage:roomImage});
		this.getId = function(){return params.id;};
		this.getElement = ui.getElement;
		this.parentWidth=ui.parentWidth;
		ui.getElement().addEventListener('click', dispatchSelected);
		this.dispose = roomImage.dispose;
		function dispatchSelected(){
			self.dispatchEvent({type:'selected',roomInfo:params});
		}
	};
	return _RoomEntry;
	function UI(params){
		var element = E.DIV();
		element.classList.add('room-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		inner.appendChild(params.roomImage.getElement());
		element.appendChild(inner);
		var name = E.DIV();
		name.classList.add('name');
		name.innerHTML = params.name;
		inner.appendChild(name);
		element.title = params.name;
		
		this.getElement = function(){return element;};
		this.parentWidth = function(clientWidth){
			if(clientWidth<200){
				element.style.width='100%';
				return;
			}
			if(clientWidth<=400)
			{
				element.style.width = '50%';
				return;
			}
			if(clientWidth<= 600){
				element.style.width = '33.3%';
				return;
			}
			element.style.width = '25%';
		};
	}
})();var Room = new (function(){
	var _Room = function(params){
		console.log(params);
		EventEnabledBuilder(this);
		var MAX_N_MESSAGES=100;
		var self = this;
		var send = params.send;
		var getUserMe = params.getUserMe;
		var getUserById = params.getUserById;
		var getNDevice = params.getNDevice;
		var getSessionId = params.getSessionId;
		var showUsersSearch = params.showUsersSearch;
		var emoticonsParser = params.emoticonsParser;
		var name = params.name;
		var id = params.id;
		var isPm = params.isPm;
		var userTo = params.userTo;
		var videoFeedPm;
		if(isPm){
			videoFeedPm = new VideoFeedPm({userTo:userTo, getSessionId:getSessionId, send:send});
			this.videoOffer = videoFeedPm.incomingOffer;
			this.videoAccept = videoFeedPm.incomingAccept;
			this.videoIceCandidate = videoFeedPm.incomingIceCandidate;
		}
		var ignoreManager = params.ignoreManager;
		var clickMenuUser =params.clickMenuUser;
		var users = new Users({getUserById:getUserById});
		var usersMenu = new UsersMenu({name:params.isPm?'PM with '+params.userTo.getUsername():name+' Users', users:users, id:id, ignoreManager:ignoreManager, clickMenu:clickMenuUser, getUserMe:getUserMe, showUsersSearch:showUsersSearch});
		var buttonSend = new Button({className:'button-send', text:'Send'});
		var buttonEmoticons = new Button({className:'button-emoticons'});
		var buttonExit = new Button({className:'button-exit'});
		var buttonClose = new Button({className:'button-close'});
		var buttonVideoPmStart = isPm?new VideoButton({className:'button-video-pm-start'}):undefined;
		var spinner = new Spinner({});
		spinner.show();
		var ui = new UI({buttonSend:buttonSend, buttonEmoticons:buttonEmoticons, buttonExit:buttonExit, buttonClose:buttonClose,
		buttonVideoPmStart:buttonVideoPmStart, spinner:spinner, videoFeed:videoFeedPm, addMessage:addMessage,
		videoPmOfferRejected:dispatchVideoPmOfferRejected});
		var messages = new Messages({getUserId:getUserIdMe, element:ui.getFeed(), maxNMessages:MAX_N_MESSAGES, ignoreManager:ignoreManager, getNDevice:getNDevice});
		users.addEventListener('missingusers',self.dispatchEvent);
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.getUsersMenu = function(){return usersMenu;};
		this.getUserTo = function(){return params.userTo;};
		this.isPm=function(){return isPm;};
		this.incomingMessage = function(jObjectMessage){
			var scroll = ui.feedIsAtBottom();
			incomingMessage(jObjectMessage);
			if(scroll)
				ui.scrollFeedToBottom();
		};
		this.incomingMessages=function(jArrayMessages){
			var scroll = ui.feedIsAtBottom();
			each(jArrayMessages, function(jObjectMessage){
				incomingMessage(jObjectMessage);
			});
			if(scroll)
				ui.scrollFeedToBottom();
			spinner.hide();
		};
		messages.addEventListener('showpm', function(e){self.dispatchEvent(e);});
		
		this.join=function(user){
			if(users.contains(user))return;
			users.add(user);
		};
		this.leave = function(user){
			if(!users.contains(user))return;
			users.remove(user);
		};
		this.close = close;
		this.getUsers = function(){return users;};
		this.getElement = ui.getElement;
		this.setVisible = function(value){
			var visible = ui.getVisible();
			if(!visible&&value)
				usersMenu.show();
			else
				if(visible&&!value)
					usersMenu.hide();
			ui.setVisible(value);
			if(value)
				new Task(function(){
				ui.resize();
				ui.scrollFeedToBottom();
				}).run();
		};
		this.getVisible = ui.getVisible;
		this.videoOfferFail = function(msg){
			videoFeedPm.stop();
			Dialog.show({message:'Starting video chat with '+userTo.getUsername()+" failed as they are offline!",
			buttons:[{text:'OK'}]});
		};
		this.videoOfferRejected = function(msg){
			videoFeedPm.stop();
			Dialog.show({message:msg.reason,
			buttons:[{text:'OK'}]});
		};
		this.resize=ui.resize;
		buttonSend.addEventListener('click', sendMessage);
		buttonEmoticons.addEventListener('click', dispatchShowEmoticons);
		buttonClose.addEventListener('click', close);
		buttonExit.addEventListener('click', exit);
		if(buttonVideoPmStart)
			buttonVideoPmStart.addEventListener('click', startVideoPm);
		ui.addEventListener('keypress',keyPressed);
		new Task(load).run();
		function load(){
			dipatchGetMessages();
			dispatchGetUserIds();
			if(self.isPm()){
				users.add(params.userTo);
				users.add(getUserMe());
			}
		}
		function incomingMessage(jObjectMessage){
			jObjectMessage.emoticonsParser=emoticonsParser;
			jObjectMessage.clickMenuUser = clickMenuUser;
			jObjectMessage.ignoreManager = ignoreManager;
			jObjectMessage.getUserMe=getUserMe;
			messages.addReceived(Message.fromJSON(jObjectMessage));
		}
		function addMessage(message){
			var scroll = ui.feedIsAtBottom();
			messages.add(message);
			if(scroll)
				ui.scrollFeedToBottom();
		}
		function startVideoPm(){
			videoFeedPm.start();
		}
		function dispose(){
			messages.dispose();
		}
		function exit(){
			dispatchHide();
		}
		function close(){
			dispose();
			dispatchDispose();
		}
		function dispatchHide(){
			self.dispatchEvent({type:'hide', room:self});
		}
		function dipatchGetMessages(){
			self.dispatchEvent(!self.isPm()?{type:'getmessages', roomId:id}:{type:'getpms', userToId:self.getUserTo().getId()});
		}
		function dispatchGetUserIds(){
			self.dispatchEvent({type:'getuserids', roomId:id});
		}
		function sendMessage(){
			var text = ui.getTextValue();
			if(text=='')return;
			var userMe = getUserMe();
			var messageSending = Message.fromTypedString({str:text, userId:userMe.getId(), username:userMe.getUsername(), uniqueId:messages.nextUniqueId() 
			, emoticonsParser:emoticonsParser, pending:true, clickMenuUser:clickMenuUser, getUserMe:getUserMe, image:userMe.getImage()});
			console.log(messageSending);
			dispatchSendMessage(messageSending);
			messages.addSending(messageSending);
			ui.clearText();
			ui.scrollFeedToBottom();
		}
		function dispatchShowEmoticons(){
			self.dispatchEvent({type:'showemoticons',picked:callbackPicked});
		}
		function dispatchSendMessage(message){
			self.dispatchEvent(!self.isPm()?{type:'sendmessage',message:message, roomId:id}:{type:'sendpm', userToId:self.getUserTo().getId(), message:message});
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', room:self});
		}
		function getUserIdMe(){
			var user = getUserMe();
			if(user)
				return user.getId();
		}
		function callbackPicked(emoticonInfo){
			ui.insertIntoTextAtCurrentIndex(emoticonInfo.getStringRepresentation());
		}
		function keyPressed(e){
			var keyCode = e.keyCode;
			if (keyCode == '13'){
				sendMessage();
			  return false;
			}
		}
		function dispatchVideoPmOfferRejected(e){
			console.log(e);
			self.dispatchEvent({type:'videopmofferrejected', userToId:userTo.getId(), reason:e.reason});
		}
		
	};
	return _Room;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var visible = false;
		var buttonSend = params.buttonSend;
		var buttonExit = params.buttonExit;
		var buttonEmoticons = params.buttonEmoticons;
		var buttonClose = params.buttonClose;
		var buttonVideoPmStart = params.buttonVideoPmStart;
		var addMessage = params.addMessage;
		var videoFeed = params.videoFeed;
		var videoPmOfferRejected = params.videoPmOfferRejected;
		var spinner = params.spinner;
		var element = E.DIV();
		element.classList.add('room');
		var top = E.DIV();
		top.classList.add('top');
		var bottom = E.DIV();
		bottom.classList.add('bottom');
		var feed = E.DIV();
		feed.classList.add('feed');
		var menu = E.DIV();
		menu.classList.add('menu');
		var text = E.TEXT();
		text.classList.add('text');
		var splitPane;
		var splitPanePanelVideoFeed;
		if(videoFeed){
			var videoFeedUI = new VideoFeedUI(videoFeed);
			splitPane = new SplitPane({nPanelsWidth:1, nPanelsHeight:2, rowProfiles:[{height:'200px'}]});
			var videoFeedPanel = splitPane.getPanelXY(0, 0).getElement();
			splitPanePanelVideoFeed=splitPane.getPanelRow(0);
			videoFeedPanel.classList.add('video-feed-panel');
			videoFeedPanel.appendChild(videoFeedUI.getElement());
			top.appendChild(splitPane.getElement());
			splitPane.getPanelXY(0, 1).getElement().appendChild(feed);
			hideVideoFeed();
			new Task(splitPane.resize).run();
			videoFeedUI.addEventListener('show', showVideoFeed);
			videoFeedUI.addEventListener('hide', hideVideoFeed);
			videoFeedUI.addEventListener('showmessagetouser', onShowMessageToUser);
			videoFeedUI.addEventListener('offerrejected', videoPmOfferRejected);
		}
		else{
			top.appendChild(feed);
		}
		element.appendChild(top);
		element.appendChild(bottom);
		element.appendChild(spinner.getElement());
		bottom.appendChild(text);
		bottom.appendChild(menu);
		menu.appendChild(buttonEmoticons.getElement());
		menu.appendChild(buttonSend.getElement());
		menu.appendChild(buttonExit.getElement());
		menu.appendChild(buttonClose.getElement());
		if(buttonVideoPmStart)
			menu.appendChild(buttonVideoPmStart.getElement());
		text.addEventListener('keypress',dispatchKeyPress);
		this.getElement = function(){
			return element;
		};
		this.getFeed= function(){return feed;};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
		this.getTextValue= function(){return text.value;};
		this.addMessage = function(message){
			feed.appendChild(message.getElement());
		};
		this.removeMessage = function(message){
			feed.removeChild(message.getElement());
		};
		this.insertIntoTextAtCurrentIndex = function(str){
			var selectionStart=text.selectionStart;
			if(!str)return;
			if(selectionStart==undefined){
				text.value+=str;
			}
			else {
				var newIndex = selectionStart+str.length;
				text.value=text.value.splice(selectionStart, 0, str);
				text.selectionStart=text.selectionEnd = newIndex;
			}
			text.focus();
			
		};
	    this.clearText = function(){text.value='';};
		this.scrollFeedToBottom = function(){
			feed.scrollTop = feed.scrollHeight;
		};
		this.feedIsAtBottom = function(){
			return feed.scrollTop >= (feed.scrollHeight - feed.offsetHeight)-10;
		};
		this.resize = resize;
		function dispatchKeyPress(e){
			if (!e) e = window.events
			self.dispatchEvent({type:'keypress', keyCode:e.keyCode||e.which});
		}
		function resize(){
			console.log('Room.UI.resize');
			splitPane&&splitPane.resize();
		}
		function showVideoFeed(value){
			buttonVideoPmStart.setOn(true);
			splitPanePanelVideoFeed.setVisible(true);
		}
		function hideVideoFeed(){
			buttonVideoPmStart.setOn(false);
			splitPanePanelVideoFeed.setVisible(false);
		}
		function onShowMessageToUser(e){
			var message = Message.error({message:e.message});
			addMessage(message);
		}
	}
})();var SeenNotificationsManager = new (function () {
    var _SeenNotificationsManager = function (params) {
        var self = this;
		var getSessionId = params.getSessionId;
		var mysocket = params.mysocket;
		var temporalCallback = new TemporalCallback({delay:4000, callback:send, maxNTriggers:5,maxTotalDelay:15000});
		var seenPmNotificationUserIds=[];
		this.seen=function(notification){
			var seenPmUserId = notification.getId();
			if(seenPmNotificationUserIds.indexOf(seenPmUserId)<0)
				seenPmNotificationUserIds.push(seenPmUserId);
			temporalCallback.trigger();
		};
		function send(){
			console.log('sending seen notifications');
			mysocket.send({type:'seen_notifications', seenPmNotificationUserIds:seenPmNotificationUserIds, sessionId:getSessionId()});
			list=[];
		}
    };
    return _SeenNotificationsManager;
})();var NotificationsButton = (function(){
	var _NotificationsButton = function(params){
		var self = new Button({classNames:['button-notifications']});
		var notifications = params.notifications;
		var ui = new UI({button:self});
		notifications.addEventListener('added', countChanged);
		notifications.addEventListener('removed', countChanged);
		countChanged();
		function countChanged(){
			ui.setCount(notifications.getCount());
		}
		return self;
	};
	return _NotificationsButton;
	function UI(params){
		var element = params.button.getElement();
		var count = E.DIV();
		var text = E.DIV();
		count.appendChild(text);
		count.classList.add('count');
		text.classList.add('text');
		element.appendChild(count);
		this.setCount = function(value){
			text.innerHTML = value>9?'!':String(value);
		};
	}
})();var Notification = (function(){
	var PM='pm';
	var _Notification = function(params){
		console.log(params);
		EventEnabledBuilder(this);
		var self = this;
		this.getNotificationType= function(){return params.notificationType;};
		this.getIsPm= function(){return self.getNotificationType()==PM;};
		this.getUsername = function(){return params.username;};
		this.getImage = function(){return params.image;};
		this.getId = function(){return params.id;};
		this.seen = dispatchSeen;
		function dispatchSeen(){
			self.dispatchEvent({type:'seen', notification:self});
		}
	};
	_Notification.PM= PM;
	_Notification.pmNotificationFromJSON = function(jObject){
		return new _Notification({notificationType : PM, username:jObject.username, id:jObject.userId});
	};
	return _Notification;
})();var Notifications = (function(){
	var _Notifications = function(){
		EventEnabledBuilder(this);
		var set = new Set({getEntryId:getEntryId});
		var self = this;
		this.add = function(notification){
			if(!set.add(notification))return;
			dispatchAdded(notification);
		};
		this.remove = function(notification){
			if(!set.remove(notification))return;
			dispatchRemoved(notification);
		};
		this.removeById = function(id){
			 var notification = set.getById(id);
			 if(!notification)return;
			 set.remove(notification);
			 dispatchRemoved(notification);
		}
		this.clear = function(){
			var list = set.getEntries().slice();
			each(list, self.remove);
		};
		this.getById = set.getById;
		this.getCount = set.count;
		function getEntryId(notification){
			return notification.getId();
		}
		function dispatchAdded(notification){
			self.dispatchEvent({type:'added', notification:notification});
		}
		function dispatchRemoved(notification){
			self.dispatchEvent({type:'removed', notification:notification});
		}
	};
	return _Notifications;
})();var NotificationEntry = (function(){
	var _NotificationEntry = function(notification){
		EventEnabledBuilder(this);
		var self = this;
		var isPm = notification.getIsPm();
		var buttonClose = new Button({className:'button-close', preventPropagation:true});
		var userImage = new UserImage({userId:notification.getId(), username:notification.getUsername()});
		var ui = new UI({userImage:userImage, buttonClose:buttonClose, text:'PM from '+notification.getUsername(), isPm:isPm, userId:isPm?notification.getId():undefined});
		this.getElement = ui.getElement;
		this.getId = notification.getId;
		this.parentWidth=ui.parentWidth;
		if(!isPm)return;
		ui.addEventListener('click', dispatchShowPm);
		buttonClose.addEventListener('click', dispatchDispose);
		function dispatchShowPm(){
			self.dispatchEvent({type:'showpm', user:User.fromPmNotification(notification), isNotification:true});
			notification.seen();
			dispatchDispose();
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', notification:notification});
		}
	};
	return _NotificationEntry;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var userImage = params.userImage;
		var buttonClose = params.buttonClose;
		var userId = params.userId;
		var text= params.text;
		var element = E.DIV();
		element.classList.add('notification-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var onlineIndicatorUI = new OnlineIndicatorUI(OnlineIndicators.get(userId));
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		inner.appendChild(buttonClose.getElement());
		inner.appendChild(onlineIndicatorUI.getElement());
		username.innerHTML=text;
		this.getElement=function(){return element;};
		this.parentWidth = function(clientWidth){
			if(clientWidth<200){
				element.style.width='100%';
				return;
			}
			if(clientWidth<=400)
			{
				element.style.width = '50%';
				return;
			}
			if(clientWidth<= 600){
				element.style.width = '33.3%';
				return;
			}
			element.style.width = '25%';
		};
		inner.addEventListener('click', dispatchClick);
		function dispatchClick(){
			self.dispatchEvent({type:'click'});
		}
	}
})();var NotificationsMenu = (function(){
	var _NotificationsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var notifications = params.notifications;
		var pms = params.pms;
		var seenNotificationsManager = params.seenNotificationsManager;
		var popup = new Popup({});
		var buttonClose = new Button({className:'button-close'});
		var ui = new UI({popup:popup, buttonClose:buttonClose, getEntries:getEntries});
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntries()});
		this.show = ui.show;
		this.getElement = ui.getElement
		buttonClose.addEventListener('click', popup.hide);
		notifications.addEventListener('added', added);
		notifications.addEventListener('removed', removed);
		pms.addEventListener('showingpm', showingPm);
		function getEntries(){
			return sortedFilteredEntries.getEntries();
		}
		function showingPm(e){
			var userId = e.user.getId();
			var notification = notifications.getById(userId);
			if(!notification)return;
			notifications.remove(notification);
			seenNotificationsManager.seen(notification);
		}
		function added(e){
			var notification = e.notification;
			notification.addEventListener('seen', seen);
			var notificationEntry = new NotificationEntry(notification);
			notificationEntry.addEventListener('showpm', showPm);
			notificationEntry.addEventListener('dispose', dispose);
			sortedFilteredEntries.addEntry(notificationEntry);
		}
		function showPm(e){
			self.dispatchEvent(e);
			if(popup)popup.hide();
		}
		function seen(e){
			seenNotificationsManager.seen(e.notification);
		}
		function removed(e){
			console.log(e);
			var notification = e.notification;
			sortedFilteredEntries.removeEntryById(notification.getId());
		}
		function compare(notificationEntryA, notificationEntryB){
			
		}
		function getEntryId(notificationEntry){
			return notificationEntry.getId();
		}
		function dispose(e){
			notifications.remove(e.notification);
		}
	};
	return _NotificationsMenu;
	function UI(params){
		var popup = params.popup;
		var buttonClose = params.buttonClose;
		var element = popup.getElement();
		var getEntries = params.getEntries;
		element.classList.add('notifications-menu');
		var entries = E.DIV();
		var entriesWrapper = E.DIV();
		var heading = new Heading({title:'&nbsp;PM Notifications'});
		var headingWrapper = E.DIV();
		var inner = E.DIV();
		inner.classList.add('notifications-menu-inner');
		entries.classList.add('entries');
		entriesWrapper.classList.add('entries-wrapper');
		headingWrapper.classList.add('heading-wrapper');
		
		
		heading.getEntries().appendChild(buttonClose.getElement());
		
		headingWrapper.appendChild(heading.getElement());
		
		inner.appendChild(headingWrapper);
		inner.appendChild(entriesWrapper);
		entriesWrapper.appendChild(entries); 
		element.appendChild(inner);
		
		
		this.show = function(){
			popup.show();
			resized();
		};
		function resized(){
			var clientWidth = entries.clientWidth;
			each(getEntries(), function(notificationEntry){
				console.log(notificationEntry);
				notificationEntry.parentWidth(clientWidth);
			});
		}
		this.addEntry = function(entry){
			entries.appendChild(entry.getElement());
		};
		this.removeEntry = function(){
			entries.removeChild(entry.getElement());
		};
		this.getElement = function(){return element;};
		this.getEntries = function(){return entries;};
		resizeWatched = ResizeManager.add({element:element, onResized:resized, staggered:true});
		resizeWatched.manual(true);
	}
})();var MessageComponents = new (function(){
	var EMOTICON ='emoticon';
	var TEXT='text';
	this.Text=function(str){
		this.getString=function(){
			return str;
		};
		this.getElement=function(){
			return document.createTextNode(str);
		};
		this.TYPE=TEXT;
	};
	this.Text.TYPE = TEXT;
	this.Emoticon = function(emoticonInfo){
		this.getElement= function(){
			if(emoticonInfo.isCharacter())
			return document.createTextNode(emoticonInfo.getStringRepresentation());
			var img = E.IMG();
			img.classList.add('emoticon');
			img.src=emoticonInfo.getImageSource();
			return img;
		};
		this.TYPE=EMOTICON;
	};
	this.Emoticon.TYPE=EMOTICON;
})();function MessageUI(params){
	EventEnabledBuilder(this);
	var self = this;
	var components = params.components;
	var name = params.username;
	var userImage = params.userImage;
	var sentAt = params.sentAt;
	var messageType = params.messageType;
	var element = E.DIV();
	element.classList.add('message');
	var inner = E.DIV();
	inner.classList.add('inner');
	var usernameAndTimestamp = E.DIV();
	usernameAndTimestamp.classList.add('username-and-timestamp');
	var username = E.DIV();
	username.classList.add('username');
	var pending;
	if(params.pending){
		pending = E.DIV();
		pending.classList.add('pending');
		element.appendChild(pending);
	}
	usernameAndTimestamp.appendChild(username);
	var timestamp = E.DIV();
	timestamp.classList.add('timestamp');
	usernameAndTimestamp.appendChild(timestamp);
	switch(messageType){
		case Message.ERROR:
			element.classList.add('error');
			timestamp .innerHTML=' ('+getFormattedDateTime(new Date())+')';
		break;
		default:
		inner.appendChild(userImage.getElement());
		username.innerHTML += (name&&name.length>0?name:'&nbsp;');
		if(sentAt){
			timestamp .innerHTML=' ('+getFormattedDateTime(sentAt)+')';
		}
		break;
	}
	inner.appendChild(usernameAndTimestamp);
	each(components, function(component){
		inner.appendChild(component.getElement());
	});
	element.appendChild(inner);
	this.getElement = function(){return element;};
	this.getUsername = function(){return usernameAndTimestamp;};
	this.setVisible=function(value){element.style.display=value?'inline-block':'none';};
	this.hidePending = function(){
		if(pending){element.removeChild(pending);}
	};
	username.addEventListener('click', dispatchShowUserMenu);
	function dispatchShowUserMenu(e){
		self.dispatchEvent({type:'showusermenu', left:e.clientX, top:e.clientY});
	}
	function getFormattedDateTime(sentAt){
		var sentAtLocal = moment.utc(sentAt).local();
		var now = moment();
		var duration = moment.duration(now.diff(sentAtLocal));
		var midnight = moment().startOf('day');
		var time = sentAtLocal.format('HH:mm:ss');
		var sentToday = sentAtLocal.diff(midnight, 'seconds')>=0?true:false;
		if(sentToday){
			return time;
		}
		var secondsToMidnightSinceSent = midnight.diff(sentAtLocal,'seconds');
		if(secondsToMidnightSinceSent<604800){//seven days since midnight ( can include the day with same name as today!!
			var dayAndTime=sentAtLocal.format('dddd')+' at '+time;
			if(secondsToMidnightSinceSent<518400)//six days since midnight
				return dayAndTime;
			return 'last '+dayAndTime;
		}
		var sentThisYear = sentAtLocal.isSame(new Date(), 'year');
		var dayAndMonth =sentAtLocal.format('Do')+' '+sentAtLocal.format('MMMM');
		if(sentThisYear){
			return dayAndMonth;
		}
		return dayAndMonth+' '+sentAtLocal.year();
	}
}var Message = (function(){
	var ERROR='error';
	var USER='user';
	var _Message = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var userId = params.userId;
		var username = params.username;
		var components = params.components;
		var content = params.content;
		var clickMenuUser=params.clickMenuUser;
		var userImage = new UserImage({userId:userId, image:params.image});
		var ignoreManager = params.ignoreManager;
		var getUserMe = params.getUserMe;
		var messageType=params.messageType?params.messageType:USER;
		var ignored=false;
		var ui;
		this.getElement = function(){
			return getUI().getElement();
		};
		this.getUniqueId = function(){
			return params.uniqueId;
		};
		this.getImage = function(){return params.image;};
		this.getUserId=function(){return params.userId;};
		this.getUsername=function(){return params.username;};
		this.getSentAtUTC = function(){return params.sentAt?moment(params.sentAt):undefined;};
		this.getServerAssignedNMessage = function(){
			return params.serverAssignedNMessage;
		};
		this.getMessageType= function(){
			return messageType;
		};
		this.confirm = function(receivedMessage){
			params.serverAssignedNMessage = receivedMessage.getServerAssignedNMessage();
			getUI().hidePending();
			
		};
		this.toJSON = function(){
			return {content:content, userId:userId, uniqueId:params.uniqueId};
		};
		this.dispose = function(){
			userImage.dispose();
		};
		this.setIgnored=function(value){
			ignored = value;
			updateVisibility();
		};
		this.getIgnored = function(){return ignored;};
		function getUI(){
			if(!ui){
				ui = new MessageUI({userImage:userImage, components:components, username:username, pending:params.pending, sentAt:self.getSentAtUTC(), messageType:messageType});
				ui.addEventListener('showusermenu', showUserMenu);
			}
			return ui;
		}
		function updateVisibility(){
			getUI().setVisible(!ignored);
		}
		function showUserMenu(e){
			if(userId==getUserMe().getId())return;
			clickMenuUser.setPosition(e);
			clickMenuUser.show({options:[{text:'Pm '+username, callback:pm}, {text:(ignored?'Unignore ':'Ignore ')+username, callback:ignored?unignore:ignore}]});
		}
		function pm(){
			self.dispatchEvent({type:'showpm', user:User.fromMessage(self)});
		}
		function ignore(){
			ignoreManager.ignoreUserByIdAndUsername({id:userId, username:username});
		}
		function unignore(){
			ignoreManager.unignoreUserById(userId);
		}
	};
	_Message.ERROR=ERROR;
	_Message.USER=USER;
	_Message.fromJSON = function(params){
		console.log(params);
		return _from(params, params.content);
	}
	_Message.fromTypedString= function(params){
		params.sentAt=moment().format();
		return _from(params, params.str);
	};
	_Message.error = function(params){
		params.messageType=ERROR;
		return _from(params, params.message);
	};
	function _from(params, content){
		if(!content)content='';
		var emoticonsParser = params.emoticonsParser;
		var components =[] ;
		var text = new MessageComponents.Text(content)
		if(emoticonsParser){
			emoticonsParser.pipe(text,	
			function(component){  components.push(component);});
		}
		else
			components=[text];
		return new Message({userId:params.userId, username:params.username, uniqueId:params.uniqueId, components:components, content:content,
		serverAssignedNMessage:params.serverAssignedNMessage, pending:params.pending, clickMenuUser:params.clickMenuUser,
		ignoreManager:params.ignoreManager,getUserMe:params.getUserMe,image:params.image, sentAt:params.sentAt, messageType:params.messageType});
	}
	function generatecontentFromMessageComponents(components){
		var list =[];
		each(components, function(component){
			list.push(component.getElement());
		});
		return list;
	}
	return _Message;
})();var Messages = new (function(){
	var uniqueIdCount=0;
	var _Messages = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getUserId = params.getUserId;
		var getNDevice = params.getNDevice;
		var ignoreManager = params.ignoreManager;
		var element = params.element;
		var maxNMessages = params.maxNMessages;
		var messages=[];
		var mapUniqueIdToMessage={};
		var overflowManager = new OverflowManager({getMessages:getMessages, remove:remove, maxNMessages:maxNMessages});
		this.addSending = function(message){
			append(message);
			overflow();
		};
		this.addReceived=function(message){
			var mappedMessage = mapUniqueIdToMessage[message.getUniqueId()];
			if(mappedMessage){
				mappedMessage.confirm(message);
			}
			else{
				mapUniqueIdToMessage[message.getUniqueId()]=message;
				insertInPlace(message);
			}
			if(ignoreManager.userIdIsIgnored(message.getUserId()))
				message.setIgnored(true);
			overflow();
		};
		this.add= function(message){
				mapUniqueIdToMessage[message.getUniqueId()]=message;
				append(message);
		};
		this.remove = function(message){
			remove(message);
		};
		this.nextUniqueId=function(){
			return getNDevice()+'_'+uniqueIdCount++;
		};
		this.dispose = function(){
			each(messages, function(message){
				message.dispose();
			});
			ignoreManager.removeEventListener('ignored', ignored);
			ignoreManager.removeEventListener('unignored', unignored);
		};
		ignoreManager.addEventListener('ignored', ignored);
		ignoreManager.addEventListener('unignored', unignored);
		function insertInPlace(message){
			addEventListener(message);
			if(messages.length<1)
			{
				messages.push(message);
				element.appendChild(message.getElement());
				return;
			}
			var serverAssignedNMessage = message.getServerAssignedNMessage();
			var reverseIterator = new ReverseIterator(messages);
			while(reverseIterator.hasNext()){
				var placedMessage = reverseIterator.next();
				if(placedMessage.getServerAssignedNMessage()<serverAssignedNMessage){
					if(reverseIterator.hasPrevious())
					{
						var nextSibling = reverseIterator.previous().getElement().nextSibling;
						if(nextSibling){
							element.insertBefore(message.getElement(), nextSibling);
							reverseIterator.insertAfter(message);
							return;
						}
					}
					element.appendChild(message.getElement());
					reverseIterator.append(message);
					return;
				}
			}
			element.insertBefore(message.getElement(), messages[0].getElement());
			reverseIterator.insert(message);
		}
		function append(message){
			addEventListener(message);
			messages.push(message);
			mapUniqueIdToMessage[message.getUniqueId()]=message;
			element.appendChild(message.getElement());
		}
		function addEventListener(message){
			message.addEventListener('showpm', showPm);
		}
		function overflow(){
			overflowManager.trigger();
		}
		function getMessages(){return messages;}
		function remove(message){
			var index = messages.indexOf(message);
			if(index<0)return;
			messages.splice(index, 1);
			delete mapUniqueIdToMessage[message.getUniqueId()];
			element.removeChild(message.getElement());
			message.removeEventListener('showpm', showPm);
		}
		function showPm(e){self.dispatchEvent(e);}
		function ignored(e){
			messages.where(function(x){ return x.getUserId()==e.userId;}).each(function(x){ return x.setIgnored(true);});
		}
		function unignored(e){
			messages.where(function(x){ return x.getUserId()==e.userId;}).each(function(x){ return x.setIgnored(false);});
		}
	};
	return _Messages;
})();var EmoticonsLibrary = {
	defaultFolder:'/emoji/',
	folders:{folderName:'/path'},
	emoticons:[
		{
			strings:[':)','/smile',':smile:'],
			//folder:'folderName,
			file:'smile.png'
		},
		{
			strings:[':p',':P','/tongue',':tongue:'],
			//character:'??',
			file:'stuck_out_tongue.png'
		},
		{
			strings:[':D',':d','/grin',':grin:'],
			//character:'😀',
			file:'grinning.png'
		},
		{
			strings:['/kiss',':kiss:',':*',':-*'],
			//character:'😘',
			file:'kissing_heart.png'
		},
		{
			strings:[':cry:',':\'',':,('],
			file:'cry.png'
		},
		{
			strings:['/shocked',':shocked:','anguished,',':O',':O'],
			file:'anguished.png'
		},
		{
			strings:['/blush',':blush:'],
			file:'blush.png'
		},
		{
			strings:['/speachless', '/shocked', ':speachless:',':shocked:',':O',':o'],
			file:'open_mouth.png'
		},
		{
			strings:['/laugh',':laugh:'],
			file:'laughing.png'
		},
		{
			strings:['/angry',':angry:'],
			file:'angry.png'
		},
		{
			strings:['/anguished',':anguished:'],
			file:'anguished.png'
		},
		{
			strings:['/disappointed',':disappointed:'],
			file:'disappointed.png'
		},
		{
			strings:['/frowning',':frowning:'],
			file:'frowning.png'
		},
		{
			strings:['/heart eyes',':heart eyes:'],
			file:'heart_eyes.png'
		},
		{
			strings:['/innocent eyes',':innocent:'],
			file:'innocent.png'
		},
		{
			strings:['/laughing',':laughing:'],
			file:'laughing.png'
		},
		{
			strings:['/mask',':mask:'],
			file:'mask.png'
		},
		{
			strings:['/neutral',':neutral:'],
			file:'neutral_face.png'
		},
		{
			strings:['/imp',':imp:'],
			file:'smiling_imp.png'
		},
		{
			strings:['/rage',':rage:'],
			file:'rage.png'
		},
		{
			strings:['/scream',':scream:'],
			file:'scream.png'
		},
		{
			strings:['/sleeping',':sleeping:'],
			file:'sleeping.png'
		},
		{
			strings:['/smirk',':smirk:'],
			file:'smirk.png'
		},
		{
			strings:['/sunglasses',':sunglasses:'],
			file:'sunglasses.png'
		},
		{
			strings:['/unamused',':unamused:'],
			file:'unamused.png'
		},
		{
			strings:['/wink',':wink:'],
			file:'wink.png'
		},
		{
			strings:['/yum',':yum:'],
			file:'yum.png'
		},
		{
			strings:[':/','/confused',':confused:'],
			file:'confused.png'
		},
		{
			strings:['/alien',':alien:'],
			file:'alien.png'
		},
		{
			strings:['/poop', ':poop:','/hankey',':hankey:'],
			file:'hankey.png'
		},
		{
			strings:['/heart',':heart:'],
			file:'heart.png'
		},
		{
			strings:['/broken heart',':broken heart:'],
			file:'broken_heart.png'
		},
		{
			strings:['/dog',':dog:'],
			file:'dog.png'
		},
		{
			strings:['/bear',':bear:'],
			file:'bear.png'
		},
		{
			strings:['/cat',':cat:'],
			file:'cat.png'
		},
		{
			strings:['/chick',':chick:'],
			file:'baby_chick.png'
		},
		{
			strings:['/chicken',':chicken:'],
			file:'chicken.png'
		},
		{
			strings:['/cow',':cow:'],
			file:'cow.png'
		},
		{
			strings:['/fish',':fish:'],
			file:'fish.png'
		},
		{
			strings:['/dolphin',':dolphin:'],
			file:'dolphin.png'
		},
		{
			strings:['/frog',':frog:'],
			file:'frog.png'
		},
		{
			strings:['/ghost',':ghost:'],
			file:'ghost.png'
		},
		{
			strings:['/hamster',':hamster:'],
			file:'hamster.png'
		},
		{
			strings:['/horse',':horse:'],
			file:'horse.png'
		},
		{
			strings:['/koala',':koala:'],
			file:'koala.png'
		},
		{
			strings:['/mouse',':mouse:'],
			file:'mouse.png'
		},
		{
			strings:['/penguin',':penguin:'],
			file:'penguin.png'
		},
		{
			strings:['/pig',':pig:'],
			file:'pig.png'
		},
		{
			strings:['/rabbit',':rabbit:'],
			file:'rabbit.png'
		},
		{
			strings:['/bear',':bear:'],
			file:'bear.png'
		},
		{
			strings:['/snake',':snake:'],
			file:'snake.png'
		},
		{
			strings:['/whale',':whale:'],
			file:'whale.png'
		},
		{
			strings:['/wolf',':wolf:'],
			file:'wolf.png'
		},
		{
			strings:['/cookie',':cookie:'],
			file:'cookie.png'
		},
		{
			strings:['/coffee',':coffee:'],
			file:'coffee.png'
		},
		{
			strings:['/banana',':banana:'],
			file:'banana.png'
		},
		{
			strings:['/bread',':bread:'],
			file:'bread.png'
		},
		{
			strings:['/cake',':cake:'],
			file:'cake.png'
		},
		{
			strings:['/chocolate',':chocolate:'],
			file:'chocolate_bar.png'
		},
		{
			strings:['/fries',':fries:'],
			file:'fries.png'
		},
		{
			strings:['/apple',':apple:'],
			file:'apple.png'
		},
		{
			strings:['/hamburger',':hamburger:'],
			file:'hamburger.png'
		},
		{
			strings:['/icecream',':icecream:'],
			file:'icecream.png'
		},
		{
			strings:['/lollipop',':lollipop:'],
			file:'lollipop.png'
		},
		{
			strings:['/strawberry',':strawberry:'],
			file:'strawberry.png'
		},
		{
			strings:['/watermelon',':watermelon:'],
			file:'watermelon.png'
		},
		{
			strings:['/wine',':wine:'],
			file:'wine_glass.png'
		},
		{
			strings:['/smoking',':smoking:'],
			file:'smoking.png'
		},
		{
			strings:['/uk',':uk:'],
			file:'uk.png'
		},
		{
			strings:['/us',':us:'],
			file:'us.png'
		},
		{
			strings:['/car',':car:'],
			file:'car.png'
		},
		{
			strings:['/train',':train:'],
			file:'steam_locomotive.png'
		},
		{
			strings:['/bus',':bus:'],
			file:'bus.png'
		},
		{
			strings:['/lorry',':lorry:'],
			file:'articulated_lorry.png'
		},
		{
			strings:['/taxi',':taxi:'],
			file:'taxi.png'
		},
		{
			strings:['/bank',':bank:'],
			file:'bank.png'
		},
		{
			strings:['/church',':church:'],
			file:'church.png'
		},
		{
			strings:['/hotel',':hotel:'],
			file:'hotel.png'
		},
		{
			strings:['/hospital',':hospital:'],
			file:'hospital.png'
		},
		{
			strings:['/convenience',':convenience:'],
			file:'convenience_store.png'
		},
		{
			strings:['/money',':money:'],
			file:'dollar.png'
		},
		{
			strings:['/pound',':pound:'],
			file:'pound.png'
		},
		{
			strings:['/moneybag',':moneybag:'],
			file:'moneybag.png'
		},
	]
};

/*
    {strings:[':snigger:']},character:''
      ':chuckle:']},character:''
    },

    {strings:[':laugh:']},character:''
      ':lol:']},character:''
    },

    {strings:[':sun:']},character:''
    },

    {strings:[':doubt:']},character:''
    },

    {strings:[':rara:']},character:''
    },

    {strings:['>:clap:']},character:''
    },

    {strings:[':present:']},character:''
      ':gift:']},character:''
    },

    {strings:[':angry:']},character:''
      ':snarl:']},character:''
    },

    {strings:[':mobile:']},character:''
      ':cell:']},character:''
      ':phone:']},character:''
    },

    {strings:[':brokenheart:']},character:''
      ':nolove:']},character:''
    },

    {strings:['&lt;3']},character:''
      ':heart:']},character:''
      ':love:']},character:''
    },

    {strings:[':drink:']},character:''
    },

    {strings:[':peace:']},character:''
    },

    {strings:[':wine:']},character:''
    },

    {strings:[':fedup:']},character:''
      ':bored:']},character:''
    },

    {strings:[':hide:']},character:''
      ':peak:']},character:''
    },

    {strings:[':cloud:']},character:''
      ':clouds:']},character:''
    },

    {strings:[':music:']},character:''
      ':notes:']},character:''
    },

    {strings:[':sitting:']},character:''
    },
    
    
    {strings:[':urinal:']},character:''
    },
    {strings:[':alien42:']},character:''
    },
    {strings:[':alien47:']},character:''
    },
    {strings:[':alien48:']},character:''
    },
    {strings:[':alien49:']},character:''
    },
    {strings:[':alien51:']},character:''
    },
    {strings:[':alien60:']},character:''
    },
    {strings:[':alien66:']},character:''
    },
    {strings:[':alien70:']},character:''
    },
    {strings:[':alien72:']},character:''
    },
    {strings:[':alien73:']},character:''
    },
    {strings:[':alien80:']},character:''
    },
    {strings:[':alien81:']},character:''
    },
    {strings:[':alien82:']},character:''
    },
    {strings:[':alien85:']},character:''
    },
    {strings:[':alien93:']},character:''
    },
    {strings:[':alien95:']},character:''
    },
    {strings:[':alien96:']},character:''
    }






	]
};*/function EmoticonInfo(params){
	var self = this;
	this.isCharacter = function(){
		return self.getCharacter()?true:false;
	};
	this.getCharacter = function(){return params.character;};
	this.getImageSource = function(){return params.imageSource;};
	this.getStringRepresentation = function(){
		if(self.isCharacter())
			return self.getCharacter();
		return params.strings[0];
	};
	
}var EmoticonsParser = (function(){
	var _EmoticonsParser = function(params){
		var emoticonsLibrary = params.emoticonsLibrary;
		var searchTree = {};
		populateSearchTree(emoticonsLibrary);
		this.pipe = function(component, callback){
			if(component.TYPE!=MessageComponents.Text.TYPE){callback(component);return;}
			var str = component.getString();
			var subTree = searchTree;
			var i={value:0};
			var length = str.length;
			var startIndex=0;
			while(i.value<length){
				var sub =searchTree[str[i.value]];
				if(sub){
					var matchStartIndex =i.value;
					var emoticonInfo = matching(i, length, str, sub);
					if(emoticonInfo){
						if(matchStartIndex>startIndex)
							callback(new MessageComponents.Text(str.substring(startIndex, matchStartIndex)));
						callback(new MessageComponents.Emoticon(emoticonInfo));
						startIndex=i.value;
					}
				}
				else 
					i.value++;
			}
			if(i.value>startIndex)
				callback(new MessageComponents.Text(str.substring(startIndex, i.value)));
		};
		function matching(i, length, str, sub){
			var latestMatch;
			while(true){
					i.value++;
					if(sub.emoticonInfo)latestMatch = sub.emoticonInfo;
					if(i>=length) return latestMatch;
					sub = sub[str[i.value]];
					if(!sub) return latestMatch;
			}
		}
		function populateSearchTree(emoticonsLibrary){
			each(emoticonsLibrary.emoticons, function(emoticon){
				var emoticonInfo = new EmoticonInfo(emoticon);
				if(emoticon.strings)
					each(emoticon.strings, function(str){
						createBranch(str, emoticonInfo);
					});
			});
		}
		function createBranch(str, emoticonInfo){
			if(str.length<1)return;//avoiding the potential for an emoticon coded for by an empty string.
			var subTree = searchTree;
			each(str, function(c){
				var existingSubTree = subTree[c];
				if(existingSubTree)subTree=existingSubTree;
				else{
					var newSubTree = {};
					subTree[c]=newSubTree;
					subTree=newSubTree;
				}
			});
			subTree.emoticonInfo = emoticonInfo;
		}
	}
	return _EmoticonsParser;
})();var EmoticonEntry = (function(){
	var _EmoticonEntry = function(params){
		var self = this;
		EventEnabledBuilder(this);
		var element = E.DIV();
		element.classList.add('emoticon-entry');
		var emoticonInfo = params.emoticonInfo;
		if(emoticonInfo.isCharacter())
		{
			element.innerHTML = emoticonInfo.getCharacter();
		}else{
			var imageComponent = new ImageComponent(emoticonInfo);
			element.appendChild(imageComponent.getElement());
		}
		element.addEventListener('click', dispatchSelected);
		this.getElement = function(){return element;};
		function dispatchSelected(){
			self.dispatchEvent({type:'selected', emoticonInfo:emoticonInfo});
		}
	};
	return _EmoticonEntry;
	function ImageComponent(emoticonInfo){
		var img = E.IMG();
		img.src= emoticonInfo.getImageSource();
		img.addEventListener('error', error);
		this.getElement = function(){return img;};
		function error(){
			img.style.display='none';
		}
	}
})();var Emoticons = (function(){
	var _Emoticons = function(params){
		var emoticonsLibrary = params.emoticonsLibrary;
		EventEnabledBuilder(this);
		var popup = new Popup();
		var ui = new UI({popup:popup});
		var callbackPicked;
		this.show = function(params){
			callbackPicked = params.picked;
			popup.show();
		};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		load();
		function selected(e){
			var emoticonInfo = e.emoticonInfo;
			if(callbackPicked)
				callbackPicked(emoticonInfo);
			popup.hide();
		}
		function load(){
			var folders = emoticonsLibrary.folders;
			var defaultFolder = emoticonsLibrary.defaultFolder;
			each(emoticonsLibrary.emoticons, function(emoticon){
				resolveImageSource(emoticon, folders, defaultFolder);
				var emoticonEntry = new EmoticonEntry({emoticonInfo:new EmoticonInfo(emoticon)});
				emoticonEntry.addEventListener('selected', selected);
				ui.addEntry(emoticonEntry);
			});
		}
		function resolveImageSource(emoticon, folders, defaultFolder){
			if(emoticon.character)return;
			var path = emoticon.folder&&folders?folders[emoticon.folder]:defaultFolder;
			path+=emoticon.file;
			emoticon.imageSource = path;
		}
	};
	return _Emoticons;
	function UI(params){
		var popup = params.popup;
		var element = popup.getElement();	
		element.classList.add('emoticons');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.addEntry = function(entry){
			entries.appendChild(entry.getElement());
		};
		this.getElement = function(){return element;};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
	}
})();var RoomsMenu = new (function(){
	var _RoomsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var showRoomsSearch = params.showRoomsSearch;
		var mapIdToRoomEntry={};
		var entries =[];
		var ui = new UI({entries:entries, showRoomsSearch:showRoomsSearch});
		var usersMenu = params.usersMenu;
		var spinner = new Spinner({});
		//spinner.show();
		this.getId =function(){return 'RoomsMenu';};
		this.set = function(roomInfos){
			//spinner.hide();
			var ids=[];
			each(roomInfos, function(roomInfo){
				var roomEntry = mapIdToRoomEntry[roomInfo.id];
				if(!roomEntry) roomEntry = add(roomInfo);
				ids.push(roomEntry.getId());
			});
			for(var id in mapIdToRoomEntry){
				if(ids.indexOf(id)<0)
				{
					remove(mapIdToRoomEntry[id]);
				}
			}
			ui.resize();
		};
		this.getName = function(){
			return 'roomsmenu';
		};
		this.getElement = ui.getElement;
		this.setVisible = function(value){
			
			var visible = ui.getVisible();
			if(!visible&&value)
				usersMenu.show();
			else
				if(visible&&!value)
					usersMenu.hide();
			ui.setVisible(value);
		};
		this.clear=function(){
			for(var id in mapIdToRoomEntry){
				remove(mapIdToRoomEntry[id]);
			}
		};
		this.getVisible = ui.getVisible;
		this.resize = ui.resize;
		function add(roomInfo){
			console.log('add');
			var roomEntry = new RoomEntry(roomInfo);
			entries.push(roomEntry);
			mapIdToRoomEntry[roomEntry.getId()]=roomEntry;
			ui.add(roomEntry.getElement());
			roomEntry.addEventListener('selected', selected);
			return roomEntry;
		}
		function remove(roomEntry){
			roomEntry.dispose();
			delete mapIdToRoomEntry[roomEntry.getId()];
			entries.splice(entries.indexOf(roomEntry), 1);
			ui.remove(roomEntry.getElement());
		}
		function selected(e){
			dispatchShowRoom(e.roomInfo);
		}
		function dispatchShowRoom(roomInfo){
			self.dispatchEvent({type:'showroom', roomInfo:roomInfo});
		}
	};
	return _RoomsMenu;
	function UI(params){
		var entries = params.entries;
		var showRoomsSearch= params.showRoomsSearch;
		var visible=false;
		var element = E.DIV();
		element.classList.add('rooms-menu');
		var buttonSearch = new Button({className:'button-search'});
		element.appendChild(buttonSearch.getElement());
		buttonSearch.addEventListener('click', showRoomsSearch);
		this.getElement = function(){
			return element;
		};
		this.add = function(entryElement){element.appendChild(entryElement);};
		this.remove = function(entryElement){element.removeChild(entryElement);};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
		this.resize = function(){
			var width= element.clientWidth;
			each(entries, function(entry){
				entry.parentWidth&&entry.parentWidth(width);
			});
		};
	}
})();var SearchBar = (function(){
	var _SearchBar = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var ui = new UI({callbackSearch:dispatchSearch});
		this.getElement = ui.getElement;
		var currentText;
		function dispatchSearch(text){
			self.dispatchEvent({type:'search', text:text});
		}
	};
	return _SearchBar;
	function UI(params){
		var self = this;
		var callbackSearch = params.callbackSearch;
		var temporalCallback = new TemporalCallback({
			callback:dispatchSearch,
			maxTotalDelay:1200,
			delay:400
		});
		var element = E.DIV();
		var inputWrapper = E.DIV();
		var buttonWrapper = E.DIV();
		var input =E.TEXT();
		var button = E.BUTTON();
		element.classList.add('search-bar');
		inputWrapper.classList.add('search-bar-text-wrapper');
		buttonWrapper.classList.add('search-bar-button-wrapper');
		input.classList.add('search-bar-text');
		button.classList.add('search-bar-button');
		element.appendChild(inputWrapper);
		element.appendChild(buttonWrapper);
		inputWrapper.appendChild(input);
		buttonWrapper.appendChild(button);
		this.getElement = function(){
			return element;
		};
		input.addEventListener('keydown', scheduleDispatchSearch);
		function scheduleDispatchSearch(){
			temporalCallback.trigger();
		}
		function dispatchSearch(){
			callbackSearch(input.value);
		}
	}
})();var RoomsSearch = (function(){
	var _RoomsSearch = function(){
		EventEnabledBuilder(this);
		var self = this;
		var standardSearch = new StandardSearch({title:'Rooms Search', getEntryId:getEntryId, callbackSearch:dispatchSearch, classNames:['rooms-search']	});
		var sortedFilteredEntries = new SortedFilteredEntries({element:standardSearch.getEntries(), getEntryId:getEntryId, compare:compare});
		this.show = standardSearch.show;
		this.incomingRooms = function(roomInfos){
			setRooms(roomInfos);
		};
		function setRooms(roomInfos){
			var ids=[];
			each(roomInfos, function(roomInfo){
				if(!sortedFilteredEntries.getByEntryId(roomInfo.id))
				{
					roomAdd(roomInfo);
				}
			});
			for(var id in sortedFilteredEntries.getEntries().slice()){
				if(ids.indexOf(id)<0)
				{
					roomRemove(id);
				}
			}
		}
		function getEntryId(roomEntry)
		{
			return roomEntry.getId();
		}
		function compare(roomEntryA, roomEntryB){
			return roomEntryA.getName()>roomEntryB.getName();
		}
		function roomAdd(roomInfo){
			var roomEntry = new RoomEntry(roomInfo)
			sortedFilteredEntries.addEntry(roomEntry);
			roomEntry.addEventListener('selected', selected);
			return roomEntry;
		}
		function roomRemove(id){
			var roomEntry = sortedFilteredEntries.getByEntryId(id);
			sortedFilteredEntries.removeEntry(roomEntry);
		}
		function selected(e){
			standardSearch.hide();
			dispatchShowRoom(e.roomInfo);
		}
		function dispatchShowRoom(roomInfo){
			self.dispatchEvent({type:'showroom', roomInfo:roomInfo});
		}
		function dispatchSearch(e){
			if(!e.text||e.text.length<1)return;
			self.dispatchEvent({type:'search', text:e.text});
		}
	};
	return _RoomsSearch;
})();
var UsersSearch = (function(){
	var _UsersSearch = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var clickMenu = params.clickMenu;
		var ignoreManager = params.ignoreManager;
		var getUserMe = params.getUserMe;
		var users = new Users({});
		var standardSearch = new StandardSearch({title:'Users Search', getEntryId:getEntryId, callbackSearch:dispatchSearch, classNames:['users-search']});
		var sortedFilteredEntries = new SortedFilteredEntries({element:standardSearch.getEntries(), getEntryId:getEntryId, compare:compare});
		this.show = standardSearch.show;
		this.incomingUsers = function(userInfos){
			setUsers(userInfos);
			standardSearch.hideSpinner();
		};
		users.addEventListener('add', userAdd);
		users.addEventListener('remove', userRemove);
		function compare(userEntryA, userEntryB){
			return userEntryA.getUsername()>userEntryB.getUsername();
		}
		function getEntryId(userEntry){
			return userEntry.getId();
		}
		function setUsers(userInfos){
			var idsShouldContain =[];
			each(userInfos, function(userInfo){
				idsShouldContain.push(userInfo.id);
				if(!users.getById(userInfo.id))
				{
					users.add(User.fromJSON(userInfo));
				}
			});
			each(users.getEntries().slice(), function(user){
				if(idsShouldContain.indexOf(user.getId())<0)
					users.remove(user);
			});
		}
		function userAdd(e){
			if(sortedFilteredEntries.getByEntryId(e.user.getId()))return;
			var userEntry = new UserEntry({user:e.user, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe});
			sortedFilteredEntries.addEntry(userEntry);
			userEntry.addEventListener('showpm', function(e){self.dispatchEvent(e);});
		}
		function userRemove(e){
			var userEntry = sortedFilteredEntries.getByEntryId(e.user.getId());
			userEntry.dispose();
			sortedFilteredEntries.removeEntry(userEntry);
		}
		function dispatchSearch(e){
			if(!e.text||e.text.length<1)return;
			self.dispatchEvent({type:'search', text:e.text});
			standardSearch.showSpinner();
		}
	};
	return _UsersSearch;
})();
var UserImage = new(function(){
	var LARGE='128_128';
	var SMALL='32_32';
	var SIZES=[SMALL, LARGE];
	var _UserImage = function(params){
		var userId = params.userId;
		var image = params.image;
		var size = params.size;
		size = defaultSize(size);	
		var connectedImage = new ConnectedImage({def:'/images/user-default.jpg', type:getType(size), id:userId, url:getUrl(image, size)});
		this.getElement = connectedImage.getElement;
		this.dispose = connectedImage.dispose;
	};
	_UserImage.LARGE=LARGE;
	_UserImage.SMALL=SMALL;
	_UserImage.SIZES=SIZES;
	_UserImage.update = function(userId, image){
		each(_UserImage.SIZES,function(size){
			update(userId, image, size);
		});
	};
	function update(userId, image, size){
		var url = getUrl(image, size);
		if(!url)return;
		ConnectedImage.update(getType(size), userId, url);
	}
	function getUrl(image, size){
		return image?'/images/uploaded/'+image+'_'+size+'.jpeg':undefined;
	}
	function getType(size){
		return User.TYPE+'_'+size;
	}
	function defaultSize(size){
		return size?size:SMALL;
	}
	return _UserImage;
})();var UserEntry =(function(){
	var _UserEntry = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var user = params.user;
		var getUserMe = params.getUserMe;
		var ignoreManager = params.ignoreManager;
		var clickMenu = params.clickMenu;
		var userImage = new UserImage({userId:user.getId(), username:user.getUsername()});
		var ui = new UI({name:user.getUsername(), userImage:userImage, userId:user.getId()});
		this.getElement = ui.getElement;
		this.getId = function(){return user.getId();};
		this.getUsername=user.getUsername;
		this.dispose = ui.dispose;
		ui.getElement().addEventListener('click', click);
		function click(e){
			clickMenu.setPosition({left:e.clientX, top:e.clientY});
			if(getUserMe()==user)return;
			var ignored = isIgnored();
			var username = user.getUsername();
			clickMenu.show({options:[{text:'Pm '+username, callback:pm}, {text:(ignored?'Unignore ':'Ignore ')+username, callback:ignored?unignore:ignore}]});
		}
		function pm(){
			self.dispatchEvent({type:'showpm', user:user});
		}
		function isIgnored(){
			return ignoreManager.userIsIgnored(user);
		}
		function ignore(){
			ignoreManager.ignoreUser(user);
		}
		function unignore(){
			ignoreManager.unignoreUser(user);
		}
	};
	_UserEntry.fromIgnored = function(ignored){
		return new _UserEntry(ignored);
	};
	return _UserEntry;
	function UI(params){
		var userImage = params.userImage;
		var userId = params.userId;
		var onlineIndicatorUI = new OnlineIndicatorUI(OnlineIndicators.get(userId));
		var element = E.DIV();
		element.classList.add('user-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		inner.appendChild(onlineIndicatorUI.getElement());
		element.title=params.name;	
		username.innerHTML=params.name;
		this.getElement=function(){return element;};
		this.dispose = function(){
			userImage.dispose();
			onlineIndicatorUI.dispose();
			console.log('disposed');
		};
	}
})();var UsersMenu =(function(){
	var _UsersMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var id = params.id;
		var showUsersSearch = params.showUsersSearch;
		var buttonClose;
		if(isMobile)
		{
			buttonClose = new Button({className:'button-close'});
			buttonClose.addEventListener('click', dispatchHidePopup);
		}
		var buttonSearch = new Button({className:'button-search'});
		var ui = new UI({name:params.name, buttonClose:buttonClose, buttonSearch:buttonSearch});
		var getUserMe = params.getUserMe;
		var users = params.users;
		var ignoreManager = params.ignoreManager;
		var clickMenu = params.clickMenu;
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntries(), buttonClose:buttonClose});
		var sortedFilteredEntriesIgnored = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntriesIgnored()});
		
		this.getElement = ui.getElement;
		this.getId = function(){return id;};
		users.addEventListener('add', userAdd);
		users.addEventListener('remove', userRemove);
		ignoreManager.addEventListener('ignored', callbackIgnoreAdd);
		ignoreManager.addEventListener('unignored', ignoreRemove);
		this.getVisible = ui.getVisible;
		this.setVisible = ui.setVisible;
		this.show = function(){
			self.dispatchEvent({type:'show', entry:self});
		};
		this.hide = function(){
			self.dispatchEvent({type:'hide', entry:self});
		};
		this.resize = ui.resize;
		this.dispose = ui.dispose;
		buttonSearch.addEventListener('click', showUsersSearch);
		loadIgnores();
		function dispatchHidePopup(){
			self.dispatchEvent({type:'hidepopup'});
		}

		function userAdd(e){
			if(sortedFilteredEntries.getByEntryId(e.user.getId()))return;
				var userEntry = new UserEntry({user:e.user, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe});
				sortedFilteredEntries.addEntry(userEntry);
			userEntry.addEventListener('showpm', function(e){
			console.log('a');self.dispatchEvent(e);});
		}
		function userRemove(e){
			var userEntry = sortedFilteredEntries.getByEntryId(e.user.getId());
			userEntry.dispose();
			sortedFilteredEntries.removeEntry(userEntry);
		}
		function callbackIgnoreAdd(e){
			ignoreAdd(e.ignored);
		}
		function ignoreRemove(e){
			sortedFilteredEntriesIgnored.removeEntryById(e.ignored.getId());
		}
		function compare(userEntryA, userEntryB){
			return userEntryA.getUsername()>userEntryB.getUsername();
		}
		function getEntryId(userEntry){
			return userEntry.getId();
		}
		function loadIgnores(){
			try{
			each(ignoreManager.getIgnores(), function(ignored){
				ignoreAdd(ignored);
			});
			}
			catch(ex){console.log(ex);
			ignoreManager.clearSave();}
		}
		function ignoreAdd(ignored){
			if(sortedFilteredEntriesIgnored.getByEntryId(ignored.getId()))return;
			sortedFilteredEntriesIgnored.addEntry(UserEntry.fromIgnored({user:ignored, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe}));
		}
	};
	return _UsersMenu;
	function UI(params){
		var buttonClose = params.buttonClose;
		var buttonSearch = params.buttonSearch;
		var visible=false;
		var element = E.DIV();
		var entries = E.DIV();
		var entriesWrapper = E.DIV();
		var headingWrapper = E.DIV();
		var entriesIgnored = E.DIV();
		var entriesIgnoredWrapper = E.DIV();
		var headingIgnoredWrapper = E.DIV();
		var splitPane = new SplitPane({nPanelsWidth:1, nPanelsHeight:2, rowProfiles:[{height:'70%',minHeight:'60px'}, {minMeight:'60px'}]});
		var top = splitPane.getPanelXY(0, 0).getElement();
		var bottom = splitPane.getPanelXY(0, 1).getElement();
		var heading = new Heading({title:'&nbsp;'+params.name});
		var headingIgnored = new Heading({title:'&nbsp;Ignored '});
		element.classList.add('users-menu');
		entries.classList.add('users-menu-entries');
		entriesIgnored.classList.add('users-menu-entries');
		
		
		headingWrapper.classList.add('heading-wrapper');
		entriesWrapper.classList.add('user-menu-entries-wrapper');
		headingIgnoredWrapper.classList.add('heading-wrapper');
		entriesIgnoredWrapper.classList.add('user-menu-entries-wrapper');
		headingWrapper.appendChild(heading.getElement());
		entriesWrapper.appendChild(entries);
		headingIgnoredWrapper.appendChild(headingIgnored.getElement());
		entriesIgnoredWrapper.appendChild(entriesIgnored);
		
		element.appendChild(splitPane.getElement());
		top.appendChild(headingWrapper);
		top.appendChild(entriesWrapper);
		bottom.appendChild(headingIgnoredWrapper);
		bottom.appendChild(entriesIgnoredWrapper);
		var headingEntries = heading.getEntries();
		headingEntries.appendChild(buttonSearch.getElement());
		if(buttonClose){
			headingEntries.appendChild(buttonClose.getElement());
		}
		
		
		this.getEntries = function(){return entries;};
		this.getEntriesIgnored = function(){return entriesIgnored;};
		
		this.getElement=function(){return element;};
		this.resize = splitPane.resize;
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
			new Task(splitPane.resize).run();	
		};
		this.getVisible = function(){return visible;};
	}
})();var UsersMenues = (function(){
	var _UsersMenues = function(){
		EventEnabledBuilder(this);
		var self = this;
		var popup;
		if(isMobile){
			popup = new Popup({});
		}
		var ui = new UI({popupElement:isMobile?popup.getElement():undefined, getTopEntry:getTopEntry});
		var overlappingEntries = new OverlappingEntries({element:ui.getEntries()});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.add=function(usersMenu){
			overlappingEntries.add(usersMenu);
			usersMenu.addEventListener('showpm',function(e){ return self.dispatchEvent(e);});
			usersMenu.addEventListener('show',show);
			usersMenu.addEventListener('hide',hide);
			if(isMobile)
				usersMenu.addEventListener('hidepopup', hidePopup);
		};
		this.remove=function(usersMenu){
			overlappingEntries.remove(usersMenu);
		};
		this.setUsers = function(usersMenu){
			overlappingEntries.set(usersMenu);
		};
		this.show = function(){
			popup.show();
			console.log(overlappingEntries.getTopEntry().getEntry());
			overlappingEntries.getTopEntry().getEntry().resize();
		};
		this.resize = ui.resize;
		function getTopEntry(){
			return overlappingEntries.getTopEntry();
		}
		function hidePopup(){
			popup.hide();
		}
		function hide(e){
			overlappingEntries.hide(e.entry);
		}
		function show(e){
			overlappingEntries.show(e.entry);
		}
	};
	return _UsersMenues;
	function UI(params){
		var element = params.popupElement;
		var getTopEntry = params.getTopEntry;
		if(!element) element = E.DIV();
		else document.body.appendChild(element);
		element.classList.add('users-menues');
		this.getElement=function(){return element;};
		this.getEntries = function(){return entries;};
		var entries = E.DIV();
		entries.classList.add('users-menues-entries');
		element.appendChild(entries);
		this.setVisible = function(value){
			entries.style.display=value?'block':'none';
		};
		this.resize = resize;
		function resize(){console.log('a');
			getTopEntry().getEntry().resize();
		}
	}
})();var FileUploader = (function(){
	var _FileUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var accept = params.accept;
		var button = new Button({className:'button'});
		var ui = new UI({accept:accept, button:button});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		ui.addEventListener('filechange', fileChange);
		function fileChange(e){
			console.log(e);
			var files = e.files;
			if(files.length<1)return;
			openFile(files[0]);
		}
		function openFile(file) {
			var input = file.target;
			var fileReader = new FileReader();
			fileReader.onload = function(){
				dispatchFile(fileReader.result, file);
			};
			fileReader.readAsDataURL(file);
			ui.clearFile();
		}
		function dispatchFile(dataUrl, file){
			self.dispatchEvent({type:'file', dataUrl:dataUrl, file:file});
		}
	};
	return _FileUploader;
	function UI(params){
		var self = this;
		var button = params.button;
		EventEnabledBuilder(this);
		var accept = params.accept;
		console.log(accept);
		var element = E.DIV();
		element.classList.add('file-uploader');
		var fileInput = E.FILE();
		fileInput.accept=accept;
		fileInput.type='file';
		element.appendChild(button.getElement());
		button.addEventListener('click', function(){fileInput.click();});
		this.getElement = function(){return element;};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		fileInput.addEventListener('change', dispatchFileChange);
		this.clearFile=function(){
			fileInput.value='';
		};
		function dispatchFileChange(e){
			self.dispatchEvent({type:'filechange', files:fileInput.files});
		}
	}
})();var TwoFingerTouch=(function(){
	var _TwoFingerTouch=function(params){
		var self = this;
		var element = params.element;
		var finger2Active=false;
		var finger1Active = false;
		var touch1;
		var touch2;
		var documentElement = document.documentElement;
		this.onStart=doNothing;
		this.onStartFinger1 = doNothing;
		this.onStartFinger2=doNothing;
		this.onMoveFinger1 = doNothing;
		this.onMoveFinger2 = doNothing;
		this.onEndFinger1 = doNothing;
		this.onEndFinger2 = doNothing;
		this.onEnd = doNothing;
		//onStartFinger1-2
		//onMoveFinger1-2
		//onEndFinger1-2
		//onStart when both fingers are down
		//onEnd when both fingers are up.
		element.addEventListener('touchstart', start);
		function start(e){
			
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					finger1Active=true;
					new Task(function(){
						documentElement.addEventListener('touchstart', startAnywhere);
					}).run();
					documentElement.addEventListener('touchmove', move);
					documentElement.addEventListener('touchend', end);
					touch1 = changedTouch;
					self.onStartFinger1(changedTouch,  e);
				}else
				startFinger2(changedTouch, e);
			}
		}
		function startAnywhere(e){
			var changedTouch = e.changedTouches[0];
			startFinger2(changedTouch, e);
		}
		function startFinger2(changedTouch, e){
			if(changedTouch.identifier==1){
				finger2Active=true;
				touch2 = changedTouch;
				self.onStartFinger2(changedTouch, e);
				if(finger1Active&&finger2Active)
					self.onStart({touch1:touch1, touch2:touch2, e:e});
			}
		}
		function startSecondFinger(){
			
		}
		function move(e){
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					self.onMoveFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					self.onMoveFinger2(changedTouch, e);
				}
			}
			e.preventDefault&&e.preventDefault();
		};
		function end(e){
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					finger1Active=false;
					documentElement.removeEventListener('touchstart', startAnywhere);
					self.onEndFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					finger2Active=false;
					self.onEndFinger2(changedTouch, e);
				}
			}
			var active = finger1Active||finger2Active;
			if(active)return true;
			documentElement.removeEventListener('touchmove', move);
			documentElement.removeEventListener('touchend', end);
			self.onEnd(e);
		};
		function doNothing(){}
	};
	return _TwoFingerTouch;
})();var Cropper = (function(){
	var MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT = 45;
	var MIN_WIDTH_HEIGHT=70;
	var _Cropper=function(params){
		var self = this;
		var aspectRatio = params.aspectRatio;
		var getImageWidth= params.getImageWidth;
		var getImageHeight = params.getImageHeight;
		var aspectRatio = params.aspectRatio;
		var minWidth = 50;
		var minHeight = 50;
		var element = E.DIV();
		element.classList.add('cropper');
		this.positionDefault= function(imageWidth, imageHeight){
			var width = imageWidth;
			var height = imageHeight;
			if(aspectRatio){
				if(imageHeight*aspectRatio>imageWidth){
					height = width/aspectRatio;
				}
				else{
					width = height * aspectRatio;
				}
			}
			element.style.left = '0px';
			element.style.top='0px';
			element.style.width=String(width)+'px';
			element.style.height=String(height)+'px';
			
		};
		this.onShow = function(){
		};
		this.getElement = function(){return element;};
		this.getPosition = function(e){
			return {left:element.offsetLeft, top:element.offsetTop};//{left:absolute.left+(getWidth()/2), top:absolute.top+(getHeight()/2)};
		};
		this.getAbsolutePosition=function(e){
			return {left:e.pageX, top:e.pageY};
		};
		this.getDimensions = function(){
			return {width:element.clientWidth, height:element.clientHeight};
		};
		var twoFingerTouch = new TwoFingerTouch({element:element});
		var startMiddleFingers;
		var startPosition;
		var startDimensions;
		var startDistanceFromMiddleToFinger1;
		var startDistanceFromMiddleToFinger2;
		var movedFinger1 = doNothing;
		var movedFinger2 = doNothing;
		var leftDistanceFromMiddle;
		var topDistanceFromMiddle;
		var rightDistanceFromMiddle;
		var bottomDistanceFromMiddle;
		var imageWidth;
		var imageHeight;
		var startPositionFingerWithOffset;
		var moveBounds;
		var touch1;
		var touch2;
		var maxTimesFingerDistance;
		var startFingerDistance;
		twoFingerTouch.onStart= aspectRatio?onStartAspectRatioFixed:onStartAspectRatioNotFixed;
		
		twoFingerTouch.onStartFinger1= function(touch){
			calculateMoveBounds();
			touch1 = touch;
			startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch);
			movedFinger1 = move;
		};
		twoFingerTouch.onEndFinger1= function(touch){
			calculateMoveBounds();
			if(touch2){
				movedFinger2 = move;
				startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch2);
			}
			else
				movedFinger2 = doNothing;
			movedFinger1 = doNothing;
		};
		twoFingerTouch.onEndFinger2= function(touch){
			calculateMoveBounds();
			startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch1);
			movedFinger1 = move;
			movedFinger2 = doNothing;
		};
		twoFingerTouch.onMoveFinger1 = aspectRatio?onMoveFinger1AspectRatioFixed:onMoveFinger1AspectRatioNotFixed;
		twoFingerTouch.onMoveFinger2= aspectRatio?onMoveFinger2AspectRatioFixed:onMoveFinger2AspectRatioNotFixed;
		twoFingerTouch.onEnd = function(touch){
			touch1 = undefined;
			touch2 = undefined;
			//calculateMoveBounds();
		};
		function onMoveFinger1AspectRatioNotFixed(touch){
			touch1 = touch;
			movedFinger1(touch, startDistanceFromMiddleToFinger1);
		};
		function onMoveFinger2AspectRatioNotFixed(touch){
			touch2 = touch;
			movedFinger2(touch, startDistanceFromMiddleToFinger2);
		};
		function onMoveFinger1AspectRatioFixed(touch){
			touch1 = touch;
			movedFinger1(touch);
		}
		function onMoveFinger2AspectRatioFixed(touch){
			touch2 = touch;
			movedFinger2(touch);
		}
		function onStart(e){
			imageWidth = getImageWidth();
			imageHeight = getImageHeight();
			startPosition = getCropperPosition();
			startDimensions = getCropperDimensions();
		}
		function onStartAspectRatioFixed(e){
			onStart(e);
			touch1 = e.touch1;
			touch2 = e.touch2;
			startFingerDistance= getFingerDistance(touch1, touch2);
			maxTimesFingerDistance= getMaxTimesFingerDistance();
			if(startFingerDistance<MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT)
			{
				movedFinger1 = move;
				movedFinger2 = doNothing;
				calculateMoveBounds();
			}
			movedFinger1 = movedFixedAspectRatio;
			movedFinger2 = movedFixedAspectRatio;
		}
		function onStartAspectRatioNotFixed(e){
			onStart(e);
			touch1 = e.touch1;
			touch2 = e.touch2;
			startMiddleFingers = {x:(touch1.pageX+touch2.pageX)/2, y:(touch1.pageY+touch2.pageY)/2};
			startDistanceFromMiddleToFinger1= {x:touch1.pageX - startMiddleFingers.x, y:touch1.pageY-startMiddleFingers.y};
			startDistanceFromMiddleToFinger2= {x:touch2.pageX - startMiddleFingers.x, y:touch2.pageY-startMiddleFingers.y};
			var finger1IsRightFinger=touch1.pageX>touch2.pageX;
			var finger1IsLowFinger = touch1.pageY>touch2.pageY; 
			var isRightFingerHigh = (finger1IsRightFinger^finger1IsLowFinger);
			var hasHorizontalResize = (finger1IsRightFinger?(touch1.pageX-touch2.pageX):(touch2.pageX-touch1.pageX))>MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT;
			var hasVerticalResize = (finger1IsLowFinger?(touch1.pageY-touch2.pageY):(touch2.pageY- touch1.pageY))>MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT;
			if(!hasHorizontalResize){
				if(!hasVerticalResize){
					movedFinger1 = move;
					movedFinger2 = doNothing;
					calculateMoveBounds();
					return;
				}
				if(finger1IsLowFinger){
					movedFinger1 = movedBottomFingerVerticalResize;
					movedFinger2 = movedTopFingerVerticalResize;
				}
				else{
					movedFinger1 = movedTopFingerVerticalResize;
					movedFinger2 = movedBottomFingerVerticalResize;
				}
				return;
			}
			if(!hasVerticalResize){
				if(finger1IsRightFinger){
					movedFinger1 = movedRightFingerHorizontalResize;
					movedFinger2 = movedLeftFingerHorizontalResize;
				}
				else{
					movedFinger1 = movedLeftFingerHorizontalResize;
					movedFinger2 = movedRightFingerHorizontalResize;
				}
				return;
			}
			if(isRightFingerHigh){
				if(finger1IsRightFinger){
					movedFinger1 = movedRightHighFinger;
					movedFinger2 = movedLeftLowFinger;
				}
				else{
					movedFinger1 = movedLeftLowFinger;
					movedFinger2 = movedRightHighFinger;
				}
				return;
			}
			
			var finger1IsLeftHigh = touch1.pageX>touch2.pageX;
			if(finger1IsRightFinger){
				movedFinger1 = movedRightLowFinger
				movedFinger2 = movedLeftHighFinger;
			}
			else{
				movedFinger1 = movedLeftHighFinger;
				movedFinger2 = movedRightLowFinger;
			}
		};
		function getFingerDistance(){
			return Math.sqrt(Math.pow(touch1.pageX-touch2.pageX, 2)+Math.pow(touch1.pageY-touch2.pageY, 2));
		}
		function getMaxTimesFingerDistance(){
			if(imageWidth>imageHeight*aspectRatio)
				return imageHeight*aspectRatio/startDimensions.width;
			return imageWidth/startDimensions.width;
		}
		function getStartPositionWithOffsetForMove(touch){
			return {x:element.offsetLeft - touch.pageX, y:element.offsetTop - touch.pageY};
		}
		function calculateMoveBounds(){
			moveBounds = {left:0, top:0, right:getImageWidth() - element.clientWidth, bottom:getImageHeight() - element.clientHeight};
		}
		function move(touch, startDistanceFromMiddleToFinger){
			var x = touch.pageX + startPositionFingerWithOffset.x;
			var y = touch.pageY + startPositionFingerWithOffset.y;
			if(x>moveBounds.right)
				x=moveBounds.right;
			else
				if(x<moveBounds.left)
					x = moveBounds.left;
				
			if(y>moveBounds.bottom)
				y=moveBounds.bottom;
			else if (y<moveBounds.left)
				y=moveBounds.left;
			element.style.left=String(x)+'px';
			element.style.top=String(y)+'px';
		}
		function doNothing(){}
		function movedLeftHighFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			leftDistanceFromMiddle = (proportionChange.x*startDimensions.halfWidth);
			if(leftDistanceFromMiddle <MIN_WIDTH_HEIGHT)leftDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			topDistanceFromMiddle = (proportionChange.y*startDimensions.halfHeight);
			if(topDistanceFromMiddle <MIN_WIDTH_HEIGHT)topDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resize();
		}
		function movedLeftLowFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			leftDistanceFromMiddle = (proportionChange.x*startDimensions.halfWidth);
			if(leftDistanceFromMiddle <MIN_WIDTH_HEIGHT)leftDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			bottomDistanceFromMiddle = (proportionChange.y*startDimensions.halfHeight);
			if(bottomDistanceFromMiddle <MIN_WIDTH_HEIGHT)bottomDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resize();
		}
		function movedRightHighFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			rightDistanceFromMiddle = (proportionChange.x*startDimensions.halfWidth);
			if(rightDistanceFromMiddle <MIN_WIDTH_HEIGHT)rightDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			topDistanceFromMiddle = (proportionChange.y*startDimensions.halfHeight);
			if(topDistanceFromMiddle <MIN_WIDTH_HEIGHT)topDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resize();
		}
		function movedRightLowFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			rightDistanceFromMiddle = (proportionChange.x*startDimensions.halfWidth);
			if(rightDistanceFromMiddle <MIN_WIDTH_HEIGHT)rightDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			bottomDistanceFromMiddle= (proportionChange.y*startDimensions.halfHeight);
			if(bottomDistanceFromMiddle <MIN_WIDTH_HEIGHT)bottomDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resize();
		}
		function movedRightFingerHorizontalResize (touch, startDistanceFromMiddleToFinger){
			rightDistanceFromMiddle = (getProportionChangeDistanceFromMiddleHorizontal(touch, startDistanceFromMiddleToFinger, startMiddleFingers)
			*startDimensions.halfWidth);
			if(rightDistanceFromMiddle <MIN_WIDTH_HEIGHT)rightDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resizeHorizontal();
		}
		function movedLeftFingerHorizontalResize(touch, startDistanceFromMiddleToFinger){
			leftDistanceFromMiddle = (getProportionChangeDistanceFromMiddleHorizontal(touch, startDistanceFromMiddleToFinger, startMiddleFingers)
			*startDimensions.halfWidth);
			if(leftDistanceFromMiddle <MIN_WIDTH_HEIGHT)leftDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resizeHorizontal();
		}
		function movedTopFingerVerticalResize(touch, startDistanceFromMiddleToFinger){
			topDistanceFromMiddle = (getProportionChangeDistanceFromMiddleVertical(touch, startDistanceFromMiddleToFinger, startMiddleFingers)
			*startDimensions.halfHeight);
			if(topDistanceFromMiddle <MIN_WIDTH_HEIGHT)topDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resizeVertical();
		}
		function movedBottomFingerVerticalResize(touch, startDistanceFromMiddleToFinger){
			bottomDistanceFromMiddle = (getProportionChangeDistanceFromMiddleVertical(touch, startDistanceFromMiddleToFinger, startMiddleFingers)
			*startDimensions.halfHeight);
			if(bottomDistanceFromMiddle <MIN_WIDTH_HEIGHT)bottomDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resizeVertical();
		}
		function movedFixedAspectRatio(){
			var distance = getFingerDistance();
			var timesFingerDistance = distance/startFingerDistance;
			console.log(timesFingerDistance);
			console.log(maxTimesFingerDistance);
			if(timesFingerDistance>maxTimesFingerDistance)
				timesFingerDistance=maxTimesFingerDistance;
			var newWidth = startDimensions.width*timesFingerDistance;
			var newHeight = newWidth/aspectRatio;
			var dWidthOverTwo = (newWidth - startDimensions.width)/2;
			var dHeightOverTwo = dWidthOverTwo/aspectRatio;
			var left = startPosition.left-dWidthOverTwo;
			var top = startPosition.top - dHeightOverTwo;
			if(left<0)
				left=0;
			else if(left+newWidth>imageWidth)
				left = imageWidth-newWidth;
			if(top<0)
				top=0;
			else if(top + newHeight>imageHeight)
				top = imageHeight - newHeight;
			element.style.width = String(newWidth)+'px';
			element.style.height=String(newHeight)+'px';
			element.style.left = String(left)+'px';
			element.style.top=String(top)+'px';
		}
		function resize(){
			resizeHorizontal();
			resizeVertical();
			
				
		}
		function resizeHorizontal(){
			var left = (startPosition.x - leftDistanceFromMiddle);
			if(left<0)left=0;
			var right = rightDistanceFromMiddle + startPosition.x;
			if(right>imageWidth)right = imageWidth;
			element.style.left = String(left)+'px';
			element.style.width = String(right -left)+'px';
		}
		function resizeVertical(){
			var top = startPosition.y - topDistanceFromMiddle;
			if(top<0)top = 0;
			var bottom = bottomDistanceFromMiddle + startPosition.y;
			if(bottom>imageHeight)bottom=imageHeight;
			element.style.top=String(top)+'px';
			element.style.height = String(bottom - top)+'px';
		}
		function getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers){
			var x = (touch.pageX - startMiddleFingers.x)/
			startDistanceFromMiddleToFinger.x;
			var y = (touch.pageY - startMiddleFingers.y)/startDistanceFromMiddleToFinger.y;
			return {x:x, y:y};
		}
		function getProportionChangeDistanceFromMiddleHorizontal(touch, startDistanceFromMiddleToFinger, startMiddleFinger){
			return (touch.pageX - startMiddleFingers.x)/
			startDistanceFromMiddleToFinger.x;
		}
		function getProportionChangeDistanceFromMiddleVertical(touch, startDistanceFromMiddleToFinger, startMiddleFinger){
			return (touch.pageY - startMiddleFingers.y)/startDistanceFromMiddleToFinger.y;
		}
		function getCropperDimensions(){
			return {width:element.clientWidth, halfWidth:element.clientWidth/2, height:element.clientHeight, halfHeight:element.clientHeight/2};
		}
		function getCropperPosition(){
			return {left:element.offsetLeft, x:element.offsetLeft+(element.clientWidth/2), top:element.offsetTop, y:element.offsetTop+(element.clientHeight/2)};
		}
	};
	return _Cropper;
	function Corner(params){
		var self = this;
		var getConstraints = params.getConstraints;
		var starting = params.starting;
		var setPosition = params.setPosition;
		var topElseBottom = params.topElseBottom;
		var leftElseRight = params.leftElseRight;
		this.getX = params.getX;
		this.getY = params.getY;
		var element = E.DIV();
		element.classList.add('corner');
		element.classList.add(params.className);
		this.getElement = function(){return element;};
		this.getConstraints = function(){
			var constraints = getConstraints(topElseBottom, leftElseRight);
			return constraints;
		};
		this.setPosition = setPosition;
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.getElement = function(){return element;};
		this.getPosition= function(){
			return getAbsolute(element);
		}
		var dragManager = new DragManager({handle:self, stopPropagation:true});
		dragManager.onStart = starting;
	}
})();var CroppingFrame = new (function () {
	var _CroppingFrame=function(params){
		EventEnabledBuilder(this);
		var self = this;
		var aspectRatio = params.aspectRatio;
		var element = E.DIV();
		element.classList.add('cropping-frame');
		var imageWidthRaw;
		var imageHeightRaw;
		var imageAspectRatio;
		var img;
		var imgWrapper = E.DIV();
		imgWrapper.classList.add('img-wrapper');
		var cropper = new Cropper({getImageWidth:getImageWidth, getImageHeight:getImageHeight, aspectRatio:aspectRatio});
		imgWrapper.appendChild(cropper.getElement());
		element.appendChild(imgWrapper);
		this.getElement = function(){return element;};
		function show(){
			element.style.display='table-row';
			cropper.onShow();
		};
		this.hide = function(){
			element.style.display='none';
		};
		this.load = load;
		this.getCroppedImage = function(params){
			console.log(params);
			var position = cropper.getPosition();
			var dimensions = cropper.getDimensions();
			var format = params.format?params.format:"image/jpeg";
			var quality = params.quality?params.quality:1;
			var dataUrl = ImageProcessing.crop({
				img:img, imgWidthRaw:imageWidthRaw, imgHeightRaw:imageHeightRaw, cropperWidth:dimensions.width, cropperHeight:dimensions.height, 
			cropperLeft:position.left, cropperTop:position.top, format:format, profile:params.profile});
			return dataUrl;
		};
		function getImageWidth(){
			return imgWrapper.getBoundingClientRect().width;
		}
		function getImageHeight(){
			return imgWrapper.getBoundingClientRect().height;
		}
		function load(url){
			clear();
			img = E.IMG();
			img.onload = function() {
				imageWidthRaw = this.width;
				imageHeightRaw = this.height;
				imageAspectRatio = imageWidthRaw/imageHeightRaw;
				show();
				sizeImage();
				imgWrapper.appendChild(img);
				cropper.positionDefault(img.clientWidth, img.clientHeight);
			};
			img.onerror=error;
			img.src = url;
		}
		function clear(){
			if(img)
			{
				imgWrapper.removeChild(img);
			}
			img=undefined;
		}
		function error(e){
			dispatchError(e);
		}
		function dispatchError(error){
			self.dispatchEvent({type:'error', error:error});
		}
		function sizeImage(){
			var croppingFrameAspectRatio = getCroppingFrameAspectRatio();
			if(croppingFrameAspectRatio>imageAspectRatio) sizeImageConstrainedByHeight();
			else sizeImageConstrainedByWidth(croppingFrameAspectRatio);
		}
		function sizeImageConstrainedByHeight(){
			var height = getCroppingFrameHeight();
			var width = imageAspectRatio * height;
			setImageWidthHeight(width, height);	
		}
		function sizeImageConstrainedByWidth(){
			var width = getCroppingFrameWidth();
			var height = width / imageAspectRatio;
			setImageWidthHeight(width, height);	
		}
		function setImageWidthHeight(width, height){
			imgWrapper.style.width = String(width)+'px';
			imgWrapper.style.height = String(height)+'px';
			var croppingFrameWidth = getCroppingFrameWidth();
			var croppingFrameHeight = getCroppingFrameHeight();
			var verticalMargin = (croppingFrameHeight-height)/2;
			var horizontalMargin = (croppingFrameWidth-width)/2;
			imgWrapper.style.marginTop=String(verticalMargin)+'px';
			imgWrapper.style.marginLeft=String(horizontalMargin)+'px';
		}
		function getCroppingFrameAspectRatio(){return element.clientWidth/element.clientHeight;}
		function getCroppingFrameHeight(){return element.clientHeight;}
		function getCroppingFrameWidth(){return element.clientWidth;}
	};
	return _CroppingFrame;
})();var ImageProcessing= new (function(){
	this.crop = function(params){
		var img = params.img;
		var imgWidthRaw = params.imgWidthRaw;
		var imgHeightRaw= params.imgHeightRaw;
		var cropperWidth = params.cropperWidth;
		var cropperHeight = params.cropperHeight;
		var cropperLeft= params.cropperLeft;
		var cropperTop = params.cropperTop;
		var format = params.format;
		var quality = params.quality;
		var profile = params.profile;
		var portionCanvas = E.CANVAS();	
		var portionCanvasContext = portionCanvas.getContext('2d');
		var finalCroppedDimensions = getFinalCroppedDimensions(profile, cropperWidth, cropperHeight);
		var finalCroppedWidth = finalCroppedDimensions.width;
		var finalCroppedHeight = finalCroppedDimensions.height;
		portionCanvas.width = finalCroppedWidth;
		portionCanvas.height = finalCroppedHeight;
		var bufferCanvas = E.CANVAS();
		var bufferCanvasContext = bufferCanvas.getContext('2d');
		bufferCanvas.width = img.width;
		bufferCanvas.height = img.height;
		bufferCanvasContext.drawImage(img, 0, 0,imgWidthRaw, imgHeightRaw,0,0, img.width, img.height);
		portionCanvasContext.drawImage(bufferCanvas, cropperLeft, cropperTop, cropperWidth, cropperHeight, 0, 0,
		finalCroppedWidth,
		finalCroppedHeight);
		/*
		document.documentElement.appendChild(bufferCanvas);
	bufferCanvas.style='poition:absolute; width:100px; height:100px; z-index:1000;';
		document.documentElement.appendChild(portionCanvas);
	portionCanvas.style='poition:absolute; width:100px; height:100px; z-index:1000*/
		return portionCanvas.toDataURL(format, quality);
	};
	function getFinalCroppedDimensions(profile, canvasWidth, canvaHeight){
		var finalCroppedWidth;
		var finalCroppedHeight;
		if(profile.desiredWidth){
			finalCroppedWidth = profile.desiredWidth;
			if(profile.aspectRatio){
				finalCroppedHeight = finalCroppedWidth/profile.aspectRatio;
			}
			else if(profile.finalCroppedHeight){
				finalCroppedHeight = profile.finalCroppedHeight;
			}
		}
		else{
			if(profile.finalCroppedHeight){
				finalCroppedHeight = profile.finalCroppedHeight;
				if(profile.aspectRatio){
					finalCroppedWidth = finalCroppedHeight * profile.aspectRatio;
				}
			}
		}
		console.log({width:finalCroppedWidth, height:finalCroppedHeight});
		return {width:finalCroppedWidth, height:finalCroppedHeight};
	}
})();var ProgressBar = (function(){
	var DONE='progress-bar-done';
	var _ProgressBar = function(params){
		var self = this;
		var addedDoneClass=false;
		var showText = params.showText;
		var textContent = params.text;
		var element = E.DIV();
		element.classList.add('progress-bar');
		var progress = E.DIV();
		progress.classList.add('progress');
		element.appendChild(progress);
		var text = E.DIV();
		text.classList.add('text');
		element.appendChild(text);
		this.setPercent = function(percent){
			var str = String(percent)+'%';
			progress.style.width=str;
			if(showText)text.innerHTML=(textContent?textContent:'')+' '+str;
			if(percent>=100)
				done();
			else
				notDone();
		};
		this.setProportion = function(proportion){
			self.setPrecentage(proportion*100);
		};
		this.getElement = function(){return element;};
		function done(){
			if(addedDoneClass)return;
			element.classList.add(DONE);
			addedDoneClass=true;
		}
		function notDone(){
			if(!addedDoneClass)return;
			element.classList.remove(DONE);
			addedDoneClass=false;
		}
	};
	return _ProgressBar;
})();var FileSender = (function(){
	var DONE='done';
	var SENDING='sending';
	var PROGRESS='progress';
	var _FileSender = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var url = params.url;
		var sequentially = params.sequentially;
		var ajax = new Ajax({url:url});
		var queue = [];
		this.queue = function(params){
			var sender = new Sender({data:params.data, fileName:params.fileName, ajax:ajax});
			var handle = new Handle(sender);
			if(sequentially){
				queue.push(sender);
				if(queue.length<2){
					sendNext();
				}
			}
			else
				new Task(function(){
					queue.push(sender);
					sender.addEventListener(DONE, doneSendParallel);
					sender.send();
			}).run();
			dispatchQueued(handle);
			return handle;
		};
		function sendNext(){
			if(queue.length<1)return false;
			var nextSender = queue.splice(0, 1)[0];
			nextSender.addEventListener(DONE, doneSendSequentially);
			return true;
		}
		function dispatchQueued(handle){
			self.dispatchEvent({type:'queued', handle:handle});
		}
		function doneSendParallel(e){
			e.sender.removeEventListener(DONE);
			removeFromQueue(e.sender);
			if(queue.length<1)dispatchDone();
		}
		function doneSendSequentially(e){
			e.sender.removeEventListener(DONE);
			removeFromQueue(e.sender);
			sendNext()&&dispatchDone();
		}
		function dispatchDone(){
			self.dispatchEvent({type:DONE});
		}
		function removeFromQueue(sender){
			var index = queue.indexOf(sender);
			if(index<0)return;
			queue.splice(index, 1);
		}
	};
	return _FileSender;
	function Sender(params){
		EventEnabledBuilder(this);
		var self = this;
		var ajax = params.ajax;
		var data = params.data;
		var fileName = params.fileName;
		var ajaxHandle;
		this.send= function(){
			ajaxHandle = ajax.post({data:data});
			sending(ajaxHandle);
		};
		this.abort = function(){
			ajaxHandle&&ajaxHandle.abort();
		};
		this.getSuccessful = function(){
			return ajaxHandle.getSuccessful();
		};
		this.getFileName = function(){
			return fileName;
		};
		function sending(ajaxHandle){
			ajaxHandle.onDone=dispatchDone;
			ajaxHandle.onProgress=onProgress;
			onSending();
		}
		function dispatchDone(){
			self.dispatchEvent({type:DONE, sender:self});
		}
		function onProgress(percent){
			console.log('progress');
			console.log(percent);
			self.onProgress&&self.onProgress(percent);
		}
		function onSending(){
			self.onSending&&self.onSending();
		}
	}
	function Handle(sender){
		console.log('handle');
		EventEnabledBuilder(this);
		var self = this;
		this.abort = sender.abort;
		sender.addEventListener(DONE, dispatchDone);
		sender.onProgress = dispatchProgress;
		sender.onSending = dispatchSending;
		this.getFileName = sender.getFileName;
		function dispatchProgress(percent){
			self.dispatchEvent({type:PROGRESS,  sendingHandle:self, percent:percent, proportion:percent/100});
		}
		function dispatchDone(){
			self.dispatchEvent({type:DONE, sendingHandle:self, successful:sender.getSuccessful()});
		}
		function dispatchSending(){
			self.dispatchEvent({type:SENDING, handle:self});
		}
	}
})();var FileSenderUI=(function(){
	var _FileSenderUI = function(params){
		var self = this;
		var fileSender = params.fileSender;
		var sendings=[];
		var element = E.DIV();
		element.classList.add('file-sender');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.getElement = function(){return element;};
		this.setVisible = function(value){
			element.style.display=value?'table-row':'none';
		};
		this.clear = function(){
			each(sendings, function(sending){
				entries.removeChild(sending.getElement());
			});
			sendings=[];
		};
		fileSender.addEventListener('queued', queued);
		function queued(e){
			var handle = e.handle;
			var sending = new Sending(handle);
			sendings.push(sending);
			entries.appendChild(sending.getElement());
		}
	};
	function Sending(handle){
		var element = E.DIV();
		element.classList.add('sending');
		var progressBar = new ProgressBar({showText:true, text:handle.getFileName()});
		progressBar.setPercent(3);
		element.appendChild(progressBar.getElement());
		this.getElement = function(){
			return element;
		};
		handle.addEventListener('sending', sending);
		handle.addEventListener('progress', progress);
		handle.addEventListener('done', done);
		function sending(e){
			
		}
		function progress(e){
			progressBar.setPercent(e.percent);
		}
		function done(e){
			progressBar.setPercent(100);
		}
	}
	return _FileSenderUI;
})();var ImageUploader = new (function(){
	var _ImageUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var aspectRatio = params.aspectRatio;
		var profiles = params.profiles;
		var getSessionId = params.getSessionId;
		var desiredSizes = params.desiredSizes;
		var buttonClose = new Button({ className:'button-close'});
		var buttonAccept = new Button({className:'button-accept'});
		var buttonReject = new Button({className:'button-reject'});
		var fileUploader = new FileUploader({accept:'image/*'});
		var fileSender = new FileSender({url:params.url});
		var popup = new Popup({});
		var fileName;
		var croppingFrame = new CroppingFrame({aspectRatio:aspectRatio});
		var ui = new UI({popup:popup, buttonClose:buttonClose, buttonAccept:buttonAccept, buttonReject:buttonReject, croppingFrame:croppingFrame, fileUploader:fileUploader, fileSender:fileSender});
		buttonClose.addEventListener('click', hide);
		fileUploader.addEventListener('file', gotFile);
		croppingFrame.addEventListener('error', croppingFrameError);
		fileSender.addEventListener('done', fileSenderDone);
		this.show = function(){
			popup.show();
		};
		buttonAccept.addEventListener('click', cropAndUpload);
		buttonReject.addEventListener('click', showFileUploader);
		function hide(){
			popup.hide();
			showFileUploader();
		}
		function gotFile(e){
			fileName = e.file.name;
			showCroppingFrame(e.dataUrl);
		}
		function croppingFrameError(e){
			console.log(e.error);
			croppingFrame.hide();
			fileUploader.setVisible(false);
		}
		function cropAndUpload(){
			var list =[];
			each(profiles, function(profile){
				var dataUrl = croppingFrame.getCroppedImage({ profile:profile});
				list.push({dataUrl:dataUrl, profile:profile});
			});
			fileSender.queue({data:JSON.stringify({images:list, sessionId:getSessionId()}), fileName:fileName});
			showUploading();
		}
		function fileSenderDone(){
			console.log('fileSenderDone');
			new Timer({callback:function(){
					ui.clearFileSender();
					hide();
				}
			, delay:1000, nTicks:1}).start();
		}
		function showFileUploader(){fileUploader.setVisible(true);croppingFrame.hide();ui.setCroppingMenuVisible(false);ui.setFileSenderVisible(false);}
		function showCroppingFrame(imgDataUrl){fileUploader.setVisible(false);croppingFrame.load(imgDataUrl);ui.setCroppingMenuVisible(true); ui.setFileSenderVisible(false);}
		function showUploading(){fileUploader.setVisible(false); croppingFrame.hide(); ui.setCroppingMenuVisible(false); ui.setFileSenderVisible(true);}
	};
	return _ImageUploader;
	function UI(params){
		var buttonClose = params.buttonClose;
		var buttonAccept = params.buttonAccept;
		var buttonReject = params.buttonReject;
		var croppingFrame = params.croppingFrame;
		var fileUploader = params.fileUploader;
		var fileSender = params.fileSender;
		var fileSenderUI = new FileSenderUI({fileSender:fileSender});
		ImagePreloader.preloadRange([
		'/images/upload-file.jpg', 
		'/images/tick.jpg',
		'/images/cross.jpg',
		'/images/tick-hover.jpg',
		'/images/cross-hover.jpg'
		]);
		var element = params.popup.getElement();
		element.classList.add('image-uploader');
		var inner = E.DIV();
		inner.classList.add('inner');
		var heading = E.DIV();
		heading.classList.add('heading');
		var buttonWrapperAccept = buttonWrapper();
		var buttonWrapperReject = buttonWrapper();
		var croppingMenu = E.DIV();
		croppingMenu.classList.add('cropping-menu');
		document.body.appendChild(element);
		element.appendChild(inner);
		inner.appendChild(heading);
		heading.appendChild(buttonClose.getElement());
		buttonWrapperAccept.appendChild(buttonAccept.getElement());
		buttonWrapperReject.appendChild(buttonReject.getElement());
		croppingMenu.appendChild(buttonWrapperReject);
		croppingMenu.appendChild(buttonWrapperAccept);
		inner.appendChild(croppingFrame.getElement());
		inner.appendChild(fileUploader.getElement());
		inner.appendChild(croppingMenu);
		inner.appendChild(fileSenderUI.getElement());
		this.setHeading = function(text){
			heading.innerHTML = text;
		};
		this.setCroppingMenuVisible = function(value){
			croppingMenu.style.display=value?'table-row':'none';
		};
		this.setFileSenderVisible = fileSenderUI.setVisible;
		this.clearFileSender= fileSenderUI.clear;
		function buttonWrapper(){
			var element = E.DIV();
			element.classList.add('button-wrapper');
			return element;
		}
	}
})();
var Rooms = new (function(){
	var _Rooms = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var send = params.send;
		var getSessionId=params.getSessionId;
		var getUserMe = params.getUserMe;
		var getUserById = params.getUserById;
		var getNDevice = params.getNDevice;
		var showRoomsSearch = params.showRoomsSearch;
		var ignoreManager = params.ignoreManager;
		var clickMenuUser = params.clickMenu;
		var showUsersSearch = params.showUsersSearch;
		var set = new Set({getEntryId:getEntryId});var usersMenuAll = params.usersMenuAll;
		var emoticonsParser = new EmoticonsParser({emoticonsLibrary:EmoticonsLibrary});
		var roomsMenu = new RoomsMenu({usersMenu:usersMenuAll, showRoomsSearch:showRoomsSearch});
		var emoticons = new Emoticons({emoticonsLibrary:EmoticonsLibrary});
		var ui = new UI({emoticons:emoticons, getTopEntry:getTopEntry});
		var overlappingEntries= new OverlappingEntries({element:ui.getEntries(), name:'rooms'});
		roomsMenu.addEventListener('showroom', showRoom);
		emoticons.addEventListener('addemoticon', addEmoticon);
		overlappingEntries.add(roomsMenu);
		overlappingEntries.show(roomsMenu);
		this.getElement = ui.getElement
		this.resize = ui.resize;
		this.showMenu = function(){
			overlappingEntries.show(roomsMenu);
		};
		this.getById = function(id){
			return set.getById(id);
		};
		this.set = function(roomInfos){
			roomsMenu.set(roomInfos);
			var ids=[];
			each(roomInfos, function(roomInfo){
				ids.push(roomInfo.id);
			});
			each(set.getIds(), function(id){
				if(ids.indexOf(id)>=0)return;
				var room = set.getById(id);
				room.dispose();
				remove(room);
			});
		};
		this.incomingMessage = function(msg){
			var room = set.getById(msg.roomId);
			if(!room)return;
			room.incomingMessage(msg.message);
		};
		this.incomingMessages = function(msg){
			var room = set.getById(msg.roomId);
			if(!room)return;
			room.incomingMessages(msg.messages);
		};
		this.showPm=function(pm){
			
		};
		this.join = function(msg, user){
			if(!user)return;
			var room = set.getById(msg.roomId);
			if(!room) return;	
			room.join(user);
		};
		this.getById= set.getById;
		this.showRoom = function(roomInfo){
			var room = set.getById(roomInfo.id);
			if(!room)
				room = loadRoom(roomInfo);
			showEntry(room);
		};
		this.clear = function(){
			each(set.getEntries().slice(), function(entry){
				console.log(entry);
				entry.dispose&&entry.dispose();
				remove(entry);
			});
			roomsMenu.clear();
		};
		function getTopEntry(){
			return overlappingEntries.getTopEntry();
		}
		function showRoom(e){
			self.showRoom(e.roomInfo);
		}
		function showEntry(entryToShow){
			overlappingEntries.show(entryToShow);
		}
		function getEntryId(room){
			return room.getId();
		}
		function loadRoom(roomInfo){
			var room = new Room({id:roomInfo.id, name:roomInfo.name, isPm:roomInfo.isPm, getUserMe:getUserMe, emoticonsParser:emoticonsParser,
			userTo:roomInfo.userTo, getUserById:getUserById, ignoreManager:ignoreManager, clickMenuUser :clickMenuUser, getNDevice:getNDevice,
			getSessionId:getSessionId, send:send, showUsersSearch:showUsersSearch});
			set.add(room);
			var isPm = room.isPm();
			overlappingEntries.add(room);
			room.addEventListener('showemoticons', showEmoticons);
			room.addEventListener('hide', hideRoom);
			room.addEventListener('showpm', function(e){ return self.dispatchEvent(e);});
			if(!isPm){
			room.addEventListener('sendmessage', function(e){ return self.dispatchEvent(e);});
			room.addEventListener('getmessages', function(e){ return self.dispatchEvent(e);});
			}else{
			room.addEventListener('sendpm', function(e){ return self.dispatchEvent(e);});
			room.addEventListener('getpms', function(e){self.dispatchEvent(e);});
			room.addEventListener('videopmofferrejected', function(e){self.dispatchEvent(e);});
			
			}
			//room.addEventListener('getuserids', self.dispatchEvent);
			dispatchCreatedRoom(room);
			room.addEventListener('dispose',callbackRoomDispose);
			dispatchRoomsInChanged();
			if(!isPm)
				room.addEventListener('missingusers', self.dispatchEvent);
			return room;
		}
		function callbackRoomDispose(e){
			var room = e.room;
			remove(room);
			dispatchRoomsInChanged();
		}
		function hideRoom(e){
			var room = e.room;
			overlappingEntries.hide(room);
		}
		function dispatchRoomsInChanged(){
			self.dispatchEvent({type:'roomsinchanged', roomIds:set.getEntries().where(function(x){ return !x.isPm();}).select(function(x){ return x.getId();}).toList()});
		}
		function dispatchCreatedRoom(room){
			self.dispatchEvent({type:'createdroom', room:room});
		}
		function dispatchDestroyedRoom(room){
			self.dispatchEvent({type:'destroyedroom', room:room});
		}
		function addEmoticon(e){
			var emoticonEntry = e.emoticonEntry;
		}
		function showEmoticons(e){
			var picked = e.picked;
			emoticons.show({picked:picked});
		}
		function dispatchSendMessage(e){
			self.dispatchEvent(e);
		}
		function dispatchSendPm(e){
			self.dispatchEvent({type:'sendpm', message:e.message});
		}
		function dispatchGetMessages(e){
			self.dispatchEvent(e);
		}
		function dispatchGetPms(e){	
		}
		function remove(room){
			set.remove(room);
			overlappingEntries.remove(room);
			dispatchDestroyedRoom(room);
		}
	};
	return _Rooms;
	function UI(params){
		var menu = params.menu;
		var emoticons = params.emoticons;
		var getTopEntry = params.getTopEntry;
		var element = E.DIV();
		element.classList.add('rooms');
		var entries = E.DIV();
		var inner = E.DIV();
		inner.classList.add('rooms-inner');
		element.appendChild(inner);
		entries.classList.add('entries');
		inner.appendChild(entries);
		inner.appendChild(emoticons.getElement());
		this.getEntries = function(){
			return entries;
		};
		this.getElement = function(){return element;};
		var resizeOnce = new Once(resize);
		this.resize = resizeOnce.trigger;
		function resize(){
			console.log('rooms.resize'); 	
			var topEntry = getTopEntry();
			if(!topEntry)return;
			topEntry = topEntry.getEntry();
			if(!topEntry)return;
			topEntry.resize&&topEntry.resize();
		}
	}
})();var AutomaticAuthentication = new (function(){
	var TOKEN = 'token';
	var _AutomaticAuthentication = function(params){
		var send = params.send;
		var settings = new Settings('AutomaticAuthentication');
		this.authenticate = function(){
			var token = settings.get(TOKEN);
			if(!token)return false;
			send({type:'automatic_authenticate', token:token});
			return true;
		};
		this.setToken = function(token){
			settings.set(TOKEN, token);
		};
		this.clear = function(){
			settings.set(TOKEN, null);
		};
	};
	return _AutomaticAuthentication;
})();var Lobby = (function(){
	var IMAGE_WIDTH_SMALL=32;
	var IMAGE_WIDTH_LARGE=256;
	var IMAGE_UPLOADER_URL='/image_uploader';
	
	
	ImagePreloader.preloadRange([
	'/images/close.jpg', 
	'/images/tickbox-unticked.gif',
	'/images/tickbox-ticked.gif',
	'/images/menu.gif',
	'/images/menu-hover.gif',
	'/images/notifications.gif',
	'/images/profile-picture.gif',
	'/images/room-default.gif',
	'/images/room-exit.gif',
	'/images/smiley.gif',
	'/images/tick.gif',
	'/images/upload-file.gif',	
	]);
	if(!isMobile)
		ImagePreloader.preloadRange([
		'/images/tickbox-unticked-hover.gif',
		'/images/tickbox-ticked-hover.gif',
		'/images/close-hover.jpg',
		'/images/profile-picture-hover.gif',
		'/images/notifications-hover.gif',
		'/images/pms-hide.gif',
		'/images/pms-hide-hover.gif',
		'/images/users-hide.gif',
		'/images/users-hide-hover.gif',
		'/images/users-show.gif',
		'/images/users-show-hover.gif',
		'/images/pms-show.gif',
		'/images/pms-show-hover.gif',
		'/images/room-exit-hover.gif',
		'/images/smiley-hover.gif',
		'/images/tick-hover.gif',	
		]);
	else	
		ImagePreloader.preloadRange([
		'/images/pms-mobile.gif',
		'/images/users-mobile.gif',
		]);
	var _Lobby = function(){
		var self = this;
		var sessionId;
		var nDevice;
		var userMe;
		var url = '/servlet';
		var lastAttemptedAutomaticAuthentication;
		var authenticate = new Authenticate({callbackRegister:callbackRegister, callbackSignIn:callbackSignIn, callbackGuest:callbackGuest});
		var users = new Users({});
		var ignoreManager = new IgnoreManager({getUserById:getUserById, getUserMe:getUserMe});
		var clickMenu = new ClickMenu({});
		var mainMenu = new ClickMenu({});
		var usersMenu= new UsersMenu({name:'All Users (Lobby)', users:users, id:'UsersMenuLobby', ignoreManager:ignoreManager, getUserMe:getUserMe, clickMenu:clickMenu, showUsersSearch:showUsersSearch});
		var missingUsersManager = new MissingUsersManager();
		var mysocket = new Mysocket({url:'poll', urlWebsocket:getWebsocketUrl('endpoint')});
		if(window.debug)window.debug.setMysocket(mysocket);
		var automaticAuthentication = new AutomaticAuthentication({send:mysocket.send});
		new Task(authenticateAutomatically).run();
		var seenNotificationsManager = new SeenNotificationsManager({getSessionId:getSessionId, mysocket:mysocket});
		var usersMenues = new UsersMenues({ignoreManager:ignoreManager});
		usersMenues.add(usersMenu);
		var usersSearch = new UsersSearch({clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe});
		var roomsSearch = new RoomsSearch({clickMenu:clickMenu});
	    var rooms = new Rooms({getUserMe:getUserMe, getUserById:getUserById, ignoreManager:ignoreManager, clickMenu:clickMenu, usersMenuAll:usersMenu,
		getNDevice:getNDevice, getSessionId:getSessionId, send:mysocket.send, showUsersSearch:showUsersSearch, showRoomsSearch:showRoomsSearch});
		var imageUploader = new ImageUploader({getSessionId:getSessionId, aspectRatio:1, profiles:[
		{desiredWidth:IMAGE_WIDTH_SMALL, aspectRatio:1, name:UserImage.SMALL}, 
		{desiredWidth:IMAGE_WIDTH_LARGE, aspectRatio:1, name:UserImage.LARGE}
		], url:IMAGE_UPLOADER_URL});
		var pms = new Pms({rooms:rooms, getUserById:users.getById});
		var pmsMenu = new PmsMenu({pms:pms});
		 //var mainMenu = new MainMenu({});
		var notifications = new Notifications({});
		var notificationsMenu = new NotificationsMenu({notifications:notifications, pms:pms, seenNotificationsManager:seenNotificationsManager});
		var buttonUsers = new Button({toggle:!isMobile, classNames:['button-users'], classNameToggled:'button-users-hide'});
		var buttonPms = new Button({toggle:!isMobile, classNames:['button-pms'], classNameToggled:'button-pms-hide'});
		var buttonProfilePicture = new Button({ classNames:['button-profile-picture']});
		var buttonNotifications = new NotificationsButton({notifications:notifications});
		var buttonMenu = new Button({classNames:['button-menu']});
		var ui = new UI({rooms:rooms, buttonUsers:buttonUsers, buttonPms:buttonPms, buttonProfilePicture: buttonProfilePicture,
		buttonNotifications:buttonNotifications, pmsMenu:pmsMenu, usersMenues:usersMenues, notificationsMenu:notificationsMenu,
		buttonMenu:buttonMenu, mainMenu:mainMenu});
		mysocket.addEventListener('message', onMessage);
		mysocket.addEventListener('open', onOpen);
		buttonProfilePicture.addEventListener('click', showImageUploaderForProfilePicture);
		buttonNotifications.addEventListener('click', showNotifications);
		buttonMenu.addEventListener('click', showMenu);
		users.addEventListener('add', userJoined);
		users.addEventListener('remove', userLeft);
		if(!isMobile)
		{
			buttonPms.addEventListener('toggled', onToggleButtonPms);
			buttonUsers.addEventListener('toggled', onToggleButtonUsers);
		}
		else
		{
			buttonPms.addEventListener('click', pmsMenu.show);
			buttonUsers.addEventListener('click', function(){usersMenues.show();});
		}
		rooms.addEventListener('sendmessage', sendMessage);	
		rooms.addEventListener('getmessages', getMessages);
		rooms.addEventListener('getpms', getPms);
		rooms.addEventListener('getuserids', getUserIds);
		rooms.addEventListener('createdroom', createdRoom);
		rooms.addEventListener('destroyedroom', destroyedRoom);
		rooms.addEventListener('roomsinchanged', callbackRoomsInChanged);
		rooms.addEventListener('sendpm', sendPm);
		rooms.addEventListener('videopmofferrejected', sendPmVideoOfferRejected);
		roomsSearch.addEventListener('search', searchRooms);
		roomsSearch.addEventListener('showroom', showRoom);
		usersMenues.addEventListener('showpm', showPm);
		usersSearch.addEventListener('search', searchUsers);
		usersSearch.addEventListener('showpm', showPm);
		notificationsMenu.addEventListener('showpm', showPm);
		pms.addEventListener('addnotification', addNotification);
		pms.addEventListener('videoofferrejected', sendPmVideoOfferRejected);
		mysocket.addEventListener('disposedbyserver', mysocketDisposedByServer);
		this.getElement = ui.getElement;
		function onOpen(){ }
		function onMessage(e){
			var msg = e.msg;
			console.log(msg);
			switch(msg.type){
				case 'test':
					console.log(msg);
					break;
				case 'join':
					join(msg);
					break;
				case 'users':
					users.update(msg.users);//and the above carry with them the full user information. this isnt needed for leaving, hence userids is used. this also ensures other missed user leaves are accounted for. A missed user join will be accounted for when userids causes MissingUsersManager to get the missing information.
					break;
				case 'authenticate':
					authenticateResponse(msg);
					break;
				case 'automatic_authenticate':
					automaticAuthenticateResponse(msg);
					break;
				case 'register':
					registerResponse(msg);
					break;
				case 'rooms':
					rooms.set(msg.rooms);
					break;
				case 'room_userids':
					roomUserIds(msg);//sends a complete list of users who should be in the room. Ids only. it is expected the user can be acquired from the lobby, unless they are missing in which case the missingusersmanager handles that.
					break;
				case 'message':
					rooms.incomingMessage(msg);
					break;
				case 'pm_message':
					pms.incomingMessage(msg);
					break;
				case 'messages':
					rooms.incomingMessages(msg);
					break;
				case 'pm_messages':
					pms.incomingMessages(msg);
					break;
				case 'userids':
					updateUserIdsLobby(msg.userIds);//is used for leave.
					break;
				case 'pm_video_offer_fail':
					pms.videoOfferFail(msg);
					break;
				case 'pm_video_offer_rejected':
					console.log('got video offer rejected');
					pms.videoOfferRejected(msg);
				break;
				case 'pm_video_offer':
					pms.videoOffer(msg);
					break;
				case 'pm_video_accept_fail':
					pms.videoAcceptFail(msg);
					break;
				case 'pm_video_accept':
					pms.videoAccept(msg);
					break;
				case 'pm_video_ice_candidate':
					pms.videoIceCandidate(msg);
					break;
				//case 'disconnected':
					//disconnected(msg);
					//break;
				case 'user_image_set':
					console.log(msg);
					UserImage.update(msg.userId, msg.image);
					var user = users.getById(msg.userId);
					if(user)
						user.setImage(msg.image);
				break;
				case 'rooms_search':
					roomsSearch.incomingRooms(msg.rooms);
				break;
				case 'users_search':
					usersSearch.incomingUsers(msg.users);
				break;
			}
		}
		function roomUserIds(msg){
			var room = rooms.getById(msg.roomId);
			if(!room)return;
			roomUserIds_Join(room, msg.userIds);
			roomUserIds_Leave(room, msg.userIds);
		}
		function authenticateAutomatically(){
			var halfAMinuteAgo = getTime()-30000;
			if(lastAttemptedAutomaticAuthentication&&lastAttemptedAutomaticAuthentication>halfAMinuteAgo){
				showAuthentication();
				return;
			}
			lastAttemptedAutomaticAuthentication = getTime();
			if(!automaticAuthentication.authenticate()){showAuthentication();return;}
			ui.setSpinnerAutomaticAuthenticationVisible(true);
		}
		function getTime(){
			return new Date().getTime();
		}
		function showAuthentication(){
			authenticate.show();
		}
		function showMenu(){
			ui.showMainMenu({options:[{text:'Sign Out ', callback:signOut}]});
		}
		function signOut(){
			mysocket.send({type:'sign_out', sessionId:sessionId});
			automaticAuthentication.clear();
			setToSignedOutState();
		}
		function mysocketDisposedByServer(){
			mysocket.reset();
			setToSignedOutState();
			authenticateAutomatically();
		}
		function setToSignedOutState(){
			sessionId=null;
			rooms.clear();
			users.clear();
			notifications.clear();
			pmsMenu.clear();
			showAuthentication();
			setVisible(false);
		}
		function showUsersSearch(){
			usersSearch.show();
		}
		function showRoomsSearch(){
			roomsSearch.show();
		}
		function showNotifications(){
			console.log('showing notifications');
			notificationsMenu.show();
		}
		function userLeft(e){
			var user = e.user;
			OnlineIndicators.setOnline(user.getId(), false);
		}
		function userJoined(e){
			var user = e.user;
			OnlineIndicators.setOnline(user.getId(), true);
		}
		function roomUserIds_Join(room, userIds){
			each(userIds, function(userId){
				var user = users.getById(userId);
				if(user)
					room.join(user);
				else
					missingUsersManager.get(userId);
			});
		}
		function roomUserIds_Leave(room, userIds){
			var usersToRemove = room.getUsers().getEntries().where(function(x){ return userIds.indexOf(x.getId())<0;}).toList();
			each(usersToRemove, function(userToRemove){
				console.log(userToRemove.getId());
				room.leave(userToRemove);
			});
		}
		function onToggleButtonUsers(e){
			ui.setLeftVisible(e.toggled);
		}
		function onToggleButtonPms(e){
			ui.setPmsMenuVisible(e.toggled);
		}
		function callbackRegister(obj){
			obj.type='register';
			mysocket.send(obj);
		}
		function callbackSignIn(obj){
			obj.type='authenticate';
			mysocket.send(obj);
		}
		function callbackGuest(obj){
			obj.type='authenticate';
			obj.isGuest=true;	
			mysocket.send(obj);
		}
		function callbackRoomsInChanged(e){
			mysocket.send({type:'rooms_in_changed', sessionId:sessionId, roomIds:e.roomIds});
		}
		function authenticateResponse(msg){
			authenticateRegisterResponse(msg);
			loadNotifications(msg);
		}
		function automaticAuthenticateResponse(msg){
			ui.setSpinnerAutomaticAuthenticationVisible(false);
			if(!msg.successful){showAuthentication();return;}
			authenticateRegisterResponse(msg);
			loadNotifications(msg);
		}
		function registerResponse(msg){
			authenticateRegisterResponse(msg);
		}
		function loadNotifications(msg){
			if(msg.pmNotifications){
				each(msg.pmNotifications, function(pmNotification){
					notifications.add(Notification.pmNotificationFromJSON(pmNotification));
				});
			}
		}
		function updateUserIdsLobby(userIds){
		    userIds.where(function(x){ return !users.containsId(x);}).each(function(x){ return missingUsersManager.get(x);});
		    var toRemove = users.getIds().where(function(x){ return userIds.indexOf(x)<0;}).each(function(userId){
				var user = users.getById(userId);
				if(user)user.left();
			});
		}
		function authenticateRegisterResponse(msg){
			if(!msg.successful){
				authenticate.setError(msg.error);
				return;
			}
			sessionId = msg.sessionId;
			if(msg.token)automaticAuthentication.setToken(msg.token);
			nDevice = msg.nDevice;
			users.add(User.fromJSON(msg.user));
			userMe = users.getById(msg.user.id);
			msg.users.select(function(x){ return User.fromJSON(x);}).each(function(x){ return users.add(x);});
			authenticate.hide();
			setVisible(true);
			getRooms();
			pms.load(userMe.getId());
			ignoreManager.load(userMe.getId());
		}
		function showRoom(e){
			rooms.showRoom(e.roomInfo);
		}
		function getRooms(){
			mysocket.send({type:'rooms_get', sessionId:sessionId});
		}
		function getMessages(e){
			mysocket.send({type:'room_messages_get', roomId:e.roomId, sessionId:sessionId});
		}
		function getPms(e){
			console.log('get pms');
			mysocket.send({type:'pm_messages_get', userToId:e.userToId, sessionId:sessionId});
		}
		function getUserIds(e){
			mysocket.send({type:'room_userids_get', roomId:e.roomId, sessionId:sessionId});
		}
		function getUserById(userId){
			return users.getById(userId);
		}
		function getUserMe(){
			return userMe;
		}
		function getSessionId(){
			return sessionId;
		}
		function sendMessage(e){
			var jObject = e.message.toJSON();
			jObject.roomId = e.roomId;
			jObject.type='room_message_send';
			jObject.sessionId=sessionId;
			mysocket.send(jObject);
		}
		function sendPm(e){
			var jObject = e.message.toJSON();
			jObject.userToId = e.userToId;
			jObject.type='room_pm_send';
			jObject.sessionId=sessionId;
			mysocket.send(jObject);
		}
		function addNotification(e){
			notifications.add(e.notification);
		}
		function createdRoom(e){
			var room = e.room;
			usersMenues.add(room.getUsersMenu());
			mysocket.send({type:'room_join', sessionId:sessionId, roomId:room.getId()});
		}
		function destroyedRoom(e){
			console.log('removing from user menues');
			usersMenues.remove(e.room.getUsersMenu());
			mysocket.send({type:'room_leave', sessionId:sessionId, roomId:e.room.getId()});
		}
		function join(msg){
			var user = User.fromJSON(msg.user);
			if(!users.contains(user))
				users.add(user);
			var userIds = msg.userIds;
			if(!userIds)return;
			updateUserIdsLobby(userIds);
		}
		function showPm(e){
			pms.showPmWithUser(e.user);
		}
		function showImageUploaderForProfilePicture(){
			imageUploader.show();
		}
		function searchUsers(e){
		console.log(e);
			mysocket.send({type:'users_search', text:e.text, sessionId:sessionId});
		}
		function searchRooms(e){
			mysocket.send({type:'rooms_search', text:e.text, sessionId:sessionId});
		}
		function getNDevice(){
			return nDevice;
		}
		function setVisible(value){
			ui.setVisible(value);
			if(value){
				new Task(ui.resize).run();
			}
		}
		function sendPmVideoOfferRejected(e){
			console.log(e);
			mysocket.send({type:'pm_video_offer_rejected', userToId:e.userToId, reason:e.reason, sessionId:sessionId});
		}
	};
	function UI(params){
		var rooms = params.rooms;
		var pmsMenu = params.pmsMenu;
		var mainMenu = params.mainMenu;
		var buttonUsers = params.buttonUsers;
		var buttonPms = params.buttonPms;
		var buttonProfilePicture = params.buttonProfilePicture;
		var buttonNotifications = params.buttonNotifications;
		var buttonMenu = params.buttonMenu;
		var notificationsMenu = params.notificationsMenu;
		var spinnerAutomaticAuthentication = new Spinner({preventInterraction:true});
		var divButtonShowHideWrapper = E.DIV();
		
		var usersMenues = params.usersMenues;
		var element = E.DIV();
		var right = E.DIV();
		var rightInner = E.DIV();
		var divButtonShowHideWrapper = E.DIV();
		element.classList.add('lobby');
		right.classList.add('right');
		rightInner.classList.add('right-inner');
		divButtonShowHideWrapper.classList.add('button-show-hide-wrapper');
		var rightTopRow;
		if(!isMobile){
			var left = E.DIV();
			left.classList.add('left');
			var leftInner = E.DIV();
			leftInner.classList.add('left-inner');
			element.appendChild(left);
			left.appendChild(leftInner);
			var logo = new window.Logo();	
			leftInner.appendChild(logo.getElement());
			leftInner.appendChild(usersMenues.getElement());
			
			
			var splitPane = new SplitPane({nPanelsWidth:1, nPanelsHeight:2, rowProfiles:[{height:'120px', minHeight:'60px'}, {minHeight:'160px'}]});
			rightTopRow= splitPane.getPanelRow(0);
			var rightTopPanel = splitPane.getPanelXY(0, 0);
			var rightBottomPanel = splitPane.getPanelXY(0, 1);
			var rightTop = rightTopPanel.getElement();
			var rightBottom = rightBottomPanel.getElement();
			rightTop.appendChild(pmsMenu.getElement());
			rightBottom.appendChild(divButtonShowHideWrapper);
			rightBottom.appendChild(rooms.getElement());
			rightInner.appendChild(splitPane.getElement());
			rightInner.appendChild(notificationsMenu.getElement());
			new Task(splitPane.resize).run();
			logo.addEventListener('click', rooms.showMenu);
			buttonUsers.addEventListener('click', resize);
			ResizeManager.add({element:element, onResized:resize});
		}
		else
		{
			rightInner.appendChild(pmsMenu.getElement());
			rightInner.appendChild(divButtonShowHideWrapper);
			rightInner.appendChild(rooms.getElement());
			document.body.appendChild(notificationsMenu.getElement());
		}
		element.appendChild(right);
		right.appendChild(rightInner);
		document.documentElement.appendChild(spinnerAutomaticAuthentication.getElement());
		var logoSignIn= E.IMG();
		logoSignIn.classList.add('logo-sign-in');
		logoSignIn.src='/images/logo.gif';
		document.body.appendChild(logoSignIn);
		divButtonShowHideWrapper.appendChild(buttonUsers.getElement());
		divButtonShowHideWrapper.appendChild(buttonPms.getElement());
		divButtonShowHideWrapper.appendChild(buttonMenu.getElement());
		divButtonShowHideWrapper.appendChild(buttonNotifications.getElement());
		divButtonShowHideWrapper.appendChild(buttonProfilePicture.getElement());
		this.getElement = function(){return element;};
		this.showMainMenu = function(options){
			console.log(getAbsolute(buttonProfilePicture.getElement()).right);
			mainMenu.show(options);
			mainMenu.setPosition({right:6,top:getAbsolute(buttonProfilePicture.getElement()).bottom+3});
		};
		this.setPmsMenuVisible= function(value){
			console.log(value);
			rightTopRow.setVisible(value);
			resize();
		};
		this.setLeftVisible = function(value){
			left.style.display=value?'block':'none';
			resize();
		};
		this.setSpinnerAutomaticAuthenticationVisible=spinnerAutomaticAuthentication.setVisible;
		//pmsMenu.addEventListener('resized', pmsMenuResized);
		//function pmsMenuResized(){
		//	rooms.resize();
		//}
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.resize = resize;
		function resize(){
			splitPane&&splitPane.resize();
			usersMenues.resize();
			rooms.resize();
			pmsMenu.resize();
		}
		
	}
	return _Lobby;
})();var lobby = new Lobby();
document.body.appendChild(lobby.getElement());