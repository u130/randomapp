$(document).ready(function(){
  function rolldice() {
    //Place your code here 
   
  }

  $("#roll-dice").click(function(){
    var dice = rolldice();
    console.log(dice);
    var ScriptEers = ["Jason", "Barry", "Aldair", "David","Taufiq","Nat","Kyhson"];
var ScriptEducators = ["Thai", "David", "Michael", "Josh"];
  var x = Math.floor(Math.random()* (ScriptEers.length-1) );
    return Math.round(x);
 
  });
  
});