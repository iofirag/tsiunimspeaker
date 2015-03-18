// global variables //
var TIMER = 5;
var SPEED = 10;
var WRAPPER = 'edu_main';
var lastFocusedElement;
var _Animate = true;

// calculate the current window width //
function pageWidth() {
    return window.innerWidth != null ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
}

// calculate the current window height //
function pageHeight() {
    return window.innerHeight != null ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body != null ? document.body.clientHeight : null;
}

// calculate the current window vertical offset //
function topPosition() {
    return typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
}

// calculate the position starting at the left of the window //
function leftPosition() {
    return typeof window.pageXOffset != 'undefined' ? window.pageXOffset : document.documentElement && document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ? document.body.scrollLeft : 0;
}

// build/show the dialog box, populate the data and call the fadeDialog function //
function showDialog(title, message, type, autohide, animate) {

    if (document.activeElement !== 'undefined' && document.activeElement !== null) {
        if (document.activeElement !== "") {
            var elem = document.activeElement;
            //.focus()
            try {
                if (!elem.disabled && elem.style.display != 'none') {
                    lastFocusedElement = document.activeElement.id;
                }
            }
            catch (err) {
                //let the app to handle the error .
            }
        }
    }

    if (!type) {
        type = 'error';
    }
    if (animate == undefined) {
        animate = _Animate;
        }
    var dialog;
    var dialogheader;
    
    var dialogclose;
    var dialogtitle;
    var dialogcontent;
    var dialoginnercontent;
    var dialogmask;
    if (!document.getElementById('dialog')) {
        dialog = document.createElement('div');
        dialog.id = 'dialog';
        dialog.handler = null;
        dialog.returnValue = null;
        dialogheader = document.createElement('div');
        dialogheader.id = 'dialog-header';
        //dialogtitle = document.createElement('div');
        dialogtitle = document.createElement('h3');
        dialogtitle.id = 'dialog-title';
        dialogclose = document.createElement('div');
        dialogclose.id = 'dialog-close'
        dialogclose.setAttribute("alt", MSG_CLOSE_BUTTON);

        dialogcontent = document.createElement('div');
        dialogcontent.id = 'dialog-content';

        dialoginnercontent = document.createElement('div');
        dialoginnercontent.id = 'dialog-innercontent';

        dialogcontentfooter = document.createElement('div');
        dialogcontentfooter.id = 'dialog-contentfooter';

        dialogmask = document.createElement('iframe');
        dialogmask.id = 'dialog-mask';
        document.body.appendChild(dialogmask);
        document.body.appendChild(dialog);
        dialog.appendChild(dialogheader);
        dialogheader.appendChild(dialogtitle);
        dialogheader.appendChild(dialogclose);
        dialog.appendChild(dialogcontent);

        dialogcontent.appendChild(dialoginnercontent);

        dialogcontent.appendChild(dialogcontentfooter);

        dialog.style.zIndex = 99999;
        if (animate == undefined) {animate = true; }
//        dialogclose.setAttribute('onclick', 'hideDialog(' + animate + ')');

        dialogclose.onclick = function () { hideDialog(animate); };
    }
    else {
        dialog = document.getElementById('dialog');
        dialog.handler = null;
        dialog.returnValue = null;
        dialogheader = document.getElementById('dialog-header');
        dialogtitle = document.getElementById('dialog-title');
        dialogclose = document.getElementById('dialog-close');
        dialogcontent = document.getElementById('dialog-content');

        dialoginnercontent = document.getElementById('dialog-innercontent');
        dialogcontentfooter = document.getElementById('dialog-contentfooter');

        dialogmask = document.getElementById('dialog-mask');
        dialogmask.style.visibility = "visible";
        dialog.style.visibility = "visible";
    }

//    dialog.style.opacity = .00;
    dialog.style.filter = 'alpha(opacity=0)';
    dialog.alpha = 0;
    var width = pageWidth();
    var height = pageHeight();
    var left = leftPosition();
    var top = topPosition();
    var dialogwidth = dialog.offsetWidth;
    var dialogheight = dialog.offsetHeight;
    var topposition = top + (height / 3) - (dialogheight / 2);
    var leftposition = (width / 2) - (dialogwidth / 2);
    dialog.style.top = topposition + "px";
    dialog.style.left = leftposition + "px";
    dialogheader.className = type + "header";
    dialogtitle.innerHTML = title;
    dialogcontent.className = type;

    //dialogcontent.innerHTML = message;
    dialoginnercontent.innerHTML = message;
    dialoginnercontent.className = type + "innercontent";

    while (dialogcontentfooter.hasChildNodes()) {
        dialogcontentfooter.removeChild(dialogcontentfooter.firstChild);
    }
    if (type != "prompt") { createDialogOkButton(type); }

    var content = document.getElementById(WRAPPER);
    dialogmask.style.height = content.offsetHeight + 'px';
    //dialog.timer = setInterval("fadeDialog(1)", TIMER);

    dialog.timer = setInterval("fadeDialog(1," + animate + ")", TIMER);

    if (!autohide && autohide!== 0) {
        
        dialogclose.style.visibility = "hidden";
        window.setTimeout("hideDialog("+ animate +")", (autohide * 1000));
    }
    else {
        dialogclose.style.visibility = "visible";
    }
    
    window.location = "#dialog-header";

}

// hide the dialog box //
function hideDialog(animate) {
    var dialog = document.getElementById('dialog');
    if (animate == undefined) { animate = _Animate; }
    if (!dialog.timer) {
        dialog.timer = setInterval("fadeDialog(0," + animate + ")", TIMER);
    }
    returnFocus();
}

function returnFocus() {
    if (lastFocusedElement !== 'undefined' && lastFocusedElement !== null) {
        if (lastFocusedElement !== "") {
            var elem = document.getElementById(lastFocusedElement);
            //.focus()
            try {
                if (!elem.disabled && elem.style.display != 'none') {
                    elem.focus();
                }
            }
            catch (err) {
                //let the app to handle the error .
            }
            
        }
    }
    else {
        var content = document.getElementById("Content");
        if (content !== 'undefined') {
            content.focus();
        }
    }
}

// fade-in the dialog box //
function fadeDialog(flag, animate) {
    var value;
    if (flag == null) {
        flag = 1;
    }
    if (animate == undefined) { animate = _Animate; }
    var dialog = document.getElementById('dialog');
    var dialogclose = document.getElementById('dialog-close');

    
    if (!animate) { //dont animate
        if (flag == 1) {
            document.getElementById('dialog-mask').style.visibility = "visible";
            dialog.style.visibility = "visible";
            dialog.style.filter = 'alpha(opacity=100)';
            clearInterval(dialog.timer);
            dialog.timer = null;
        }
        else {
            dialog.style.visibility = "hidden";
            document.getElementById('dialog-mask').style.visibility = "hidden";
            dialog.style.filter = 'alpha(opacity=0)';
            dialogclose.style.visibility = "hidden";
            clearInterval(dialog.timer);
            dialog.timer = null;
            if (dialog.handler) {
                dialog.handler(dialog.returnValue);
                dialog.handler = null;
                dialog.returnValue = null;
            }
        }
    }
    else { // do animate
        if (flag == 1) {
            //for show
            value = dialog.alpha + SPEED;
        } else {
            //for hide
            value = dialog.alpha - SPEED;
        }
        dialog.alpha = value;
        dialog.style.opacity = (value / 100);
        dialog.style.filter = 'alpha(opacity=' + value + ')';
        if (value >= 99) {
            clearInterval(dialog.timer);
            dialog.timer = null;
        }
        else if (value <= 1) {
            dialog.style.visibility = "hidden";
            document.getElementById('dialog-mask').style.visibility = "hidden";
            dialogclose.style.visibility = "hidden";
            clearInterval(dialog.timer);
            if (dialog.handler) {
                dialog.handler(dialog.returnValue);
                dialog.handler = null;
                dialog.returnValue = null;
            }
        }
    }
    
}
//title,message,type,autohide
// display Error Msgbox
function ErrorBox(strMsg, autohide, animate) {

    showDialog(MSG_ERROR_MESSAGE, strMsg, 'error', autohide, animate);
    //msgbox strMsg,vbOKOnly + vbCritical + vbMsgBoxRtlReading + vbMsgBoxRight,"הודעת מערכת"
}

// display Info Msgbox
function InfoBox(strMsg, autohide, animate) {

    showDialog(MSG_INFO_MESSAGE, strMsg, 'success', autohide, animate);
    //msgbox strMsg,vbOKOnly + vbInformation + vbMsgBoxRtlReading + vbMsgBoxRight	,""
}

// display Warning Msgbox
function WarningBox(strMsg, autohide, animate) {

    showDialog(MSG_WARNING_MESSAGE, strMsg, 'warning', autohide, animate);
    //msgbox strMsg,vbOKOnly + vbExclamation + vbMsgBoxRtlReading + vbMsgBoxRight	,"הודעת מערכת"	
}

function ConfirmBox(strMsg, intButtons, title, ptr, stringValues, cancelValue, animate) {
    //autohide is not an option in answerbox.

    if (!title) { title = MSG_SYSTEM_MESSAGE; }


    //answerBox = msgbox (strMsg, intButtons + vbQuestion + vbMsgBoxRtlReading + vbMsgBoxRight	,"הודעת מערכת"	 )
    //create the answer box with user values
    var btnTextValues = new Array();
    //var msgHandlers = new Array();
    var tbl;
    if (animate == undefined) {animate = _Animate;}
    showDialog(title, strMsg, 'prompt', animate);

    switch (intButtons) {
        case 0: //0 = vbOKOnly - OK button only (1 button)
            {
                btnTextValues = new Array(1);
                btnTextValues[0] = new Array(2);
                btnTextValues[0][0] = MSG_OK;
                btnTextValues[0][1] = 1;
                tbl = CreateTable(1, btnTextValues, ptr, cancelValue, animate);

                break;
            }
        case 1: //1 = vbOKCancel - OK and Cancel buttons (2 button)
            {
                btnTextValues = new Array(2);
                btnTextValues[0] = new Array(2);
                btnTextValues[0][0] = MSG_OK;
                btnTextValues[0][1] = 1;
                btnTextValues[1] = new Array(2);
                btnTextValues[1][0] = MSG_CANCEL;
                btnTextValues[1][1] = 2;
                tbl = CreateTable(2, btnTextValues, ptr, cancelValue, animate);

                break;
            }
        case 2: //2 = vbAbortRetryIgnore - Abort, Retry, and Ignore buttons(3 button)
            {
                btnTextValues = new Array(3);
                btnTextValues[0] = new Array(2);
                btnTextValues[0][0] = MSG_ABORT;
                btnTextValues[0][1] = 3;
                btnTextValues[1] = new Array(2);
                btnTextValues[1][0] = MSG_RETRY;
                btnTextValues[1][1] = 4;
                btnTextValues[2] = new Array(2);
                btnTextValues[2][0] = MSG_IGNORE;
                btnTextValues[2][1] = 5;
                tbl = CreateTable(3, btnTextValues, ptr, cancelValue, animate);

                break;
            }
        case 3: //3 = vbYesNoCancel - Yes, No, and Cancel buttons (3 button)
            {

                btnTextValues = new Array(3);
                btnTextValues[0] = new Array(2);
                btnTextValues[0][0] = MSG_YES;
                btnTextValues[0][1] = 6;
                btnTextValues[1] = new Array(2);
                btnTextValues[1][0] = MSG_NO;
                btnTextValues[1][1] = 7;
                btnTextValues[2] = new Array(2);
                btnTextValues[2][0] = MSG_CANCEL;
                btnTextValues[2][1] = 2;
                tbl = CreateTable(3, btnTextValues, ptr, cancelValue, animate);

                break;
            }
        case 4: //4 = vbYesNo - Yes and No buttons (2 button)
            {

                btnTextValues = new Array(2);
                btnTextValues[0] = new Array(2);
                btnTextValues[0][0] = MSG_YES;
                btnTextValues[0][1] = 6;
                btnTextValues[1] = new Array(2);
                btnTextValues[1][0] = MSG_NO;
                btnTextValues[1][1] = 7;
                tbl = CreateTable(2, btnTextValues, ptr, cancelValue, animate);

                break;
            }
        case 5: //5 = vbRetryCancel - Retry and Cancel buttons (2 button)
            {
                btnTextValues = new Array(2);
                btnTextValues[0] = new Array(2);
                btnTextValues[0][0] = MSG_RETRY;
                btnTextValues[0][1] = 4;
                btnTextValues[1] = new Array(2);
                btnTextValues[1][0] = MSG_CANCEL;
                btnTextValues[1][1] = 2;
                tbl = CreateTable(2, btnTextValues, ptr, cancelValue, animate);

                break;
            }
        case 9:
            {
                if (stringValues) {
                    var splitStr = new Array();
                    splitStr = stringValues.toString().split('|');
                    if (splitStr.length > 0) {
                        btnTextValues = new Array(splitStr.length - 1);
                        for (z = 0; z < splitStr.length; z++) {
                            btnTextValues[z] = new Array(2);
                            btnTextValues[z][0] = splitStr[z];
                            btnTextValues[z][1] = splitStr[z];
                        }
                        tbl = CreateTable(splitStr.length, btnTextValues, ptr, cancelValue, animate);
                    }
                }
                else
                { return; }
            }
    }
    //document.cancelBubble = true;
    //window.event.cancelBubble = true;
    //TIMER = 0;

    //put the table in the message

    var dialogcontent = document.getElementById('dialog-contentfooter');
    var dialogpos = document.getElementById('dialog');

    dialogcontent.appendChild(tbl);

    //var dialog = document.getElementById('dialog');

    var dialogwidth = dialogpos.offsetWidth;
    //var dialogheight = dialog.offsetHeight / 3;

    //tbl.style.top = dialogheight * 2 + "px";
    tbl.style.left = dialogwidth / 2 - tbl.offsetWidth / 2 + "px";
    tbl.style.position = "absolute";
}

function CreateTable(cellNumber, btnValues, Handler, cancelValue,animate) {
    //create the table to fill the buttons.
    //create the buttons with click events to return the values.
    //put the buttons in the table
    // creates a <table> element and a <tbody> element
    //var strFunc = 0;


    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // creates a table row
    var row = document.createElement("tr");
    var dialog = document.getElementById('dialog');

    // creating all cells
    for (var i = 0; i < cellNumber; i++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var elem = document.createElement("input");
        intRetValue = i;
        elem.setAttribute("id", "btn" + i.toString());
        elem.setAttribute("value", btnValues[i][0]);
        elem.setAttribute("alt", btnValues[i][0]);
        elem.setAttribute("type", "button");
        elem.returnValue = btnValues[intRetValue][1];

        elem.onclick = function(e) {
            //check for ie or ff.
            if (window.event) e = window.event;
            var srcEl = e.srcElement ? e.srcElement : e.target;
            dialog.handler = Handler;
            dialog.returnValue = srcEl.returnValue;
            hideDialog(animate);
        };

        //new to version 3.7.4.0 close button will return cancel value.
        if (cancelValue) {
            dialogclose = document.getElementById('dialog-close');
            dialogclose.onclick = function() {
                dialog.handler = Handler;
                dialog.returnValue = cancelValue;
                hideDialog(animate);
                dialogclose.style.visibility = "hidden";
            };
        }

        elem.className = "promptButton";
        elem.style.width = 100 + 'px';
        cell.appendChild(elem);
        cell.style.margin = 10 + 'px';
        row.appendChild(cell);
    }
    //i = 0;
    // add the row to the end of the table body
    tblBody.appendChild(row);
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // sets the border attribute of tbl to 2;
    //tbl.setAttribute("border", "2");
    tbl.style.width = (110 * cellNumber) + 'px';

    return tbl;
}
function createDialogOkButton(type, animate) {
    if (animate == undefined) {animate - _Animate;}
    var elem = document.createElement("input");
    elem.setAttribute("id", "btnok");
    elem.setAttribute("value", MSG_OK);
    elem.setAttribute("alt", MSG_OK);
    elem.setAttribute("type", "button");

    elem.onclick = function(e) {
        //check for ie or ff.
        hideDialog(animate);
    };

    elem.className = type + "Button";
    elem.style.width = 100 + 'px';

    var dialogcontent = document.getElementById('dialog-contentfooter');
    dialogcontent.appendChild(elem);

    var dialogpos = document.getElementById('dialog');
    var dialogwidth = dialogpos.offsetWidth;
    elem.style.left = dialogwidth / 2 - elem.offsetWidth / 2 + "px";
    elem.style.position = "absolute";
}



if (typeof (Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();
//return values for vb msgbox
//1 = vbOK - OK was clicked 
//2 = vbCancel - Cancel was clicked 
//3 = vbAbort - Abort was clicked 
//4 = vbRetry - Retry was clicked 
//5 = vbIgnore - Ignore was clicked 
//6 = vbYes - Yes was clicked 
//7 = vbNo - No was clicked 

//sent parameters for msgbox values
//0 = vbOKOnly - OK button only 
//1 = vbOKCancel - OK and Cancel buttons 
//2 = vbAbortRetryIgnore - Abort, Retry, and Ignore buttons 
//3 = vbYesNoCancel - Yes, No, and Cancel buttons 
//4 = vbYesNo - Yes and No buttons 
//5 = vbRetryCancel - Retry and Cancel buttons 
//16 = vbCritical - Critical Message icon 
//32 = vbQuestion - Warning Query icon 
//48 = vbExclamation - Warning Message icon 
//64 = vbInformation - Information Message icon 
//0 = vbDefaultButton1 - First button is default 
//256 = vbDefaultButton2 - Second button is default 
//512 = vbDefaultButton3 - Third button is default 
//768 = vbDefaultButton4 - Fourth button is default 
