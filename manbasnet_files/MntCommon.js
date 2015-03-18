
﻿
function popUpWindow(url,w,h){if(w==null){w=850;}
if(h==null){h=600;}
var xMax;var yMax;if(document.all)
xMax=screen.width,yMax=screen.height;else
if(document.layers)
xMax=window.outerWidth,yMax=window.outerHeight;else
xMax=640,yMax=480;var xOffset=xMax/2-w/2,yOffset=yMax/2-h/2;window.open(url,"_blank",'width='+w+',height='+h+',top='+yOffset+',left='+xOffset+',toolbar=no,location=no,directories=no,status=yes,resizable=no');}
function MntErrorBox(descr){ErrorBox(descr,20);}
function MntInfoBox(descr){InfoBox(descr,20);}
function MntWarningBox(descr){WarningBox(descr,20);}
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();