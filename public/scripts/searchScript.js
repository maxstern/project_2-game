// -

console.log("searchScript.js running");


function expand() {
  console.log("CLICK!");
  $(".search").toggleClass("close");
  $(".input").toggleClass("square");
  if ($('.search').hasClass('close')) {
    $('input').focus();
  } else {
    $('input').blur();
  }
}


$('button').on('click', expand);
