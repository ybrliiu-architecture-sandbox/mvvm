new Vue({
  el: '#app',
  beforeCreate() {
    this.model = new ImageSelector();
  },
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
    return {
      selectedImages: this.model.selectedImages,
      recentlyPostedImages: this.model.recentlyPostedImages,
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

