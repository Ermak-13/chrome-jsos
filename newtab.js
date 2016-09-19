OS.init({
  containerId: 'desktop-container',
  onload: function () {
    var createScript = function (url) {
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', url);
      document.body.appendChild(script);
    };

    createScript('jsos-clock.js');
    createScript('jsos-calendar.js');
    createScript('jsos-webopener.js');
    createScript('jsos-sticker.js');
  }
});
