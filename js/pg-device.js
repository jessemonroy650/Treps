//
//
//
var pgGetDeviceInfo = function () {
	document.getElementById('deviceInformation').innerHTML = pgDeviceInfo();
};

var pgDeviceInfo = function () {
	return device.cordova + '<br />' +
			device.model + '<br />' +
			device.platform + '<br />' +
			device.uuid + '<br />' +
			device.version;
};
