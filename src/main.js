$(() => {
  const selector = new ImageSelector(
    $('.selected-images'),
    $('.recently-posted-images')
  );
  selector.showRecentlyImages();
});

class ImageSelector {

  constructor(selectedImagesElement, recentlyPostedImagesElement) {
    this.selectedImagesElement       = selectedImagesElement;
    this.recentlyPostedImagesElement = recentlyPostedImagesElement;
  }

  showRecentlyImages() {
    this.recentlyPostedImagesElement.empty();
    $.ajax({
      url: './stub/recently_posted_images.json',
      dataType: 'json',
    }).then(json => {
      const images = json.images;
      images.forEach((image) => {
        const imageElement = $(document.createElement('img'));
        imageElement.attr('src', image.url);
        imageElement.on('click', (event) => {
          this.selectImage($(event.target).clone());
        });
        this.recentlyPostedImagesElement.append(imageElement);
      });
    });
  }

  selectImage(imageElement) {
    const selectedImageUrl = imageElement.attr('src');
    const sameUrlImages =
      this.selectedImagesElement.children().filter("img[src='" + selectedImageUrl + "']");
    if ( sameUrlImages.length > 0 ) {
      return;
    }
    imageElement.on('click', (event) => {
      $(event.target).detach();
    });
    this.selectedImagesElement.append(imageElement);
  }

}
