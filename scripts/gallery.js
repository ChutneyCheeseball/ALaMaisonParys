var galleries = document.getElementsByClassName("gallery");

var imgs = [];
var idx = [];

for (let i = 0; i < galleries.length; i++) {
  idx[i] = 0;
  imgs[i] = galleries[i].getElementsByClassName("galleryImg");
  console.log("Gallery", i, "has", imgs[i].length, "photos");
}

function hideGalleryImage(i, gallery) {
  imgs[gallery][i].className = "galleryImg transparent";
}

function showGalleryImage(i, gallery) {
  imgs[gallery][i].className = "galleryImg opaque";
}

function nextGalleryImage(gallery) {
  hideGalleryImage(idx[gallery], gallery);
  if (++idx[gallery] == imgs[gallery].length) {
    idx[gallery] = 0;
  }
  showGalleryImage(idx[gallery], gallery);
}

function prevGalleryImage(gallery) {
  hideGalleryImage(idx[gallery], gallery);
  if (--idx[gallery] == -1) {
    idx[gallery] = imgs[gallery].length - 1;
  }
  showGalleryImage(idx[gallery], gallery);
}
