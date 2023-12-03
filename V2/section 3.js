let slideIndex = 1;
let audio = new Audio(); // Create a single Audio object

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  audio.pause(); // Pause the audio before changing the slide
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  audio.pause(); // Pause the audio before changing the slide
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  let currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";

  audio.src = 'sound/Y5/' + slideIndex + '.mp3'; // Set the audio source
  audio.play();

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}
