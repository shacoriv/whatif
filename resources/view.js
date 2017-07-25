function open(){
  console.log("Please open");
  $('#lightbox').fadeTo(1000, 1);
  $("#wrapper").css({'text-shadow': '0px 0px 10px #000'});
};

function close(){
  console.log("hello world");
  $('#lightbox').hide();
  $("#wrapper").css({'text-shadow': '0px 0px 0px #000'});
};


$(document).ready(function (){
  $('#open').on("click",open);
  $('#close').on("click",close);
})
