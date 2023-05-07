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

let slideIndex = 1;

function starterFunction() {
  showSlides(slideIndex);
  setTimeout(TimeKeepers, 5000);
}

function TimeKeepers() {
  plusSlides(1);
  setTimeout(TimeKeepers, 5000);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
