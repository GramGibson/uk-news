(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.FeedItem = (function() {
    function FeedItem(feed_title, feed_item, stack) {
      var div;
      this.feed_title = feed_title;
      this.feed_item = feed_item;
      this.stack = stack;
      this.page = new Page({
        top: '46px',
        id: 'page_feed_item',
        title: this.feed_title
      });
      $('#loading').show();
      this.back_button = $(ich.back_button({}));
      this.page.setLeftButton(this.back_button);
      this.back_button.bind('click', __bind(function() {
        return this.stack.pop();
      }, this));
      this.page.append($("<h4>" + this.feed_item.title + "</h4>"));
      div = $('<div class="padded_content" />');
      div.append(this.feed_item.description);
      this.page.append(div);
      $('#loading').hide();
    }
    return FeedItem;
  })();
}).call(this);
