//This is for the comment box
function open(){
  $('#lightbox').fadeTo(1000, 1);
  $("#wrapper").css({'text-shadow': '0px 0px 10px #000'});
};

function close(){
  $('#lightbox').hide();
  $("#wrapper").css({'text-shadow': '0px 0px 0px #000'});
  location.reload();
};

function closebutton(){
  $('#lightbox').hide();
  $("#wrapper").css({'text-shadow': '0px 0px 0px #000'});
}


function byte_text(text1){
  rome = "#" + text1
  /*rome = document.createElement("div");
  rome.setAttribute("id",text1);*/
  var bodyWidth = document.body.clientWidth;
  var bodyHeight = document.body.clientHeight;
  var randPosX = Math.random()*bodyWidth;
  var randPosY = Math.random()*bodyHeight;
  $(rome).css('left', randPosX);
  $(rome).css('top', randPosY);
  console.log(rome);
  console.log(text1);
}
//This is for the enlarging and delarging of the bytes
var byte = true;
function onClick(e) {
  console.log(e);
  var clickedElement = $(e.currentTarget);
  if (byte){
    byte = false;
    clickedElement.animate({
      width: 200,
      height: 200,
      "font-size": "30px",
    }, "slow")
  } else {
    byte = true;
    clickedElement.animate({
    width:160,
    height:192,
    "font-size":"16px",
  }, "slow")
}}

//The call for all the other functions
$(document).ready(function (){
  $('#open').on("click",open);
  $('.close').on("click",close);
  $('.button').on("click",closebutton);
  $('.text').click(onClick);
})
