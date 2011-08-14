(function() {
  $(function() {
    var root;
    window.socket = io.connect('http://localhost:6969/');
    root = new Feeds;
    return root.init();
  });
}).call(this);
