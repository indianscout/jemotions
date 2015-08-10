**jQuery Emotions (jEmotions) is a simple but powerful utility to search and replace emoticons with emotion images.**

# Default Emotics #
```
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
```

# Use #
## JS ##
```
$(function(){
	$('p').jEmotions();
});
```

## HTML ##
```
<p>(bomb) @== (laugh) :D :-D :~D :^D (smile!) :} :-} :~} :^} (smile) :-) :-] :~) :^) =-) (cool) |) |] |} |~) |^) |-) |-] (kiss) :* :-* :^* =-* =^* (tongue) :P :p :-p :^P =-P =^P :^p =-p =^p (!funny) (!funny!) :/) (devil) 3:) (6) >:) }:) ]:) (soso) :| :-| :~| :^| (hmm) :-\ :~\ :^\ :-/ :~/ :^/ (shutup) :X :# :-X :-X :~X :^X :-# :~# :^# (ohh) :-O :~O :^O :-0 :~0 :^0 :-o :~o :^o (blink) ;) ;] ;} ;-) ;~) ;^) ;^} (angry) :@ >:( (sad) :-( :-[ :-{ (cry) :.( :.[ :.{</p>
```

# Test & Example #
http://jsfiddle.net/tntdfch5/4/

# Extend #
## JS ##
```
$(function(){
	$('p').jEmotions({
		map: { 
			'(blabla)': 'myEmotion-blabla',
			'(juppi)':  'myEmotion-juppi',
			'(jeepee)': 'myEmotion-jeepee' 
		}
	});
});
```

## CSS ##
```
.myEmotion{
	background-image: url(myEmotionsSprite.png);
}
.myEmotion.myEmotion-blabla{
	background-position: -10px -10px;
}
.myEmotion.myEmotion-juppi{
	background-position: -10px -30px;
}
.myEmotion.myEmotion-jeepee{
	background-position: -10px -50px;
}
```

## HTML ##
```
<p>(bomb) @== (laugh) :D :-D :~D :^D (smile!) :} :-} :~} :^} (smile) :-) :-] :~) :^) =-) (cool) |) |] |} |> |~) |^) |-) |-] (kiss) :* :-* :^* =-* =^* (tongue) :P :p :-p :^P =-P =^P :^p =-p =^p (!funny) (!funny!) :/) (devil) 3:) (6) }:) ]:) (soso) :| :-| :~| :^| (hmm) :-\ :~\ :^\ :-/ :~/ :^/ (shutup) :X :# :-X :~X :^X :-# :~# :^# (ohh) :-O :~O :^O :-0 :~0 :^0 :-o :~o :^o (blink) ;) ;] ;} ;-) ;~) ;^) ;^} (angry) :@ (sad) :-( :-[ :-{ (cry) :.( :.[ :.{</p>
```

# License #
Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-3.0.html).

# Dependencies #
jquery.js - jQuery Core

# Credits #
Credits to images from http://www.flaticon.com:
Icons made by Freepik from www.flaticon.com is licensed by Creative Commons BY 3.0