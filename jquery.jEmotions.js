/**
  * jEmotions v1.1.0 jQuery Plugin
  * jQuery Emotions (jEmotions) is a simple but powerful utility to search and replace emotics with emotic-images.
  *
  * The following emotics are supported
  * -----------------------------------
  * (bomb) @== 
  * (laugh) :D :-D :~D :^D
  * (smile!) :} :-} :~} :^}
  * (smile) :-) :-] :~) :^) =-) 
  * (cool) |) |] |} |~) |^) |-) |-] 
  * (kiss) :* :-* :^* =-* =^* 
  * (tongue) :P :P :-p :^P =-P =^P :^p =-p =^p 
  * (!funny) (!funny!) :/) 
  * (devil) 3:) (6) }:-) ]:-) 
  * (soso) :| :-| :~| :^|
  * (hmm) :-\ :~\ :^\ :-/ :~/ :^/
  * (shutup) :X :# :-X :~X :^X :-# :~# :^#
  * (ohh) :-O :~O :^O :-0 :~0 :^0 :-o :~o :^o
  * (blink) ;) ;] ;} ;-) ;~) ;^) ;^}
  * (angry) :@ 
  * (sad) :-( :-[ :-{
  * (cry) :.( :.[ :.{
  *
  * Test with
  * ---------
  * JS:
  * 	$(function(){
  *			$('p').jEmotions();
  * 	});
  *
  * HTML:
  * 	<p>(bomb) @== (laugh) :D :-D :~D :^D (smile!) :} :-} :~} :^} (smile) :-) :-] :~) :^) =-) (cool) |) |] |}  |~) |^) |-) |-] (kiss) :* :-* :^* =-* =^* (tongue) :P :p :-p :^P =-P =^P :^p =-p =^p (!funny) (!funny!) :/) (devil) 3:) (6) }:) ]:) (soso) :| :-| :~| :^| (hmm) :-\ :~\ :^\ :-/ :~/ :^/ (shutup) :X :# :-X :-X :~X :^X :-# :~# :^# (ohh) :-O :~O :^O :-0 :~0 :^0 :-o :~o :^o (blink) ;) ;] ;} ;-) ;~) ;^) ;^} (angry) :@ (sad) :-( :-[ :-{ (cry) :.( :.[ :.{</p>
  * 
  * On jsfiddle.net:
  * 	http://jsfiddle.net/tntdfch5
  *
  * Extend with custom emotions (eg. add (blabla) emotion)
  * ------------------------------------------------------
  * JS:
  * 	$(function(){
  *			$('p').jEmotions({
  *				map: { 
  *					'(blabla)': 'myEmotion-blabla',
  *					'(juppi)': 	'myEmotion-juppi',
  *					'(jeepee)': 'myEmotion-jeepee' 
  *				}, 
  *				template: '<img class="jEmotion myEmotion %" src="/path/to/myDmyImg.gif" />'
  *			});
  * 	});
  *
  * CSS:
  *		.myEmotion{
  *			background-image: url(myEmotionsSprite.png) ! important;
  *		}
  *		.myEmotion.myEmotion-blabla{
  *			background-position: -10px -10px;
  *		}
  *		.myEmotion.myEmotion-juppi{
  *			background-position: -10px -30px;
  *		}
  *		.myEmotion.myEmotion-jeepee{
  *			background-position: -10px -50px;
  *		}
  * 
  * HTML:
  * 	<p>(bomb) @== (laugh) :D :-D :~D :^D (smile!) :} :-} :~} :^} (smile) :-) :-] :~) :^) =-) (cool) |) |] |}  |~) |^) |-) |-] (kiss) :* :-* :^* =-* =^* (tongue) :P :p :-p :^P =-P =^P :^p =-p =^p (!funny) (!funny!) :/) (devil) 3:) (6) }:) ]:) (soso) :| :-| :~| :^| (hmm) :-\ :~\ :^\ :-/ :~/ :^/ (shutup) :X :# :-X :~X :^X :-# :~# :^# (ohh) :-O :~O :^O :-0 :~0 :^0 :-o :~o :^o (blink) ;)  ;] ;} ;-) ;~) ;^) ;^} (angry) :@  (sad) :-(  :-[ :-{ (cry) :.(  :.[ :.{</p>
  *
  * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  * and GPL (http://www.opensource.org/licenses/gpl-3.0.html).
  *
  *  Dependencies:
  *   - jquery.js jQuery Core Plugin
  *
  *   Copyright (c) 2010 Koller Oliver (spotwizard.org)
  *   Permission is hereby granted, free of charge, to any person obtaining a copy
  *   of this software and associated documentation files (the "Software"), to deal
  *   in the Software without restriction, including without limitation the rights
  *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  *   copies of the Software, and to permit persons to whom the Software is
  *   furnished to do so, subject to the following conditions:
  *   
  *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  *   THE SOFTWARE.
  *
  *  Credits to images from http://www.flaticon.com:
  *   Icons made by Freepik from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>
  */
 
(function($){
	$.fn.jEmotions = function(options){
        var defaults = {
               map: {
					'(bomb)': 	'jEmotion-000-000',
					'@==': 		'jEmotion-000-000',
					'(laugh)': 	'jEmotion-001-000',
					':D': 		'jEmotion-001-000',
					':-D': 		'jEmotion-001-000', 
					':~D': 		'jEmotion-001-000',
					':^D': 		'jEmotion-001-000',
					'(smile!)': 'jEmotion-001-001',
					':}': 		'jEmotion-001-001',
					':-}': 		'jEmotion-001-001', 
					':~}': 		'jEmotion-001-001',
					':^}': 		'jEmotion-001-001',
					'(smile)': 	'jEmotion-001-002',
					':-)': 		'jEmotion-001-002',
					':-]': 		'jEmotion-001-002',
					':~)': 		'jEmotion-001-002',
					':^)': 		'jEmotion-001-002',
					'=-)': 		'jEmotion-001-002',
					'(cool)': 	'jEmotion-001-003',
					'|)': 		'jEmotion-001-003',
					'|]': 		'jEmotion-001-003',
					'|}': 		'jEmotion-001-003',
					'|>': 		'jEmotion-001-003',
					'|-)': 		'jEmotion-001-003',
					'|~)': 		'jEmotion-001-003',
					'|^)': 		'jEmotion-001-003',
					'|-]': 		'jEmotion-001-003',
					'(kiss)': 	'jEmotion-001-004',
					':*': 		'jEmotion-001-004',
					':-*': 		'jEmotion-001-004',
					':^*': 		'jEmotion-001-004',
					'=-*': 		'jEmotion-001-004',
					'=^*': 		'jEmotion-001-004',
					'(tongue)': 'jEmotion-001-005',
					':P': 		'jEmotion-001-005',
					':p': 		'jEmotion-001-005',
					':-p': 		'jEmotion-001-005',
					':^P': 		'jEmotion-001-005',
					'=^P': 		'jEmotion-001-005',
					':^p': 		'jEmotion-001-005',
					'=-P': 		'jEmotion-001-005',
					'=-p': 		'jEmotion-001-005',
					'=^p': 		'jEmotion-001-005',
					'(!funny)': 'jEmotion-001-006',
					'(!funny!)':'jEmotion-001-006',
					':/)': 		'jEmotion-001-006',
					'(devil)': 	'jEmotion-001-007',
					'3:)': 		'jEmotion-001-007',
					'(6)': 		'jEmotion-001-007',
					'}:)': 	    'jEmotion-001-007',
					']:)': 	    'jEmotion-001-007',
					'(soso)': 	'jEmotion-002-000',
					':|': 		'jEmotion-002-000',
					':-|': 		'jEmotion-002-000',
					':~|': 		'jEmotion-002-000',
					':^|': 		'jEmotion-002-000',
					'(hmm)': 	'jEmotion-002-001',
					':-\\': 	'jEmotion-002-001',
					':~\\': 	'jEmotion-002-001',
					':^\\': 	'jEmotion-002-001',
					':-/': 		'jEmotion-002-001',
					':~/': 		'jEmotion-002-001',
					':^/': 		'jEmotion-002-001',
					'(shutup)': 'jEmotion-003-000',
					':X': 		'jEmotion-003-000',
					':#': 		'jEmotion-003-000',
					':-X': 		'jEmotion-003-000', 
					':~X': 		'jEmotion-003-000',
					':^X': 		'jEmotion-003-000',
                    ':-x': 		'jEmotion-003-000', 
					':~x': 		'jEmotion-003-000',
					':^x': 		'jEmotion-003-000',
					':-#': 		'jEmotion-003-000', 
					':~#': 		'jEmotion-003-000',
					':^#': 		'jEmotion-003-000',
					'(ohh)': 	'jEmotion-003-001',
					':-O': 		'jEmotion-003-001',
					':~O': 		'jEmotion-003-001',
					':^O': 		'jEmotion-003-001',
					':-0': 		'jEmotion-003-001',
					':~0': 		'jEmotion-003-001',
					':^0': 		'jEmotion-003-001',
					':-o': 		'jEmotion-003-001',
					':~o': 		'jEmotion-003-001',
					':^o': 		'jEmotion-003-001',
					'(blink)': 	'jEmotion-003-002',
					';)': 		'jEmotion-003-002',
					';]': 		'jEmotion-003-002',
					';}': 		'jEmotion-003-002',
					';-)': 		'jEmotion-003-002',
					';~)': 		'jEmotion-003-002',
					';^)': 		'jEmotion-003-002',
					';^}': 		'jEmotion-003-002',
					'(angry)': 	'jEmotion-004-000',
					':@': 		'jEmotion-004-000',
					'(sad)': 	'jEmotion-004-001',
					':-(': 		'jEmotion-004-001',
					':-[': 		'jEmotion-004-001',
					':-{': 		'jEmotion-004-001',
					'(cry)': 	'jEmotion-004-002',
					':.(': 		'jEmotion-004-002',
					':.[': 		'jEmotion-004-002',
					':.{': 		'jEmotion-004-002'
			   },
			   cls: '%',
               template: '<img class="jEmotion %" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />'
        };
        
        var options = jQuery.extend(true, defaults, options);
        
        function replaceAll(string, find, replace){
            return(string.replace(new RegExp(escapeRegExp(find), 'g'), replace));
        };
        
        function escapeRegExp(string){
            return(string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
        };

		this.each(
			function(){
				var text = $(this).html();
				
				for(var emotion in defaults.map){
					if(text.match(new RegExp(escapeRegExp(emotion)))){
						var substituteWith = replaceAll(defaults.template, defaults.cls, defaults.map[emotion]);
						text = replaceAll(text, emotion, substituteWith);
					}//else, emotion not found in this element...  
				}
				
				$(this).html(text);
			}
		);
	};  
})(jQuery);