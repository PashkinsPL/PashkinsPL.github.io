var s = true;

function Show() {
	if (s) {
		document.getElementById("info").style.left = '-200px';
		s = false;
	} else {
		document.getElementById("info").style.left = '0px';
		s = true;
	}
}

function CopyIp() {
	var copyText = document.getElementById("ip");
	copyText.select();
	document.execCommand("copy");
	alert("Copied the text: " + copyText.value);
}