class Notifier {

  constructor() {
    this.handlers = [];
  }

  observe(handler) {
    this.handlers.push(handler);
  }

  fire(f) {
    this.handlers.forEach((handler) => handler());
  }

}


const ImageSelector = class ImageSelector {

  constructor() {
    this.selectedImagesChanged       = new Notifier();
    this.recentlyPostedImagesChanged = new Notifier();
    this.selectedImages       = [];
    this.recentlyPostedImages = [];
  }

  set selectedImages(images) {
    this._selectedImages = images;
    this.selectedImagesChanged.fire();
  }

  get selectedImages() {
    return this._selectedImages;
  }

  set recentlyPostedImages(images) {
    this._recentlyPostedImages = images;
    this.recentlyPostedImagesChanged.fire();
  }

  get recentlyPostedImages() {
    return this._recentlyPostedImages;
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
