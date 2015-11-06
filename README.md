#jEmotions v1.1.0 jQuery Plugin
jQuery Emotions (jEmotions) is a simple but powerful utility to search and replace emotics with emotic-images.

##Supported emotions
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

##Test
```javascript
  $(function(){
    $('p').jEmotions();
  });
```

```html
  <p>(bomb) @== (laugh) :D :-D :~D :^D (smile!) :} :-} :~} :^} (smile) :-) :-] :~) :^) =-) (cool) |) |] |}  |~) |^) |-) |-] (kiss) :* :-* :^* =-* =^* (tongue) :P :p :-p :^P =-P =^P :^p =-p =^p (!funny) (!funny!) :/) (devil) 3:) (6) }:) ]:) (soso) :| :-| :~| :^| (hmm) :-\ :~\ :^\ :-/ :~/ :^/ (shutup) :X :# :-X :-X :~X :^X :-# :~# :^# (ohh) :-O :~O :^O :-0 :~0 :^0 :-o :~o :^o (blink) ;) ;] ;} ;-) ;~) ;^) ;^} (angry) :@ (sad) :-( :-[ :-{ (cry) :.( :.[ :.{</p>
```

##Jsfiddle
http://jsfiddle.net/tntdfch5

##Extend
```javascript
  $(function(){
      $('p').jEmotions({
        map: { 
            '(blabla)': 'myEmotion-blabla',
            '(juppi)': 	'myEmotion-juppi',
            '(jeepee)': 'myEmotion-jeepee' 
          }, 
      emplate: '<img class="jEmotion myEmotion %" src="/path/to/myDmyImg.gif" />'
    });
  });
```

```javascript
  .myEmotion{
    background-image: url(myEmotionsSprite.png) ! important;
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

```html
  <p>(bomb) @== (laugh) :D :-D :~D :^D (smile!) :} :-} :~} :^} (smile) :-) :-] :~) :^) =-) (cool) |) |] |}  |~) |^) |-) |-] (kiss) :* :-* :^* =-* =^* (tongue) :P :p :-p :^P =-P =^P :^p =-p =^p (!funny) (!funny!) :/) (devil) 3:) (6) }:) ]:) (soso) :| :-| :~| :^| (hmm) :-\ :~\ :^\ :-/ :~/ :^/ (shutup) :X :# :-X :~X :^X :-# :~# :^# (ohh) :-O :~O :^O :-0 :~0 :^0 :-o :~o :^o (blink) ;)  ;] ;} ;-) ;~) ;^) ;^} (angry) :@  (sad) :-(  :-[ :-{ (cry) :.(  :.[ :.{</p>
```
##License
Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-3.0.html).

##Dependencies
jQuery Core Plugin
