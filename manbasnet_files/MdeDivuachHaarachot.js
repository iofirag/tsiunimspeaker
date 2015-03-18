
﻿var selectedrow;var selected_tz;var prefix='#ctl00_Main_';var misparMarkivim;var isEruaTkufati;var isAllowedExit=false;var img=0;var img2=0;var sumNikudMarkivim;var selectedMin;var ieRow;var haimLeshaklelMarkivim;var haimLeftTabVisible=true;var haimEruaMehanech;var haimEruaMehunanim;var haimEruaBagrutHevratit;var shitatNikud;var isTsiunMarkivExist=false;$(document).ready(function(){if($.browser.msie&&$.browser.version<8){$('#divright').height($('#divright').height()+20)}
haimEruaMehanech=$(prefix+'hfEruaMehanech').val();$(prefix+'pMarkivim').height($('#divright').height()-$('#tsiunsofi').height()-($('#spanlibhor').height()*0.8));$(prefix+'egvTalmidim tr > td:nth-child(4)  > div > span > input[type="radio"]:checked').each(function(){IbitsuaClickSub(this);});misparMarkivim=$(prefix+'hfHasMarkivim').val();isEruaTkufati=$(prefix+'hfEruaTkufati').val();haimLeshaklelMarkivim=$(prefix+'hfHaimLeshaklelMarkivim').val();shitatNikud=$(prefix+'hfShitatNikud').val();if(shitatNikud=="2"){$(prefix+'egvTalmidimHeader tr > th:gt(6)').find('span > span').text('%');$(prefix+'egvTalmidimHeader_ctl01_Label8').text('חישוב ציוני מרכיבי האירוע');}
else{$(prefix+'egvTalmidimHeader tr > th:gt(6)').find('span > span').text(" נק'");}
BindEvents();var textarea=$('textarea');var limnum=$(prefix+'hfLimNum').val();textarea.change(function(){Changed()});textarea.keyup(function(){LimitText(this,limnum);});textarea.keydown(function(){LimitText(this,limnum);});$('#SumTalmidim').text($(prefix+'egvTalmidim tr').length);CalcBitsuaIbitsua();$('#imgResize').click(function(){if(img==0){$('#divright').width('100%');$('#divleft').css('display','none');var pic=$(this);$('#imagesResize').css('left','1%');pic.attr('src','../App_Themes/mde/images/mdeimages/right_arr.png');img=1;haimLeftTabVisible=false;$('#imgResize2').css('display','none');}else{$('#divright').width('70%');$('#divleft').css('display','inherit');var pic=$(this);$('#imagesResize').css('left','30%');pic.attr('src','../App_Themes/mde/images/mdeimages/left_arr.png');img=0;haimLeftTabVisible=true;if(selectedrow!=null){RowClick(selectedrow[0])}
$('#imgResize2').css('display','inherit');}});$('#imgResize2').click(function(){if(img2==0){$('#divright').width('39%');$('#divleft').width('60%');var pic=$(this);$('#imagesResize').css('left','60%');pic.attr('src','../App_Themes/mde/images/mdeimages/left_arr.png');img2=1;$('#imgResize').css('display','none');}else{$('#divright').width('70%');$('#divleft').width('29%');var pic=$(this);$('#imagesResize').css('left','30%');pic.attr('src','../App_Themes/mde/images/mdeimages/right_arr.png');img2=0;$('#imgResize').css('display','inherit');}});function setWideLeftPanel(){$('#divright').width('39%');$('#divleft').width('60%');var pic=$('#imgResize2');$('#imagesResize').css('left','60%');$('#imgResize2').attr('src','../App_Themes/mde/images/mdeimages/left_arr.png');img2=1;img=0;$('#imgResize2').css('display','inherit');$('#imgResize').css('display','none');}
sumNikudMarkivim=parseInt($(prefix+'hfSumNikudMarkivim').val());if(shitatNikud=="2"){$(prefix+'egvTalmidimHeader_ctl01_Labelscum').text("["+sumNikudMarkivim.toString()+"%]");}
else{$(prefix+'egvTalmidimHeader_ctl01_Labelscum').text("["+sumNikudMarkivim.toString()+" נק']");}
if((isEruaTkufati=='False')||(haimLeshaklelMarkivim=='True')){$(prefix+'egvTalmidim tr').each(function(){HishuvTsiunSofi($(this));});}
CalcMemutsaForGrid();SetConfirmUnload();if($(prefix+'hfIsAnyTsiunMarkivExist').val()=='True'){isAnyTsiunMarkivExist=true;}else{isAnyTsiunMarkivExist=false;}
if(sumNikudMarkivim==100||(isEruaTkufati=='True')||isAnyTsiunMarkivExist==false){$(prefix+'egvTalmidimHeader tr > th:nth-child(7)').css('display','none');$(prefix+'egvTalmidim tr > td:nth-child(6)').css('display','none');$(prefix+'gvTalmidimFooter tr > td:nth-child(7)').css('display','none');}
SetHegedimDDL();if(haimEruaMehanech=='True'){EruaMehanechDisableInput();}
if($(prefix+'hfEruaMehunanim').val()=='True'){haimEruaMehunanim=true;}else{haimEruaMehunanim=false;}
if($(prefix+'hfEruaBagrutHevratit').val()=='True'){haimEruaBagrutHevratit=true;}else{haimEruaBagrutHevratit=false;}
SetOfenDivuach();if(haimEruaBagrutHevratit==true){setWideLeftPanel();}});function SetOfenDivuach(){if(ofendivuacherua.Haaracha==4){$(prefix+'egvTalmidimHeader tr > th:nth-child(6)').css('display','none');$(prefix+'egvTalmidim tr > td:nth-child(5)').css('display','none');$(prefix+'gvTalmidimFooter tr > td:nth-child(6)').css('display','none');}else{if(ofendivuacherua.Haaracha==3){$(prefix+'egvTalmidim tr > td:nth-child(5)').find('input[type="text"]').attr('disabled','disabled');}}
if(ofendivuacherua.MaagarHaaracha==4){$("#dhegedErua").css('display','none');}else{if(ofendivuacherua.MaagarHaaracha==3){$("#dhegedErua").find('input,select').attr('disabled','disabled');}}
if(ofendivuacherua.Heara==4){$("#dhearaErua").css('display','none');}else{if(ofendivuacherua.Heara==3){$("#dhearaErua").find('textarea').attr('disabled','disabled');}}
var m=$(prefix+'egvTalmidim .MarkivCode3').find('input[type="text"]').attr('disabled','disabled');if($.browser.msie){m.addClass('DisabledInput');}}
function BindEvents(){$(prefix+'rbLoMutsdak').change(function(){Ibitsua_Changed(this)});$(prefix+'rbMutsdak').change(function(){Ibitsua_Changed(this)});$('select').change(function(){Changed()});$('input[type="text"]').change(function(){Changed()});$('input[type="radio"]').change(function(){Changed()});$('input[type="checkbox"]').change(function(){Changed()});var misparheged=$(prefix+'tbMisparHeged');misparheged.change(function(){MisparHegedChanged(this)});misparheged.keypress(function(e){PreventSubmit(e)});$(prefix+'ddlHegedZachar').change(function(){HegedDDLChanged(this)});$(prefix+'ddlHegedNekeva').change(function(){HegedDDLChanged(this)});var markivimddl=$('#markivim select');markivimddl.bind('blur',function(){CopyMarkivimToGrid()});markivimddl.change(function(){HegedDDLChanged(this)});var markiviminput=$('#markivim input[type="text"]');markiviminput.bind('blur',function(){CopyMarkivimToGrid()});markiviminput.change(function(){MisparHegedChanged(this)});markiviminput.keypress(function(e){PreventSubmit(e)});$(prefix+'egvTalmidim input[type="text"]').keydown(function(event){KeyControls(event)});$('#talmidHaba').click(function(){TalmidHabaClick()});$('#talmidKodem').click(function(){TalmidKodemClick()});}
function pageLoad(){$(prefix+'bShmira,'+prefix+'bBitul,'+prefix+'bHazara,'+prefix+'bPirteyErua').click(function(){isAllowedExit=true});}
function LimitText(limitField,limitNum){if(limitField.value.length>limitNum){limitField.value=limitField.value.substring(0,limitNum);}}
function Changed(){$(prefix+'bShmira').removeAttr('disabled');$(prefix+'bBitul').removeAttr('disabled');$(prefix+'hfIsAnyChanges').val('1');ClearMsgLine();}
function RowClick(e){if(selectedrow!=null)
selectedrow.removeClass('EduGridViewSelectedRow')
selectedrow=$(e);selectedrow.addClass('EduGridViewSelectedRow');if(haimLeftTabVisible){var shownomark=false;if(isEruaTkufati=='False'){var radiodiv=selectedrow.children('td:eq(3)').children('div');if(radiodiv.find('input[type="radio"]:checked').length>0){if(radiodiv.children('input[type="radio"]:checked').length==1){EnableMarkivimHeara();$('#bitsua').addClass('VisibleFalse');}else{DisableMarkivimHeara();if(haimEruaMehunanim==false&&(ofendivuacherua.MaagarHaaracha!=4&&ofendivuacherua.Heara!=4))
$('#bitsua').removeClass('VisibleFalse');}}
else{shownomark=true;}}
else{$('#bitsua').addClass('VisibleFalse');}
var docopy=true;var td0=selectedrow.children('td:eq(0)');var tz=td0.children('input[type="hidden"]:eq(0)').val().toString();var student=$('#student');if(shownomark){$('#nomark').removeClass('VisibleFalse');$('#noselect').addClass('VisibleFalse');student.removeClass('VisibleFalse');$('#tsiunsofi').addClass('VisibleFalse');$('#markivim').addClass('VisibleFalse');}
else{$('#nomark').addClass('VisibleFalse');$('#noselect').addClass('VisibleFalse');student.removeClass('VisibleFalse');if(haimEruaBagrutHevratit==false){$('#tsiunsofi').removeClass('VisibleFalse');}
if(misparMarkivim>0)
$('#markivim').removeClass('VisibleFalse');}
if(selected_tz!=null&&selected_tz==tz){docopy=false;}
else{selected_tz=tz;}
if(docopy){tz=tz.split("#")[0];var min=td0.children('input[type="hidden"]').eq('1').val().toString();selectedMin=min;var mishpaha=td0.find('span').first().text();var prati=selectedrow.children('td:eq(1)').find('span').first().text();var kita=selectedrow.children('td:eq(2)').find('span').first().text();var talmidstring;if(min==1){talmidstring='תלמיד - ';$(prefix+'ddlHegedZachar').removeClass('VisibleFalse');$(prefix+'ddlHegedNekeva').addClass('VisibleFalse');$('#markivim .HegedMarkivZachar').removeClass('VisibleFalse');$('#markivim .HegedMarkivNekeva').addClass('VisibleFalse');}else{talmidstring='תלמידה - ';$(prefix+'ddlHegedNekeva').removeClass('VisibleFalse');$(prefix+'ddlHegedZachar').addClass('VisibleFalse');$('#markivim .HegedMarkivZachar').addClass('VisibleFalse');$('#markivim .HegedMarkivNekeva').removeClass('VisibleFalse');}
$('#studentLabel').find('span').first().text(talmidstring+mishpaha+' '+prati+' ('+kita+' , '+tz+')');var s;var sr;var id;var text;var divm;var obj;selectedrow.children('td:gt(5)').each(function(){obj=$(this).children('input[type="hidden"]');s=obj.first().val();sr=s.toString().split("#");id=sr[0];text=sr[1];$(prefix+'div_'+id+' > div > textarea').val(text);text=obj.eq('1').val();divm=$(prefix+'div_'+id+' > div').first();var selectnum;if(selectedMin==1){selectnum=0;}else{selectnum=1;}
if(text==""){text="-1"}
divm.children('select').eq(selectnum).val(text);if(text!="-1"){divm.children('input[type="text"]').first().val(text);}else{divm.children('input[type="text"]').first().val('');}});text=selectedrow.children('td:eq(4)').children('input[type="hidden"]').first().val();$(prefix+'tbHearaTsiunSofi').val(text);text=selectedrow.children('td:eq(4)').children('input[type="hidden"]').eq('1').val();if(min==1){$(prefix+'ddlHegedZachar').val(text);}else{$(prefix+'ddlHegedNekeva').val(text);}
if(text!="-1"){$(prefix+'tbMisparHeged').val(text);}else{$(prefix+'tbMisparHeged').val('');}
s=selectedrow.children('td:eq(1)').children('input').first().val();sr=s.toString().split("#");if(sr[0]!=''){if(sr[0]=='True')
$(prefix+'rbMutsdak').attr('checked',true)
else
$(prefix+'rbLoMutsdak').attr('checked',true)}
else{$(prefix+'rbMutsdak').removeAttr('checked')
$(prefix+'rbLoMutsdak').removeAttr('checked')}
$(prefix+'ddlSiba').val(sr[1]);}}}
function CopyMarkivimToGrid(){var markiv_hidden;selectedrow.children('td:gt(5)').each(function(){markiv_hidden=$(this).children('input[type="hidden"]').first();s=markiv_hidden.val();sr=s.toString().split("#");id=sr[0];var markivhearanew=id+'#'+($(prefix+'div_'+id+'> div > textarea').val());if(markiv_hidden.val()!=markivhearanew){markiv_hidden.val(markivhearanew);$(this).children('input:hidden:eq(3)').val('1');}
var selectnum;if(selectedMin==1){selectnum=0;}else{selectnum=1;}
var heged_hidden=$(this).children('input[type="hidden"]').eq('1');var hegednew=$(prefix+'div_'+id+'> div > select').eq(selectnum).val();if(heged_hidden.val()!=hegednew){heged_hidden.val(hegednew);$(this).children('input:hidden:eq(2)').val('1');}});}
function CopyTsiunSofiToGrid(){var inputheara=selectedrow.children('td:eq(4)').children('input[type="hidden"]').first();var heara=$(prefix+'tbHearaTsiunSofi').val();if(inputheara.val()!=heara){inputheara.val(heara);selectedrow.children('td:eq(0)').children('input[type="hidden"]').eq('2').val('1');}
var inputheged=selectedrow.children('td:eq(4)').children('input[type="hidden"]').eq('1');var heged;if(selectedMin==1){heged=$(prefix+'ddlHegedZachar').val();}else{heged=$(prefix+'ddlHegedNekeva').val();}
if(inputheged.val()!=heged){inputheged.val(heged);selectedrow.children('td:eq(0)').children('input[type="hidden"]').eq('2').val('1');}}
function HegedDDLChanged(p){var jobj=$(p);var v=jobj.val();if(v!="-1"){jobj.closest('div').children('input[type="text"]').first().val(v);}else{jobj.closest('div').children('input[type="text"]').first().val('');}}
function MisparHegedChanged(p){var jobj=$(p);var v=jobj.val();if(v==""){v="-1";}
var vtocheck;if(selectedMin==1){var select=jobj.closest('div').children('select').eq(0);select.val(v);vtocheck=select.val();}else{var select=jobj.closest('div').children('select').eq(1);select.val(v);vtocheck=select.val();}
if(vtocheck!=v){MntWarningBox($(prefix+'hfMessage138').val());}}
function Ibitsua_Changed(){var mutsdak='';if($(prefix+'rbMutsdak').attr('checked')=='checked'){mutsdak='True'}
if($(prefix+'rbLoMutsdak').attr('checked')=='checked'){mutsdak='False'}
selectedrow.children('td:eq(1)').children('input[type="hidden"]').first().val(mutsdak+'#'+$(prefix+'ddlSiba').val());selectedrow.children('td:eq(0)').children('input[type="hidden"]').eq('2').val('1');}
function BitsuaClick(e){var r=$(e).parent().parent().parent();if(haimEruaMehanech=='False'){var markivim=r.children('td:gt(4):not(.MarkivCode3)').children('div').children('input:text');markivim.removeAttr('disabled');if($.browser.msie){markivim.removeClass('DisabledInput');}}
r.children('td:eq(5)').children('div').children('span').removeAttr('disabled');r.children('td:eq(0)').children('input[type="hidden"]').eq('2').val('1');CalcBitsuaIbitsua();CalcMemutsaForGrid();}
function IbitsuaClick(e){IbitsuaClickSub(e);var r=$(e).parent().parent().parent().parent();r.children('td:eq(0)').children('input[type="hidden"]').eq('2').val('1');CalcBitsuaIbitsua();CalcMemutsaForGrid();}
function IbitsuaClickSub(e){var r=$(e).parent().parent().parent().parent();if(haimEruaMehanech=='False'){var markivim=r.children('td:gt(4):not(.MarkivCode3)').children('div').children('input:text');markivim.attr('disabled','disabled');if($.browser.msie){markivim.addClass('DisabledInput');}}
r.children('td:eq(5)').children('div').children('span').attr('disabled','disabled');}
function DisableMarkivimHeara(){var markivimHeara=$('#markivim').find('textarea:not(.MarkivCode3),input:not(.MarkivCode3),select:not(.MarkivCode3)')
markivimHeara.attr('disabled','disabled');if($.browser.msie){markivimHeara.addClass('DisabledInput');}}
function EnableMarkivimHeara(){var markivimHeara=$('#markivim').find('textarea:not(.MarkivCode3),input:not(.MarkivCode3),select:not(.MarkivCode3)')
markivimHeara.removeAttr('disabled');if($.browser.msie){markivimHeara.removeClass('DisabledInput');}}
function TsiunChanged(e){var je=$(e);if(isEruaTkufati=='False'){je.parent().parent().parent().children('td:eq(3)').children('div').children('input').attr('checked',true);}
je.parent().parent().parent().children('td:eq(0)').children('input[type="hidden"]').eq('2').val('1');FilterNumbers(je);if(je.val()!=''){je.parent().children('span').removeClass('VisibleFalse');je.parent().children('input[type="hidden"]').first().val('True');je.parent().parent().attr('align','right');if(je.val()>100){je.val('100')}}
else
{je.parent().children('span').addClass('VisibleFalse');je.parent().children('input[type="hidden"]').first().val('False');je.parent().parent().attr('align','center');if((isEruaTkufati=='False')||(haimLeshaklelMarkivim=='True')){if($.browser.msie){ieRow=je.parent().parent().parent();setTimeout("HishuvTsiunSofi(ieRow)",300);}
else{HishuvTsiunSofi(je.parent().parent().parent());}}
else{var row=je.parent().parent().parent()
var tsiunMehushavTkufati=row.children('td:eq(3)').children('div').children('span').text();row.children('td:eq(4)').children('div').children('input[type="text"]').val(tsiunMehushavTkufati);row.children('td:eq(4)').children('div').children('input[type="hidden"]').first().val('False');}}
CalcMemutsa(4);}
function TsiunMarkivChanged(e){var je=$(e);var row=je.parent().parent().parent();row.children('td:eq(3)').children('div').children('input').attr('checked',true);FilterNumbers(je);var nikud;if(shitatNikud=='2'){nikud=100}
else{var header=$(prefix+'egvTalmidimHeader tr').first();nikud=header.children('th:eq('+parseInt(je.closest('td').index()+1)+')').children('div').children('input[type="hidden"]').val()}
if(nikud!=0){if(parseInt(je.val())>nikud){if(haimEruaMehunanim){je.val('')}else{je.val(nikud)}}}
CalcMemutsa(je.closest('td').index());if(row.children('td:eq(4)').children('div').children('span').hasClass('VisibleFalse')){row.children('td:eq(0)').children('input[type="hidden"]').eq('2').val('1');}
je.parent().parent().children('input[type="hidden"]').eq('3').val('1');if((isEruaTkufati=='False')||(haimLeshaklelMarkivim=='True')){HishuvTsiunSofi(row);}}
function HishuvTsiunSofi(row){var sumMarkivim=0;var sumMarkivimLeTsiunSofi=0;var sumCiunimKafulNikud=0;var header=$(prefix+'egvTalmidimHeader tr').first();var allempty=true;var allemptyWithNikud=true;row.children('td:gt(5)').children('div').children('input').each(function(){var n=parseInt($(this).val());if(!isNaN(n)){sumMarkivim+=n;var nikud=header.children('th:eq('+parseInt($(this).closest('td').index()+1)+')').children('div').children('input[type="hidden"]').val()
if(nikud!=0){sumMarkivimLeTsiunSofi+=n;sumCiunimKafulNikud+=(n*nikud);allemptyWithNikud=false;}
allempty=false;}});var tsiunMehushav=0;if(sumNikudMarkivim!=0){if(shitatNikud=='2'){tsiunMehushav=Math.round(sumCiunimKafulNikud/sumNikudMarkivim);}
else{tsiunMehushav=Math.round((100/sumNikudMarkivim)*sumMarkivimLeTsiunSofi);}}
if(row.children('td:eq(4)').children('div').children('span').hasClass('VisibleFalse')){if(!allemptyWithNikud){row.children('td:eq(4)').children('div').children('input[type="text"]').val(tsiunMehushav);row.children('td:eq(4)').children('div').children('input[type="hidden"]').first().val('False');}else{row.children('td:eq(4)').children('div').children('input[type="text"]').val('');row.children('td:eq(4)').children('div').children('input[type="hidden"]').first().val('');}}
if(!allempty){if(shitatNikud=='2'){row.children('td:eq(5)').children('div').children('span').text(Math.round(sumCiunimKafulNikud/100));}
else{row.children('td:eq(5)').children('div').children('span').text(sumMarkivim);}}else{row.children('td:eq(5)').children('div').children('span').text('');}
CalcMemutsaForSumMarkivim(5);CalcMemutsa(4);}
function FilterNumbers(e){e.val(e.val().replace(/\D/g,''));}
function FilterMe(event,e){var evt=event||window.event;var keyPressed=evt.which||evt.keyCode;if(keyPressed!=37&&keyPressed!=38&&keyPressed!=39&&keyPressed!=40&&keyPressed!=13){je=$(e);FilterNumbers(je);if(je.hasClass('tsiunSofi')){TsiunChanged(e);}else{TsiunMarkivChanged(e);}
Changed();}}
function SimunKulam(chb){if($(chb).attr("checked")){$(prefix+'egvTalmidim tr > td:nth-child(4) div > input:radio').attr('checked','checked');if(haimEruaMehanech=='False'){var textboxes2=[];$(prefix+'egvTalmidim tr').each(function(i,e){textboxes2.push($(e).children('td:gt(4)').find('input[type="text"]'));});for(var i=0;i<textboxes2.length;i++){textboxes2[i].removeAttr('disabled');if($.browser.msie){textboxes2[i].removeClass('DisabledInput');}}
$(prefix+'egvTalmidim tr > td:nth-child(6) div > span').removeAttr('disabled');}
if(selectedrow!=null)
selectedrow.click();}else{$(prefix+'egvTalmidim tr > td:nth-child(4) div > input[type="radio"]').removeAttr('checked');if(selectedrow!=null)
selectedrow.click();}
$(prefix+'egvTalmidim tr > td:nth-child(1) > input[type="hidden"]:nth-child(4)').val('1');CalcBitsuaIbitsua();CalcMemutsaForGrid();}
function CalcBitsuaIbitsua(){$('#numBitsua').text($(prefix+'egvTalmidim tr > td:nth-child(4)  > div > input[type="radio"]:checked').length);$('#numIbitsua').text($(prefix+'egvTalmidim tr > td:nth-child(4)  > div > span > input[type="radio"]:checked').length);}
function CalcMemutsa(colnum){var sum=0;var allempty=true;var colnumForTable=colnum+1;var talmidimImTsiun=0;$(prefix+'egvTalmidim tr > td:nth-child('+colnumForTable+') > div').children('input[type="text"]:enabled').each(function(){var n=parseInt($(this).val());if(!isNaN(n)){sum+=n;allempty=false;talmidimImTsiun+=1;}});var memucalabel=$(prefix+'gvTalmidimFooter tr > td:eq('+colnumForTable+') > div > span');if(allempty||talmidimImTsiun==0){memucalabel.text('');}else{memucalabel.text((sum/talmidimImTsiun).toFixed(1));}}
function CalcMemutsaForSumMarkivim(colnum){var sum=0;var allempty=true;var colnumForTable=colnum+1;var talmidimImTsiun=0;$(prefix+'egvTalmidim tr > td:nth-child('+colnumForTable+') > div').children('span').not('[disabled]').each(function(){var n=parseInt($(this).text());if(!isNaN(n)){sum+=n;allempty=false;talmidimImTsiun+=1;}});var memucalabel=$(prefix+'gvTalmidimFooter tr > td:eq('+colnumForTable+') > div > span');if(allempty||talmidimImTsiun==0){memucalabel.text('');}else{memucalabel.text((sum/talmidimImTsiun).toFixed(1));}}
function CalcMemutsaForGrid(){if(isEruaTkufati=='True'){CalcMemutsaForSumMarkivim(3);CalcMemutsa(4);}
else{CalcMemutsa(4);CalcMemutsaForSumMarkivim(5);}
for(var i=0;i<misparMarkivim;i++){CalcMemutsa(i+6);};}
function SetConfirmUnload(){window.onbeforeunload=function(){if(!isAllowedExit&&$(prefix+'hfIsAnyChanges').val()=='1')
return $(prefix+'hfMessage60').val();};}
function ResetRowChanges(){$(prefix+'egvTalmidim tr > td:nth-child(1) > input[type="hidden"]:nth-child(4)').val('');$(prefix+'egvTalmidim tr').each(function(){var markivimtd=$(this).children('td:gt(5)');markivimtd.children('input[type="hidden"]:nth-child(4)').val('');markivimtd.children('input[type="hidden"]:nth-child(5)').val('');});}
function SetHegedimDDL(){var hegedimZ=$(prefix+'tMarkivim').find('.HegedMarkivZachar');var optZ=$(prefix+'ddlHegedZachar').find('option');optZ.each(function(){$(this).attr('title',$(this).text());})
hegedimZ.each(function(index,ddl){optZ.each(function(i,o){if(typeof $(o).attr('codematratheiged')==='undefined'||typeof $(ddl).attr('codematratheiged')==='undefined'){ddl.appendChild(o.cloneNode(true));}
else if($(ddl).attr('codematratheiged')==$(o).attr('codematratheiged')){ddl.appendChild(o.cloneNode(true));}})});var hegedimN=$(prefix+'tMarkivim').find('.HegedMarkivNekeva');var optN=$(prefix+'ddlHegedNekeva').find('option');optN.each(function(){$(this).attr('title',$(this).text());})
hegedimN.each(function(index,ddl){optN.each(function(i,o){if(typeof $(o).attr('codematratheiged')==='undefined'||typeof $(ddl).attr('codematratheiged')==='undefined'){ddl.appendChild(o.cloneNode(true));}
else if($(ddl).attr('codematratheiged')==$(o).attr('codematratheiged')){ddl.appendChild(o.cloneNode(true));}})});}
function EruaMehanechDisableInput(){var hatsdaka=$('#bitsua').find('select,input');hatsdaka.attr('disabled','disabled');if($.browser.msie){hatsdaka.addClass('DisabledInput');}}
function PreventSubmit(e){if(e.keyCode==13){e.preventDefault();$(e.target).change();return false;}}
function KeyControls(event){var todomove=false;var col_mov=0;var row_mov=0;switch(event.keyCode){case 38:todomove=true;row_mov=-1;break;case 40:todomove=true;row_mov=1;break;case 13:todomove=true;row_mov=1;event.preventDefault();break;case 37:todomove=true;col_mov=1;break;case 39:todomove=true;col_mov=-1;break;}
if(todomove){var me=event.target.id.split('_');var row=parseInt(me[3].substr(3),10);var column=parseInt(me[4].substr(6),10);if(isNaN(column)){column=0;}
row+=row_mov;column+=col_mov;var row_string;if(row<10){row_string='0'+row.toString()}
else
{row_string=row.toString()}
if(column<1){if(isEruaTkufati=='True'){var str_new=prefix+'egvTalmidim_ctl'+row_string+'_tbTsiunSofiLeTkufa';}
else{var str_new=prefix+'egvTalmidim_ctl'+row_string+'_tbTsiunSofiLeErua';}}
else{var str_new=prefix+'egvTalmidim_ctl'+row_string+'_markiv'+column;}
jrow=$(str_new)
if(jrow.length>0){RowClick(jrow.parent().parent().parent()[0]);jrow.focus();}}}
function TalmidHabaClick(){if(selectedrow!=null){var next_row=selectedrow.next();if(next_row.length>0){RowClick(next_row);next_row[0].scrollIntoView(false);}
else{var f_row=selectedrow.parent().children().first();RowClick(f_row);f_row[0].scrollIntoView(false);}}}
function TalmidKodemClick(){if(selectedrow!=null){var prev_row=selectedrow.prev();if(prev_row.length>0){RowClick(prev_row);prev_row[0].scrollIntoView(false);}
else{var l_row=selectedrow.parent().children().last();RowClick(l_row);l_row[0].scrollIntoView(false);}}}
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();