(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Stack = (function() {
    function Stack(id) {
      this.el = ich.stack({
        Id: id
      });
      $('#window').append(this.el);
    }
    Stack.prototype.push = function(page) {
      if (this.el.find('div').not(':hidden').length === 0) {
        this.el.append(page.page);
        return;
      }
      this.slideTo(this.el.find('.page:last-child'), -100);
      $(page.page.page).css('left', '100%');
      this.el.append(page.page.page);
      return this.slideTo(this.el.find('.page:last-child'), 0);
    };
    Stack.prototype.pop = function() {
      var last_child;
      last_child = this.el.find('.page:last-child');
      this.slideTo(last_child.prev(), 0);
      return this.slideTo(last_child, 100, __bind(function() {
        return last_child.remove();
      }, this));
    };
    Stack.prototype.slideTo = function(el, position, callback) {
      return el.animate({
        left: "" + position + "%"
      }, 300, function() {
        if (typeof callback === 'function') {
          return callback();
        }
      });
    };
    return Stack;
  })();
}).call(this);
