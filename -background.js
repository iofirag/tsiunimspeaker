// navigator.webkitGetUserMedia({audio: true, video: true}, function() {
    // console.log('ok');
// }, function(e) {
    // console.log('webcam not ok');
// });


// navigator.webkitGetUserMedia({
	// audio : true,
	// video : true
// }, function(stream) {
	// mediaStream = stream;
// }, function(error) {
	// console.error("Error trying to get the stream:: " + error.message);
// }); 

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('mainpage.html',
        {width: 1190, height: 709});
});
