/* add jQuery to the page */
/*var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);*/


/* Check the host & Add css attributes if needed */		
var pathHost = window.location.host;
var pathName = window.location.pathname;
if (pathHost.toLowerCase().indexOf("manbasnet") >= 0 ||
	pathName.toLowerCase().indexOf("manbasnet") >= 0){
	
	var focus="right";
	var row;
	
	var allTable_InputText;
	var allHearot_inputText;
	
	var highTr=0;//--
	var highChild=0;
	
	/* Current */
	var currentTable_tbody;
	var currentTable;
	var currentTr=0;
	var currentTd=0;
	var currentRightTag;
	var currentLeftTag;
	var currentTable_InputCounter=0;
	var currentHearot_inputCounter=0;
	
	/* Last */
	var lastTable;
	var lastTr;
	var lastTd;
	var lastTag;
	var lastRightTag;
	var lastLeftTag;
	
	
	
	$("head").append("<style>\
			#header {\
				margin-top: 100px;\
			}\
			.mainContent {\
				margin-top: 100px;\
			}\
		</style>");


	/* Add the configurations buttons to as html tags */
	$("body").prepend("<div id='info' style='visibility: visible; z-index: 2;'>\
						<p id='info_start' style='display: inline;'>\
							Click on the microphone icon and begin speaking for as long as you like.\
						</p>\
						<p id='info_speak_now' style='display: none;'>\
							Speak now.\
						</p>\
						<p id='info_no_speech' style='display: none;'>\
							No speech was detected. You may need to adjust your <a href='https://support.google.com/chrome/bin/answer.py?hl=en&answer=1407892'>microphone\
							settings</a>.\
						</p>\
						<p id='info_no_microphone' style='display: none;'>\
							No microphone was found. Ensure that a microphone is installed and that\
							<a href='https://support.google.com/chrome/bin/answer.py?hl=en&answer=1407892'> microphone settings</a> are configured correctly.\
						</p>\
						<p id='info_allow' style='display: none;'>\
							Click the 'Allow' button above to enable your microphone.\
						</p>\
						<p id='info_denied' style='display: none;'>\
							Permission to use microphone was denied.\
						</p>\
						<p id='info_blocked' style='display: none;'>\
							Permission to use microphone is blocked. To change, go to\
							chrome://settings/contentExceptions#media-stream\
						</p>\
						<p id='info_upgrade' style='display: none;'>\
							Web Speech API is not supported by this browser. Upgrade to <a href='https://www.google.com/chrome'>Chrome</a> version 25 or later.\
						</p>\
					</div>\
					<div id='div_start'>\
						<button id='start_button' style='display: inline-block;'><img alt='Start' id='start_img' src='https://www.google.com/intl/en/chrome/assets/common/images/content/mic.gif'>\
						</button>\
					</div>\
					<div class='compact marquee' id='div_language'>\
						<select id='select_language' onchange='updateCountry()'>\
							<option value='0'>Afrikaans</option><option value='1'>Bahasa Indonesia</option><option value='2'>Bahasa Melayu</option><option value='3'>Català</option><option value='4'>Čeština</option><option value='5'>Deutsch</option><option value='6'>English</option><option value='7'>Español</option><option value='8'>Euskara</option><option value='9'>Français</option><option value='10'>Galego</option><option value='11'>Hrvatski</option><option value='12'>IsiZulu</option><option value='13'>Íslenska</option><option value='14'>Italiano</option><option value='15'>Magyar</option><option value='16'>Nederlands</option><option value='17'>Norsk bokmål</option><option value='18'>Polski</option><option value='19'>Português</option><option value='20'>Română</option><option value='21'>Slovenčina</option><option value='22'>Suomi</option><option value='23'>Svenska</option><option value='24'>Türkçe</option><option value='25'>български</option><option value='26'>Pусский</option><option value='27'>Српски</option><option value='28'>한국어</option><option value='29'>中文</option><option value='30'>日本語</option><option value='31'>Lingua latīna</option>\
						</select>\
						&nbsp;&nbsp;\
						<select id='select_dialect' style='visibility: visible;'>\
							<option value='en-AU'>Australia</option><option value='en-CA'>Canada</option><option value='en-IN'>India</option><option value='en-NZ'>New Zealand</option><option value='en-ZA'>South Africa</option><option value='en-GB'>United Kingdom</option><option value='en-US'>United States</option>\
						</select>\
					</div>");
	
	var langs = [
					['Afrikaans', ['af-ZA']],
					['Bahasa Indonesia', ['id-ID']],
					['Bahasa Melayu', ['ms-MY']],
					['Català', ['ca-ES']],
					['Čeština', ['cs-CZ']],
					['Deutsch', ['de-DE']],
					['English', ['en-AU', 'Australia'], ['en-CA', 'Canada'], ['en-IN', 'India'], ['en-NZ', 'New Zealand'], ['en-ZA', 'South Africa'], ['en-GB', 'United Kingdom'], ['en-US', 'United States']],
					['Español', ['es-AR', 'Argentina'], ['es-BO', 'Bolivia'], ['es-CL', 'Chile'], ['es-CO', 'Colombia'], ['es-CR', 'Costa Rica'], ['es-EC', 'Ecuador'], ['es-SV', 'El Salvador'], ['es-ES', 'España'], ['es-US', 'Estados Unidos'], ['es-GT', 'Guatemala'], ['es-HN', 'Honduras'], ['es-MX', 'México'], ['es-NI', 'Nicaragua'], ['es-PA', 'Panamá'], ['es-PY', 'Paraguay'], ['es-PE', 'Perú'], ['es-PR', 'Puerto Rico'], ['es-DO', 'República Dominicana'], ['es-UY', 'Uruguay'], ['es-VE', 'Venezuela']],
					['Euskara', ['eu-ES']],
					['Français', ['fr-FR']],
					['Galego', ['gl-ES']],
					['עברית', ['he', 'ישראל']],
					['Hrvatski', ['hr_HR']],
					['IsiZulu', ['zu-ZA']],
					['Íslenska', ['is-IS']],
					['Italiano', ['it-IT', 'Italia'], ['it-CH', 'Svizzera']],
					['Magyar', ['hu-HU']], ['Nederlands', ['nl-NL']],
					['Norsk bokmål', ['nb-NO']],
					['Polski', ['pl-PL']],
					['Português', ['pt-BR', 'Brasil'], ['pt-PT', 'Portugal']],
					['Română', ['ro-RO']],
					['Slovenčina', ['sk-SK']],
					['Suomi', ['fi-FI']],
					['Svenska', ['sv-SE']],
					['Türkçe', ['tr-TR']],
					['български', ['bg-BG']],
					['Pусский', ['ru-RU']],
					['Српски', ['sr-RS']],
					['한국어', ['ko-KR']],
					['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'], ['cmn-Hans-HK', '普通话 (香港)'], ['cmn-Hant-TW', '中文 (台灣)'], ['yue-Hant-HK', '粵語 (香港)']],
					['日本語', ['ja-JP']],
					['Lingua latīna', ['la']]];
				
	for (var i = 0; i < langs.length; i++) {
		select_language.options[i] = new Option(langs[i][0], i);
	}
	select_language.selectedIndex = 11;
	updateCountry();
	select_dialect.selectedIndex = 0;
	showInfo('info_start');
	
	function updateCountry() {
		for (var i = select_dialect.options.length - 1; i >= 0; i--) {
			select_dialect.remove(i);
		}
		var list = langs[select_language.selectedIndex];
		for (var i = 1; i < list.length; i++) {
			select_dialect.options.add(new Option(list[i][1], list[i][0]));
		}
		select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
	}
	
	
	
	function Table(idVal, maxTrVal, maxTdVal) {
		return {
			id: idVal,
			maxTr: maxTrVal,
			maxTd: maxTdVal
		};
	}
	
	

	/* Detect the big table in the page */
	$('table:has(input)').each( function(i, table){		//$("table").has("input")
	
		//find <ID> & numer of <TR>, <TD> tags
		if (table.id!=null && table.id!=""  &&  table.childElementCount>0){
			tbody=table.children[0];
			
			// ID
			id = table.id;
			
			// TR
			if (tbody.childElementCount>0){
				tr_amount = tbody.childElementCount;
				tr = tbody.children[0];
				
				// TD
				if (tr.childElementCount >0){
					td_amount = tr.childElementCount;
					
					// Build Table obj.
					tableItem = new Table(id, tr_amount, td_amount);
					
					//detect the longest table (most <tr>) in the page and save it
					if(highTr<td_amount){
						currentTable= tableItem;
					}
				}
			}
		}
	});
	
	
	
	
	
	
	
	/* Recognition variables */
	var final_transcript = '';
	var last_final_transcript;
	var recognizing = false;
	var ignore_onend;
	var start_timestamp;
	var write_value = false;
	

	
	
	
	/* If window doesnt support speech recognition */
	if (!('webkitSpeechRecognition' in window)) {
		upgrade();
	} else {
		start_button.style.display = 'inline-block';
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
	
		recognition.onstart = function() {
			recognizing = true;
			showInfo('info_speak_now');
			start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic-animate.gif';
			
			/* Init the big table */
			if (currentTable != null){
				// put border
				$('#'+currentTable.id).css("border", "solid yellow 3px");
				
				// put border for the first input text
				allTable_InputText= $('#'+currentTable.id+' input:text').filter(":visible");//.css("border", "solid red 3px"); //.css('background-color', 'yellow');
				if (allTable_InputText.length>0){
					if (currentRightTag== null || currentRightTag==""){
						currentRightTag = allTable_InputText[currentTable_InputCounter];
						$('#'+currentRightTag.id).css("border", "solid red 3px"); //.css('background-color', 'yellow');
						write_value=true;
						
						currentTag = currentRightTag;
						currentTag.focus();
						
						// manually for the first time
						row = currentTag.parentNode.parentNode.parentNode;
						simulateEvent(row, "click");
					}
				}
			}
		};
	
		recognition.onerror = function(event) {
			if (event.error == 'no-speech') {
				start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic.gif';
				showInfo('info_no_speech');
				ignore_onend = true;
			}
			if (event.error == 'audio-capture') {
				start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic.gif';
				showInfo('info_no_microphone');
				ignore_onend = true;
			}
			if (event.error == 'not-allowed') {
				if (event.timeStamp - start_timestamp < 100) {
					showInfo('info_blocked');
				} else {
					showInfo('info_denied');
				}
				ignore_onend = true;
			}
		};
	
		recognition.onend = function() {
			recognizing = false;
			if (ignore_onend) {
				return;
			}
			start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic.gif';
			if (!final_transcript) {
				showInfo('info_start');
				return;
			}
			showInfo('');
			if (window.getSelection) {
				window.getSelection().removeAllRanges();
				var range = document.createRange();
				//range.selectNode(document.getElementById('final_span'));
				window.getSelection().addRange(range);
			}
		};
	
		recognition.onresult = function(event) {
			var interim_transcript = '';
			if ( typeof (event.results) == 'undefined') {
				recognition.onend = null;
				recognition.stop();
				upgrade();
				return;
			}
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					final_transcript += event.results[i][0].transcript;
					//console.log(+ event.results[i][0].transcript);
					
				} else {
					interim_transcript += event.results[i][0].transcript;
					//console.log(event.results[i][0].transcript);
				}
			}
			final_transcript = capitalize(final_transcript);
	
			// temp gray
			//final_span.innerHTML = linebreak(final_transcript);
			// static black
			//interim_span.innerHTML = linebreak(interim_transcript);
	
			//if (final_transcript || interim_transcript) {
				//showButtons('inline-block');
			//}
			
			if (final_transcript.length > 0   &&   last_final_transcript != final_transcript){
				last = final_transcript;
				console.log(last_final_transcript);
				
				var tokens = final_transcript.trim();
				console.log("(Final)-"+ tokens + ".");
				switch (tokens) {
					case "מחק":
						//remove selected one
						//$('option:selected', 'select[name="options"]').removeAttr('selected');
						break;
							
					case "קודם":
					case "הקודם":
					case "למה":
					case "מעלה":
					case "למעלה":
						$('#'+currentTag.id).css("border", "");
						// Downgrade the counter of input & 
						if (focus=="right"){
							// If there not the first inpute
							currentTable_InputCounter--;
							if (currentTable_InputCounter < 0){
								currentTable_InputCounter = allTable_InputText.length-1;
							}
						}else{
							currentHearot_inputCounter--;
							if(currentHearot_inputCounter < 0){
								currentHearot_inputCounter = allHearot_inputText.length-1;
							}
						}
						break;
						
					case "הבא":
					case "אבא":
					case "אהבה":
					case "הבמה":
					case "הבעה":
					case "המראה":
					case "ארבעה":
					case "הארבעה":
					case "מטה":
					case "מאטה":
					case "מוטה":
					case "למטה":
						debugger;
						$('#'+currentTag.id).css("border", "");
						if (focus=="right"){
							// If there is more inputes
							currentTable_InputCounter++;
							if (currentTable_InputCounter >= allTable_InputText.length){
								currentTable_InputCounter=0;
							}
						}else{
							currentHearot_inputCounter++;
							if(currentHearot_inputCounter >= allHearot_inputText.length){
								currentHearot_inputCounter = 0;
							}
						}
						break;
					
					case "ראשון":
					case "התחלה":
						$('#'+currentTag.id).css("border", "");
						if (focus=="right"){
							// If there is more inputes
							if (allTable_InputText.length>0){
								currentTable_InputCounter = 0;
							}
						}else{
							if (allHearot_inputText.length>0){
								currentHearot_inputCounter = 0;
							}
						}
						break;
						
					case "אחרון":
					case "סוף":
					case "תחתית":
						$('#'+currentTag.id).css("border", "");
						if (focus=="right"){
							// If there is more inputes
							if (allTable_InputText.length>0){
								currentTable_InputCounter = allTable_InputText.length-1;
							}
						}else{
							if (allHearot_inputText.length>0){
								currentHearot_inputCounter = allHearot_inputText.length-1;
							}
						}
						break;
					
					case "שמאל":
					case "שמואל":
					case "וואלה":
					case "טארוט":
					case "שמאלה":
					case "שמולה":
					case "הערות":
					case "הרעות":
					case "נאות":
					case "הערה":
					case "מולה":
					case "מול":
					case "וולה":
					case "טארוט":
					case "יערות":
					case "ידיעות":
					case "יריעות":
					case "פאות":
					case "ארון":
					case "פירות":
					case "נערות":
					case "תיירות":
					case "Small":
					case "Moon":
						/* Change focus */
						if (focus!= "left"){
							focus = "left"; 
							
							/* Init hearot element */
							allHearot_inputText = $('fieldset input:text,textarea').filter(":visible");
							debugger;
							
							/* Init the hearot element */
							if (allHearot_inputText.length>0){
								$('fieldset:has(input,textarea)').css("border", "solid yellow 3px");
								if (currentLeftTag== null || currentLeftTag==""){
									currentHearot_inputCounter=0;
									currentLeftTag = allHearot_inputText[currentHearot_inputCounter];
									$('#'+currentLeftTag.id).css("border", "solid red 3px"); //.css('background-color', 'yellow');
									lastLeftTag = currentLeftTag;
									write_value=true;
									currentLeftTag.focus();
								}
							}
						}
						break;
						
					case "ימין":
					case "ימינה":
					case "ציונים":
					case "ציון":
						/* Change focus */
						if (focus!= "right"){
							focus = "right"; 	
							debugger;
							/* Init varriables */
							$('fieldset:has(input,textarea)').css("border", "");
							$('#'+currentLeftTag.id).css("border", "");
							lastLeftTag="";
							currentLeftTag="";
							
							currentRightTag.focus();
						}
						break;
					
					case "שמור":
					case "מור":
					case "שמירה":
					case "save":
						debugger;
						var saveButtons = $(":submit[value=שמירה]");
						saveButtons[0].click();
						saveButtons[0].focus();
						break;
					
					default:
						if (write_value){
							// Set the input string
								currentTag.value=tokens;

							if (focus=="right"){
								// Fire input events
								var event_names_Array = ["keypress","keyup","change"];
								$.each(event_names_Array, function(index, eventName){
									//debugger;
									try{
										if(currentRightTag.outerHTML.toLowerCase().indexOf(eventName) >= 0){
											simulateEvent(currentRightTag, eventName);
										}
									}catch(err){
										console.log("a");
									}	
								});
							}else{
								debugger;
								var event_names_Array = ["keypress","keyup","change","blur"];
								$.each(event_names_Array, function(index, eventName){
									debugger;
									//try{
										//if(currentLeftTag.outerHTML.toLowerCase().indexOf(eventName) >= 0){
										//	simulateEvent(currentLeftTag, eventName);
										//}
									//}catch(err){
									//	console.log("a");
									//}
									/*try{
											currentLeftTag.blur();
										}catch(e){
											console.log(e);
										}*/
										
										//Using the value
									if ($.isNumeric(tokens)){
										var temp = $('select:last, select:not(.VisibleFalse)').find("option[value="+tokens+"]").attr("selected",true);
									}else{
										//Using the text
										$('select:last, select:not(.VisibleFalse)').find("option:contains("+tokens+")").attr("selected",true);
									}
								});	
							}
						}
				}
				
				if (focus=="right"){
					currentRightTag = allTable_InputText[currentTable_InputCounter];
					currentTag = currentRightTag;
					row = currentTag.parentNode.parentNode.parentNode;
					//row.click();
				}else{
					currentLeftTag = allHearot_inputText[currentHearot_inputCounter];
					currentTag = currentLeftTag;
					row = currentTag.parentNode;
				}
				currentTag.focus();
				$('#'+currentTag.id).css("border", "solid red 3px");
				row.click();
				/******************************/
				
				
				last_final_transcript='';
				final_transcript='';
			}
		};
	}
	
	// Add event functions at the end of the body
	$("#start_button").click(startButton);
	$("#select_language").change(updateCountry);
	
	
	
	
	
	
	
	
	
	
	
	/* functions */
	function simulateEvent(tag, eventName){
		// Create event and fire it.
		debugger;
		//if (eventName!="blur"){
			if ("createEvent" in document) {
				var eventItem = document.createEvent("HTMLEvents");
				eventItem.initEvent(eventName ,true,true);
				tag.dispatchEvent(eventItem);
				// try{
					// tag.trigger(eventName);
				// }catch(e){
					// console.log("e");
				// }
			}
			else
			    tag.fireEvent("on"+eventName);
		//}else{
		//	if (document.dispatchEvent) {// W3C
		//		var oEvent = document.createEvent("MouseEvents");
		//		oEvent.initMouseEvent("blur", true, true, window, 1, 1, 1, 1, 1, false, false, false, false, 0, tag);
		//		tag.dispatchEvent(oEvent);
		//	}else if (document.fireEvent) {// IE
		//		tag.fireEvent("onblur");
		//	}
		//}
	}
	
	function upgrade() {
		start_button.style.visibility = 'hidden';
		showInfo('info_upgrade');
	}
	
	var two_line = /\n\n/g;
	var one_line = /\n/g;
	function linebreak(s) {
		return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
	}
	
	var first_char = /\S/;
	function capitalize(s) {
		return s.replace(first_char, function(m) {
			return m.toUpperCase();
		});
	}
	
	function startButton(event) {
		if (recognizing) {
			recognition.stop();
			return;
		}
		final_transcript = '';
		recognition.lang = select_dialect.value;
		recognition.start();
		ignore_onend = false;
		//final_span.innerHTML = '';
		//interim_span.innerHTML = '';
		start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic-slash.gif';
		showInfo('info_allow');
		start_timestamp = event.timeStamp;
	}
	
	function showInfo(s) {
		if (s) {
			for (var child = info.firstChild; child; child = child.nextSibling) {
				if (child.style) {
					child.style.display = child.id == s ? 'inline' : 'none';
				}
			}
			info.style.visibility = 'visible';
		} else {
			info.style.visibility = 'hidden';
		}
	}
	
	
	
	// var context_id = -1;
	//
	// chrome.input.ime.onFocus.addListener(function(context) {
	// context_id = context.contextID;
	// });
	//
	// chrome.input.ime.onKeyEvent.addListener(function(engineID, keyData) {
	// if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
	// chrome.input.ime.commitText({
	// "contextID" : context_id,
	// "text" : keyData.key.toUpperCase()
	// });
	// return true;
	// } else {
	// return false;
	// }
	// });
}