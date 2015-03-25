//
//
//
function pgGetDeviceInfo() {
	document.getElementById('deviceInformation').innerHTML = pgDeviceInfo();
};

function pgDeviceInfo() {
	return device.cordova + '<br />' +
			device.model + '<br />' +
			device.platform + '<br />' +
			device.uuid + '<br />' +
			device.version;
};
