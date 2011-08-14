(function() {
  $(function() {
    var root;
    window.socket = io.connect('http://192.168.1.82:6969/');
    root = new Feeds;
    return root.init();
  });
}).call(this);
