/*global $*/

// Wait until the webpage is finished loading
$(document).ready(function(){
  
  function pickStudent() {
    //Place your code here 
    var ScriptEers = [ "Jason", "Barry", "Aldair", "David","Taufiq","Nat","Kyhson"];
    var x = Math.floor(Math.random()* (ScriptEers.length-1) );
    
    return ScriptEers[x];
  }
 function pickTeacher() {
    //Place your code here 
    var ScriptEducators = ["Thai", "David", "Michael", "Josh"];
    
    var x = Math.floor(Math.random()* (ScriptEducators.length-1) );
    
    return ScriptEducators[x];
  }
  $("#Pick-a-student").click(function(){
    var student = pickStudent();
    console.log(student);
    $("#person").text(student);
  });
    $("#Pick-a-teacher").click(function(){
    var Teacher = pickTeacher();
    console.log(Teacher);
    $("#teacher").text(Teacher);
  });
// End of wait until webpage is finished loading
});







