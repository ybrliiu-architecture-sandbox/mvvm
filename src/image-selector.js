import $ from 'jquery';
import Notifier from './notifier.js';

export default class ImageSelector {

  constructor(selectedImages, recentlyPostedImages) {
    this.selectedImagesChanged       = new Notifier();
    this.recentlyPostedImagesChanged = new Notifier();
    this.selectedImages       = selectedImages;
    this.recentlyPostedImages = recentlyPostedImages;
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
      url: 'recently_posted_images.json',
      contentType: 'application/json',
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
