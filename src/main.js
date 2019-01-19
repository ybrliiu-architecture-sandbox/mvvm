new Vue({
  el: '#app',
  data: {
    imageSelector: (() => {
      const imageSelector = new ImageSelector();
      imageSelector.loadRecentlyPostedImages();
      return imageSelector;
    })()
  },
});

