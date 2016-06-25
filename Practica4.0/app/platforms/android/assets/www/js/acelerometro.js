function a_onSuccess(acceleration) {
	var element = document.getElementById('accelerometer');
    element.innerHTML = 
    	'Acceleration X: ' + acceleration.x + '<br />' +
        'Acceleration Y: ' + acceleration.y + '<br />' +
        'Acceleration Z: ' + acceleration.z + '<br />';
}

function a_onError() {
    alert('onError!');
}

function get_motion(){
	var opciones = { frequency:3000 };
	var watchID = navigator.accelerometer.watchAcceleration(a_onSuccess, a_onError, opciones);
	localStorage.watchID = watchID;
}

function stop_motion(){
	document.getElementById('accelerometer').innerHTML = ' ';
	navigator.accelerometer.clearWatch(localStorage.watchID);
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	get_motion();
}