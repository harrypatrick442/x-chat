exports.EventEnabledBuilder= function(obj)
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
};