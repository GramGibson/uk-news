(function() {
  $(function() {
    var root;
    window.socket = io.connect('http://localhost:9000/');
    root = new Feeds;
    root.init();
    return window.store = (function() {
      return {
        set: function(k, v) {
          return localStorage.setItem(k, v);
        },
        get: function(k) {
          return localStorage.getItem(k);
        },
        remove: function(k) {
          return localStorage.removeItem(k);
        },
        clear: function() {
          return localStorage.clear();
        }
      };
    })();
  });
}).call(this);
