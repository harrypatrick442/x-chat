
module.exports =(function() {
	console.log('running');
	var EventEmitter2 = require('eventemitter2').EventEmitter2;
	var Promise = require("bluebird");
	var _ = require("lodash");

	var _Longpoll = function(app, opts){
		console.log('creating');
		var mapUrlToEmitter={};
		// Default Config
		var config = {
			DEBUG: false,
			events: {
				maxListeners: 0 // unlimited
			}
		};

		// Merge options with config
		if (opts) {
			config = _.assign(config, opts);
		};
		
		// For logging messages
		var log = function() {
			if (!config.DEBUG) return;
		};

		var _app = app;

		this.create = function(url, middleware, opts) {
			if (typeof middleware === "function") {
				return createWithId(url, middleware, opts);
			}
			else {
				opts = middleware;
			}
			return setupListener(url, "longpoll", null, opts);
		};
		this.publish = function(url, data) {
			return new Promise(function(resolve, reject) {
				if (mapUrlToEmitter[url]) {
					mapUrlToEmitter[url].emit('longpoll.**', data);
					resolve();
				}
				else {
					reject("Longpoll with the provided URL does not exist: " + url);
				}
			});
		};
		this.publishToId = function(url, id, data) {
				return emit(url, "longpoll." + id, data);
		};
		function createWithId(url, middleware, opts) {
				return setupListener(url, "longpoll", middleware, opts);
		}
		function use(middleware) {
			_app.use(middleware);
		}
		function setupListener(url, event, middleware, opts) {
			if (middleware == null) {
				middleware = (req, res, next) => next();
			}
			return new Promise((resolve, reject) => {

				// Check if longpoll for URL already exists
				if (mapUrlToEmitter[url]) {
					return reject("URL already in use: " + url);
				}

				// Setup new dispatcher for the URL
				var dispatcher = new Dispatcher(url, opts);

				// Setup the GET handler for a longpoll request
				_app.get(url, middleware, (req, res) => {
					var eventId = "longpoll";

					// Check if there is an ID associated with the request
					if (req.id) {
						// Add the ID to the event listener
						eventId = eventId + "." + req.id;
						// Clear all previous events for the ID, we only need one
						log("Old Events cleared: ", url, eventId);
						dispatcher.removeAllListeners([eventId]);
					}

					// Method that Creates event listener
					var sub = function(res) {
						log("Event listener registered: ", req.url + ":", eventId);

						dispatcher.once(eventId, function(data) {
							log("Event listener triggered: ", req.url, eventId, "Data: ", data);
							res.json(data);
						});
					}

					// Create it
					sub(res);
				});
				resolve();
			});
		}
		function emit(url, event, data) {
			return new Promise(function(resolve, reject) {
				if (mapUrlToEmitter[url]) {
					mapUrlToEmitter[url].emit(event, data);
					resolve();
				}
				else {
					reject("Subscription with the provided URL does not exist: " + url);
				}
			});
		}
		function Dispatcher(url, opts) {
			
			// Init EventEmitter
			var dispatcher = new EventEmitter2({
				wildcard: true,
				delimiter: "."
			});
			
			if (opts) {
				if (opts.maxListeners && opts.maxListeners > 0) {
					dispatcher.setMaxListeners(opts.maxListeners);
				}
			}
			
			mapUrlToEmitter[url] = dispatcher;
			return dispatcher;
		}
	};
	return _Longpoll;
})();
