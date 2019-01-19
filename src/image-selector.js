const ImageSelector = class ImageSelector {

  constructor() {
    this.selectedImages       = [];
    this.recentlyPostedImages = [];
  }

  loadRecentlyPostedImages() {
    $.ajax({
      url: './stub/recently_posted_images.json',
      dataType: 'json',
    }).then(json => {
      this.recentlyPostedImages = json.images;
    });
  }

  select(image) {
    const filtered = this.selectedImages.filter((selectedImage) => {
      return selectedImage.url == image.url;
    });
    if ( filtered.length > 0 ) {
      return;
    }
    this.selectedImages.push(image);
  }

  unselect(image) {
    this.selectedImages = this.selectedImages.filter((selectedImage) => {
      return selectedImage.url != image.url;
    });
  }

}
