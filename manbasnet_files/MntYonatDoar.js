
﻿var prefix_master='#ctl00_';var tshuva_le_yona=null;function IsShowYonaMessage(){if($(prefix_master+'hfIsShowYonaMessage').val()=='True'){return true;}else{return false;}}
function IsOpenYonaWindow(){if($(prefix_master+'hfIsOpenYonaWindow').val()=='True'){return true;}else{return false;}}
function IsShowYonaMessageInThisSession(){if(readCookie("yonaMessage")!="1"){return true;}else{return false;}}
function IsOpenYonaWindowInThisSession(){if(readCookie("yonaWindow")!="1"){return true;}else{return false;}}
function ShowYonaMessage(){try{$.ajax({type:"POST",url:"/MntNet/YonatDoar/MntYonatDoar.aspx/GetMessage",data:"{}",contentType:"application/json; charset=utf-8",dataType:"json",success:function(response){ConfirmBox(response.d,0,'',Save);$('#dialog-innercontent > input[type="radio"]').change(function(){tshuva_le_yona=$(this).val();});createCookie("yonaMessage","1",0);},error:function(errMsg){ErrorLine('');}});}catch(e){ErrorLine(e.message);}}
function pop2under(mypopunder){try{mypopunder.blur();mypopunder.opener.window.focus();window.self.window.blur();window.focus();if($.browser.mozilla){openCloseWindow();};if($.browser.webkit||$.browser.safari){openCloseTab();};}catch(e){};};function openCloseWindow(){var ghost=window.open("about:blank");ghost.focus();ghost.close();};function openCloseTab(){var ghost=document.createElement("a");ghost.href="about:blank";ghost.target="PopHelper";document.getElementsByTagName("body")[0].appendChild(ghost);ghost.parentNode.removeChild(ghost);var clk=document.createEvent("MouseEvents");clk.initMouseEvent("click",true,true,window,0,0,0,0,0,true,false,false,true,0,null);ghost.dispatchEvent(clk);window.open("about:blank","PopHelper").close();};function OpenYonaWindow(){var w=screen.width;var h=screen.height;var xOffset=0;var yOffset=0;var _parent=(top!=self&&typeof(top.document.location.toString())==="string")?top:self;mypopunder=_parent.window.open('http://hinuch.education.gov.il/EduLoginLiveSso','Yona','width='+w+',height='+h+',top='+yOffset+',left='+xOffset+',location=yes,menubar=no,resizable=yes,scrollbars=yes,status=yes,titlebar=yes,toolbar=yes');if($.browser.msie){mypopunder.blur();window.focus();}
else{pop2under(mypopunder);}
createCookie("yonaWindow","1",0);}
$(document).ready(function(){if(IsShowYonaMessage()&&IsShowYonaMessageInThisSession())
ShowYonaMessage();if(IsOpenYonaWindow()&&IsOpenYonaWindowInThisSession())
OpenYonaWindow();});function Save(n){if(tshuva_le_yona!=null){try{$.ajax({type:"POST",url:"/MntNet/YonatDoar/MntYonatDoar.aspx/Save",data:"{'userAnswer': '"+tshuva_le_yona.toString()+"'}",contentType:"application/json; charset=utf-8",dataType:"json",success:function(response){if(response=false){showError('error code:1');}},error:function(errMsg){showError('');}});}catch(e){showError(e.message);}}}
function showError(errMsg){ErrorLine('שמירת נתונים נכשלה. יש לנסות שנית. '+errMsg);}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/";}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function eraseCookie(name){createCookie(name,"",-1);}
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();