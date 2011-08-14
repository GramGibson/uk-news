(function() {
  $(function() {
    var root;
    window.socket = io.connect('http://localhost:9000/');
    root = new Feeds;
    return root.init();
  });
}).call(this);
