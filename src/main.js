new Vue({
  el: '#app',
  mounted() {
    this.model.selectedImagesChanged.observe(() => {
      this.selectedImages = this.model.selectedImages;
    });
    this.model.recentlyPostedImagesChanged.observe(() => {
      this.recentlyPostedImages = this.model.recentlyPostedImages;
    });
    this.model.loadRecentlyPostedImages();
  },
  data() {
    const selectedImages       = [];
    const recentlyPostedImages = [];
    this.model = new ImageSelector(selectedImages, recentlyPostedImages);
    return {
      selectedImages: selectedImages,
      recentlyPostedImages: recentlyPostedImages,
    };
  },
  methods: {
    select(image) {
      this.model.select(image);
    },
    unselect(image) {
      this.model.unselect(image);
    },
  },
});

