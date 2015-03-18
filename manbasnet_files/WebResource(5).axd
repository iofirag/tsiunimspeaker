
/// <reference name="MicrosoftAjax.debug.js" />
/// <reference name="MicrosoftAjaxTimer.debug.js" />
/// <reference name="MicrosoftAjaxWebForms.debug.js" />



function ClearMsgLine() {
    SetMsgLine('', 'pxl');
}
function InfoLine(msg) {
    SetMsgLine(msg, 'Info');
}
function WarningLine(msg) {
    SetMsgLine(msg, 'Warning');
}
function ErrorLine(msg) {
    SetMsgLine(msg, 'Error');
}
function SetMsgLine(msg, msgType) 
{
    o = document.getElementById(_ShortMsg_clientId);
    shortIframe = document.getElementById('iframeHeader');
    if (o != null) 
    {
        if (document.all) 
        {
            o.innerHTML = msg;
        }
        else 
        {
            o.innerHTML = msg;
        }
        if (!getValidationSummaryDisplayType()) 
        {
            o.title = msg;
        }
        else 
        {
            o.title = o.innerText;
        }
    }
    o2 = document.getElementById(_LongMsg_clientId);
    if (o2 != null) 
    {
        if (document.all) 
        {
            o2.innerHTML = msg;
        }
        else 
        {
            o2.innerHTML = msg;
        }
        if (!getValidationSummaryDisplayType())
        {
            o2.title = msg;
        }
        else 
        {
            o2.title = o2.innerText;
        }
    }

    o2.style.lineHeight = '1.2em';
    o2.style.marginTop = '-1.4em';
    o2.style.marginRight = '24px'

    switch (msgType.toLowerCase()) 
    {
        case 'info':
            ImgSrc = _EduMsgLineInfoImage;
            ImgAlt = "הודעת מידע"
            break;
        case 'warning':
            ImgSrc = _EduMsgLineWarningImage;
            ImgAlt = "הודעת אזהרה";
            break;
        case 'error':
            ImgSrc = _EduMsgLineErrorImage;
            ImgAlt = "הודעת שגיאה";
            break;
        case 'pxl':
            ImgSrc = _EduMsgLinePxlImage;
            ImgAlt = "";
            break;
    }

    document.getElementById(_msg_Image_clientId).src = ImgSrc;
    document.getElementById(_msg_Image_clientId).alt = ImgAlt;
    if (msgType != 'pxl') 
    {
        o.className = 'Page' + msgType + 'Line';
        o2.className = 'Page' + msgType + 'Line';
        document.getElementById(_msg_ClientID).className = 'panel' + msgType + 'Line';
        document.getElementById(_msg_ClientID).style.visibility = 'visible';
        var cpe1 = $find(_cpe1_clientId);
        if (cpe1 != null)
        {
            if (cpe1.get_Collapsed()) 
            {
                cpe1.set_Collapsed(false);
            }
            if (_hideMsgLine)
            {
                CloseCollapsiblePanel();
            }
        }
        if (_isScreenReader == "True") {
            window.location = "#" + _tdTop_clientId;
        }
    }
    else 
    {
        document.getElementById(_msg_ClientID).className = 'panel' + msgType;
        document.getElementById(_msg_ClientID).style.visibility = 'hidden';
    }
}

function getValidationSummaryDisplayType() 
{
    var summary, sums, s;
    if (typeof (Page_ValidationSummaries) != "undefined")
    {
         for (sums = 0; sums < Page_ValidationSummaries.length; sums++) 
         {
             summary = Page_ValidationSummaries[sums];
             if (summary.displaymode == "BulletList" || summary.displaymode == "List") 
             {
                 return true;
             }
         }
     }
     return false;
}

function fnStartInit() {
    if (document.readyState == 'complete') {
        //loads the msgline.
        Sys.Application.add_load(attachCpeHandler);
        //loads the font cooki.
        Sys.UI.DomEvent.addHandler(window, 'load', this.checkFontCooki);
    }
    else {
        var cpe1 = $find(_cpe1_clientId);
        if (cpe1 != null) {
            if (cpe1.get_Collapsed()) {
                cpe1.set_Collapsed(false);
            }
            if (_hideMsgLine) {
                CloseCollapsiblePanel();
            }
        }
    }
}

function attachCpeHandler() {
    Sys.Application.remove_load(attachCpeHandler);
    var cpe = $find(_cpe1_clientId);
    if (cpe != null) {
        if (isBrowserTypeIE6()) {
            cpe.add_expandComplete(cpeExpandComplete);
        }
        if (document.getElementById(_ShortMsg_clientId).innerHTML.length > 0) {
            cpe._doOpen();
        }
    }
    if (_hideMsgLine) {
        CloseCollapsiblePanel();
    }
}

function cpeExpandComplete() 
{
    FixIframe();
}

function isBrowserTypeIE6() {
    return (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 7);
}

function collapseCollapsiblePanel() 
{
    var cpe1 = $find(_cpe1_clientId);
    if (cpe1 != null) 
    {
        if (!cpe1.get_Collapsed())
            cpe1.set_Collapsed(true);
    }
}

function FixIframe() {
    var frm = document.getElementById('iframe1');
    var divPopup = document.getElementById(_Panel2_clientId);
    var pln1 = document.getElementById(_tdTop_clientId);
    frm.style.left = divPopup.offsetLeft + 'px';
    frm.style.top = divPopup.offsetTop + 'px';
    frm.style.width = divPopup.offsetWidth + 'px';
    frm.style.height = divPopup.offsetHeight + 'px';
    frm.style.zIndex = divPopup.style.zIndex - 1;
    pln1.style.zIndex = divPopup.style.zIndex;

}
    
function CloseCollapsiblePanel() 
{
   setTimeout('collapseCollapsiblePanel()', _timeToHideCollapsPanel);
}

function Cookie(document, name, hours, path, domain, secure) {
    this.$document = document;
    this.$name = name;
    if (hours)
        this.$expiration = new Date((new Date()).getTime() + hours * 3600000);
    else this.$expiration = null;
    if (path) this.$path = path; else this.$path = null;
    if (domain) this.$domain = domain; else this.$domain = null;
    if (secure) this.$secure = true; else this.$secure = false;
}

// This function is the store( ) method of the Cookie object
Cookie.prototype.store = function() {
    var cookieval = "";
    for (var prop in this) {
        // Ignore properties with names that begin with '$' and also methods
        if ((prop.charAt(0) == '$') || ((typeof this[prop]) == 'function'))
            continue;
        if (cookieval != "") cookieval += '&';
        cookieval += prop + ':' + escape(this[prop]);
    }

    var cookie = this.$name + '=' + cookieval;
    if (this.$expiration)
        cookie += '; expires=' + this.$expiration.toGMTString();
    if (this.$path) cookie += '; path=' + this.$path;
    if (this.$domain) cookie += '; domain=' + this.$domain;
    if (this.$secure) cookie += '; secure';

    // Now store the cookie by setting the magic Document.cookie property
    this.$document.cookie = cookie;
}

// This function is the load( ) method of the Cookie object
Cookie.prototype.load = function() {
    var allcookies = this.$document.cookie;
    if (allcookies == "") return false;

    // Now extract just the named cookie from that list
    var start = allcookies.indexOf(this.$name + '=');
    if (start == -1) return false;   // Cookie not defined for this page
    start += this.$name.length + 1;  // Skip name and equals sign
    var end = allcookies.indexOf(';', start);
    if (end == -1) end = allcookies.length;
    var cookieval = allcookies.substring(start, end);

    var a = cookieval.split('&');    // Break it into an array of name/value pairs
    for (var i = 0; i < a.length; i++)  // Break each pair into an array
        a[i] = a[i].split(':');

    for (var i = 0; i < a.length; i++) {
        this[a[i][0]] = unescape(a[i][1]);
    }

    // We're done, so return the success code
    return true;
}

// This function is the remove( ) method of the Cookie object
Cookie.prototype.remove = function() {
    var cookie;
    cookie = this.$name + '=';
    if (this.$path) cookie += '; path=' + this.$path;
    if (this.$domain) cookie += '; domain=' + this.$domain;
    cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';
    this.$document.cookie = cookie;
}



var maxSize = 1.3;
var minSize = 0.6;

function checkFontCooki() {
    var UserFontSize = new Cookie(document, "User_Font_Size", 240);
    if (!UserFontSize.load() || !UserFontSize.fontSize) {
        UserFontSize.fontSize = document.body.style.fontSize;
    }
    else {
        document.body.style.fontSize = parseFloat(UserFontSize.fontSize) + "em";
    }
}

function resizeText(multiplier) {
    var UserFontSize = new Cookie(document, "User_Font_Size", 240);
    var BodyFontSize = parseFloat(document.body.style.fontSize);
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "0.78em ";
        BodyFontSize = parseFloat(document.body.style.fontSize);
    }
    if (multiplier == 0) {
        document.body.style.fontSize = "0.78em ";
        UserFontSize.remove();
        BodyFontSize = parseFloat(document.body.style.fontSize);
        return;
    }
    if (BodyFontSize <= maxSize && BodyFontSize >= minSize) {
        var size = parseFloat(document.body.style.fontSize) + (multiplier * 0.05);
        if (size > maxSize) { size = maxSize; }
        if (size < minSize) { size = minSize; }
        document.body.style.fontSize = size + "em";
        UserFontSize.fontSize = document.body.style.fontSize;
        UserFontSize.store();
    }
}

if (window.addEventListener)
    window.addEventListener('DOMContentLoaded', fnStartInit, false);
else if (window.attachEvent)
    document.onreadystatechange = function() { fnStartInit(); }
else if (document.getElementById)
    document.onreadystatechange = function() { fnStartInit(); }



if (typeof (Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();
