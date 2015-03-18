
if (window.addEventListener) //DOM method for binding an event
window.addEventListener("load", showtimeout, false);
else if (window.attachEvent) //IE exclusive method for binding an event
window.attachEvent("onload", showtimeout);
else if (document.getElementById) //support older modern browsers
window.onload=showtimeout;



var timeoutwindowopen = false;	// popup window is closed to begin with
var timeWindow = null;	// popup window does not exist

// Called from the header image: onLoad="showtimeout();"		


function showtimeout() {
	if ((secondsLeft > remindTime) && timeoutwindowopen) {
		closeReminder();
	}
	if (secondsLeft < 0) {
		//window.location.href = timedoutpath; // path to timedout.html		
		//var url = timedoutpath			
		///window.location.replace(url + "?HomePage=" + homepage);
		//closeReminder();
		TerminateSession();
		return;
	}

	if ((timeoutwindowopen == false) && (secondsLeft > 0) && (secondsLeft <= remindTime)) {
		showReminder() //timeoutpath);	// path to timeout.html
	}
			
	var minutes = Math.floor(secondsLeft/60);
	var seconds = secondsLeft%60;
	var label
			
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
			
	// Show the remaining time in the window
	if (seconds <= 0 && minutes <= 0) {
		window.status = formatTime("Session has timed out");
	} else {
		if (secondsLeft < secondsStartCounter ) {
			//window.status = formatTime("Session timeout in: " + minutes + ":" + seconds);
			label = document.getElementById("lblSessionTimeOut")
			if (label !=null) {
				label.innerHTML =  minutes + ":" + seconds;
			}
		}else{
			window.status = "";
			label = document.getElementById("lblSessionTimeOut")
			if (label !=null) {
				label.innerHTML =  "";
			}		
		}
	}
			
	var period = 1;
	setTimeout("showtimeout()", period*1000);
	secondsLeft -= period;	
}


function closeReminder() {
	timeWindow.close();
	timeWindow = null;
	timeoutwindowopen = false;
}

// Format the time		
function formatTime(x) {
	var pattern = new RegExp("&#([0-9]+);");
	while ((result = pattern.exec(x)) != null) {
		x = x.replace(result[0], String.fromCharCode(RegExp.$1));
	}
	x = x.replace(/&nbsp;/g, ' ');
	return x;
}

// open the popup window		
function showReminder(){
//function openWindow(url) {
	var url = timeoutpath;
	var options = 'width=550,height=300,left=250,top=250,resizable=yes,scrollbars=yes,menubar=no,status=no,toolbar=no,location=no';
	timeWindow = window.open(url, "_blank",options);
	if (timeWindow.opener == null) {
		timeWindow.opener = self;
	}
	timeoutwindowopen=true;
}

// replaces the existing timeout popup window with timed-out window		
function replaceWindow(url) {
	if (timeWindow != null) {
		timeWindow.document.location.replace(url);
	} else {
		openWindow(url);
	}
}
		
// renewSession
function renewSession() {
//	var iframe
//	iframe = document.getElementById("iFrameSessionTimeout")
//	if (iframe != null){
//		iframe.src = emptypage;		
//		minutes = sessionTimeout;
//	}
//	else {
//		alert("לא מצליח לרענן את הקשר");
//	}
	minutes = sessionTimeout;
	secondsLeft = minutes*60;
	
}
function resetTimeout() {
	minutes = sessionTimeout;
	secondsLeft = minutes*60;
	
}
function TerminateSession(){

	var url = timedoutpath			
	window.location.replace(url + "?HomePage=" + homepage);
	closeReminder();
}

if (typeof (Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();