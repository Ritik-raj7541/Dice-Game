function showo(a) 
{
  var d = 'images/dice'+a+'.png' ;
  var c = document.querySelectorAll('img')[0] ;
  c.setAttribute('src' , d);
}

function showt(a) 
{
      var d = 'images/dice'+a+'.png' ;
      var c = document.querySelectorAll('img')[1] ;
      c.setAttribute('src' , d);
}

var a = Math.random() ;
a = 6*a ;
a = Math.floor(a)+1 ;
var b = Math.random() ;
b = 6*b ;
b = Math.floor(b)+1 ;

showo(a) ;
showt(b) ;

if(a > b)
{
  document.querySelector('.container h1').innerHTML = 'player1 won' ;
}
else if(a <b)
{
  document.querySelector('.container h1').innerHTML = 'player2 won' ;
}
else
{
      document.querySelector('.container h1').innerHTML = 'its draw' ;
}