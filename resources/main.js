//Shake Movements for Main Page Sticky Notes
$(document).ready(function(){
  $('.card').hover(function(){$(this).effect("shake", {times: 5}, 1500)});
  var about = document.getElementsByClassName('aboutsticky')[0];

    about.onclick = function() {
    window.location.href = "about.html";
      console.log("it worked")
  };
  console.log("it worked yay")
  var about = document.getElementsByClassName('viewsticky')[0];

    about.onclick = function() {
    window.location.href = "view.html";
      console.log("it worked")
  };

});
