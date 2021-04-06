document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');

    navigator.geolocation.watchPosition(geolocationSuccess,geolocationError);

    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
}

function geolocationSuccess(position) {
    $('#latitude-value').text(position.coords.latitude);
    $('#longitude-value').text(position.coords.longitude);
    $('#altitude-value').text(position.coords.altitude);
}

function geolocationError(error) {
    alert(error);    
}

function onOffline() {
   $('#status-value').text('The app is running in offline mode!'); 
}

function onOnline() {
    $('#status-value').hide();
}