// Chrome v24+
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('mainpage.html',
        {width: 310, height: 170});
});