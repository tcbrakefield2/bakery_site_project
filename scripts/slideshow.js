  const images = [];
  for (let i = 1; i <= 10; i++) {
    images.push(`assets/slideshow${i}.jpg`);
  }

  let currentIndex = 0;
  const slideshowImage = document.getElementById("slideshow-image");

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    slideshowImage.src = images[currentIndex];
  }

  setInterval(nextImage, 3000);