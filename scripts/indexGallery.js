var idx = 0;

var imgs = document.getElementsByClassName("galleryImg");

function nextImage() {
  hideImage(idx);
  if (++idx == imgs.length) {
    idx = 0;
  }
  showImage(idx);
}

function prevImage() {
  hideImage(idx);
  if (--idx == -1) {
    idx = imgs.length - 1;
  }
  showImage(idx);
}

function hideImage(i) {
  imgs[i].className = "galleryImg transparent";
}

function showImage(i) {
  imgs[i].className = "galleryImg opaque";
}
