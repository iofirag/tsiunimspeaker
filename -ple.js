$("p").click(function() {
	$(this).toggleClass("make-red");
});
////////////////////////////

$("body").prepend("<div id='info' style='visibility: visible;'>\
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
					<button id='start_button' onclick='startButton(event)' style='display: inline-block;'><img alt='Start' id='start_img' src='mic.gif'>\
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
				
				
				



////////////////////////

// $("body").add("<script>\
// var langs = [['Afrikaans', ['af-ZA']], ['Bahasa Indonesia', ['id-ID']], ['Bahasa Melayu', ['ms-MY']], ['Català', ['ca-ES']], ['Čeština', ['cs-CZ']], ['Deutsch', ['de-DE']], ['English', ['en-AU', 'Australia'], ['en-CA', 'Canada'], ['en-IN', 'India'], ['en-NZ', 'New Zealand'], ['en-ZA', 'South Africa'], ['en-GB', 'United Kingdom'], ['en-US', 'United States']], ['Español', ['es-AR', 'Argentina'], ['es-BO', 'Bolivia'], ['es-CL', 'Chile'], ['es-CO', 'Colombia'], ['es-CR', 'Costa Rica'], ['es-EC', 'Ecuador'], ['es-SV', 'El Salvador'], ['es-ES', 'España'], ['es-US', 'Estados Unidos'], ['es-GT', 'Guatemala'], ['es-HN', 'Honduras'], ['es-MX', 'México'], ['es-NI', 'Nicaragua'], ['es-PA', 'Panamá'], ['es-PY', 'Paraguay'], ['es-PE', 'Perú'], ['es-PR', 'Puerto Rico'], ['es-DO', 'República Dominicana'], ['es-UY', 'Uruguay'], ['es-VE', 'Venezuela']], ['Euskara', ['eu-ES']], ['Français', ['fr-FR']], ['Galego', ['gl-ES']], ['Hebrew', ['he', 'Israel']], ['Hrvatski', ['hr_HR']], ['IsiZulu', ['zu-ZA']], ['Íslenska', ['is-IS']], ['Italiano', ['it-IT', 'Italia'], ['it-CH', 'Svizzera']], ['Magyar', ['hu-HU']], ['Nederlands', ['nl-NL']], ['Norsk bokmål', ['nb-NO']], ['Polski', ['pl-PL']], ['Português', ['pt-BR', 'Brasil'], ['pt-PT', 'Portugal']], ['Română', ['ro-RO']], ['Slovenčina', ['sk-SK']], ['Suomi', ['fi-FI']], ['Svenska', ['sv-SE']], ['Türkçe', ['tr-TR']], ['български', ['bg-BG']], ['Pусский', ['ru-RU']], ['Српски', ['sr-RS']], ['한국어', ['ko-KR']], ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'], ['cmn-Hans-HK', '普通话 (香港)'], ['cmn-Hant-TW', '中文 (台灣)'], ['yue-Hant-HK', '粵語 (香港)']], ['日本語', ['ja-JP']], ['Lingua latīna', ['la']]];\
// var last;\
			// for (var i = 0; i < langs.length; i++) {\
				// select_language.options[i] = new Option(langs[i][0], i);\
			// }\
			// select_language.selectedIndex = 11;\
			// updateCountry();\
			// select_dialect.selectedIndex = 0;\
			// showInfo('info_start');\
// \
			// function updateCountry() {\
				// for (var i = select_dialect.options.length - 1; i >= 0; i--) {\
					// select_dialect.remove(i);\
				// }\
				// var list = langs[select_language.selectedIndex];\
				// for (var i = 1; i < list.length; i++) {\
					// select_dialect.options.add(new Option(list[i][1], list[i][0]));\
				// }\
				// select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';\
			// }\
// \
			// //var create_email = false;\
			// var final_transcript = '';\
			// var recognizing = false;\
			// var ignore_onend;\
			// var start_timestamp;\
			// if (!('webkitSpeechRecognition' in window)) {\
				// upgrade();\
			// } else {\
				// start_button.style.display = 'inline-block';\
				// var recognition = new webkitSpeechRecognition();\
				// recognition.continuous = true;\
				// recognition.interimResults = true;\
// \
				// recognition.onstart = function() {\
					// recognizing = true;\
					// showInfo('info_speak_now');\
					// start_img.src = 'mic-animate.gif';\
				// };\
// \
				// recognition.onerror = function(event) {\
					// if (event.error == 'no-speech') {\
						// start_img.src = 'mic.gif';\
						// showInfo('info_no_speech');\
						// ignore_onend = true;\
					// }\
					// if (event.error == 'audio-capture') {\
						// start_img.src = 'mic.gif';\
						// showInfo('info_no_microphone');\
						// ignore_onend = true;\
					// }\
					// if (event.error == 'not-allowed') {\
						// if (event.timeStamp - start_timestamp < 100) {\
							// showInfo('info_blocked');\
						// } else {\
							// showInfo('info_denied');\
						// }\
						// ignore_onend = true;\
					// }\
				// };\
// \
				// recognition.onend = function() {\
					// recognizing = false;\
					// if (ignore_onend) {\
						// return;\
					// }\
					// start_img.src = 'mic.gif';\
					// //'/intl/en/chrome/assets/common/images/content/mic.gif';\
					// if (!final_transcript) {\
						// showInfo('info_start');\
						// return;\
					// }\
					// showInfo('');\
					// if (window.getSelection) {\
						// window.getSelection().removeAllRanges();\
						// var range = document.createRange();\
						// range.selectNode(document.getElementById('final_span'));\
						// window.getSelection().addRange(range);\
					// }\
					// if (create_email) {\
						// create_email = false;\
						// createEmail();\
					// }\
				// };\
// \
				// recognition.onresult = function(event) {\
					// var interim_transcript = '';\
					// if ( typeof (event.results) == 'undefined') {\
						// recognition.onend = null;\
						// recognition.stop();\
						// upgrade();\
						// return;\
					// }\
					// for (var i = event.resultIndex; i < event.results.length; ++i) {\
						// if (event.results[i].isFinal) {\
							// final_transcript += event.results[i][0].transcript;\
							// //console.log(+ event.results[i][0].transcript);\
// \
						// } else {\
							// interim_transcript += event.results[i][0].transcript;\
							// //console.log(event.results[i][0].transcript);\
						// }\
					// }\
					// final_transcript = capitalize(final_transcript);\
// \
					// if (final_transcript || interim_transcript) {\
						// showButtons('inline-block');\
					// }\
// \
					// if (last != final_transcript){\
						// last = final_transcript;\
						// console.log(last);\
						// var allInputs = document.getElementsByTagName('input');\
						// for (i=0;i<allInputs.length;i++){\
							// allInputs[i].value=last;\
						// }\
						// last='';\
						// final_transcript='';\
					// }\
				// };\
			// }\
// \
			// function upgrade() {\
				// start_button.style.visibility = 'hidden';\
				// showInfo('info_upgrade');\
			// }\
// \
			// var two_line = /\n\n/g;\
			// var one_line = /\n/g;\
			// function linebreak(s) {\
				// return s.replace(two_line, '<p></p>').replace(one_line, '<br>');\
			// }\
// \
			// var first_char = /\S/;\
			// function capitalize(s) {\
				// return s.replace(first_char, function(m) {\
					// return m.toUpperCase();\
				// });\
			// }\
// \
			// function createEmail() {\
				// var n = final_transcript.indexOf('\n');\
				// if (n < 0 || n >= 80) {\
					// n = 40 + final_transcript.substring(40).indexOf(' ');\
				// }\
				// var subject = encodeURI(final_transcript.substring(0, n));\
				// var body = encodeURI(final_transcript.substring(n + 1));\
				// window.location.href = 'mailto:?subject=' + subject + '&body=' + bod\
				// console.log('(createEmail) '+final_transcript);\
			// }\
// \
			// function copyButton() {\
				// if (recognizing) {\
					// recognizing = false;\
					// recognition.stop();\
				// }\
				// showInfo('');\
			// }\
// \
			// function emailButton() {\
				// if (recognizing) {\
					// create_email = true;\
					// recognizing = false;\
					// recognition.stop();\
				// } else {\
					// createEmail();\
				// }\
				// showInfo('');\
			// }\
// \
			// function startButton(event) {\
				// if (recognizing) {\
					// recognition.stop();\
					// return;\
				// }\
				// final_transcript = '';\
				// recognition.lang = select_dialect.value;\
				// recognition.start();\
				// ignore_onend = false;\
				// start_img.src = 'mic-slash.gif';\
				// showInfo('info_allow');\
				// showButtons('none');\
				// start_timestamp = event.timeStamp;\
			// }\
// \
			// function showInfo(s) {\
				// if (s) {\
					// for (var child = info.firstChild; child; child = child.nextSibling) {\
						// if (child.style) {\
							// child.style.display = child.id == s ? 'inline' : 'none';\
						// }\
					// }\
					// info.style.visibility = 'visible';\
				// } else {\
					// info.style.visibility = 'hidden';\
				// }\
			// }\
// \
			// var current_style;\
			// function showButtons(style) {\
			// }\
			// </sctipt>");

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