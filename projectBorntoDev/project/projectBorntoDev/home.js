
let slideIndex = 0;
showSlides();

function showSlides() {
  // let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log('slide', slides);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (let i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}
// setTimeout(()=>{
//   console.log('Hi!');
// },5000)