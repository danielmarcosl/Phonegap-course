document.addEventListener("ondeviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.connection);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    function on_close(){
   		$('.conexion').html('Tipo de conexion ' + states[networkState]);
    }

    navigator.notification.alert(
    	states[networkState],		// message
    	on_close,					// callback
    	'Tipo de conexión',			// title
    	'Cerrar'					// buttonName
    );
}