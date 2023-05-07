window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 256) {
    document.getElementById("navbar").style.backgroundColor = "blue";
  } else {
    document.getElementById("navbar").style.backgroundColor = "white";
  }
}

function menuShow() {
  $("#extra").toggle();
}
