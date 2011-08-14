(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Feed = (function() {
    function Feed(feed, stack) {
      this.feed = feed;
      this.stack = stack;
      this.page = new Page({
        top: '46px',
        id: 'page_feed',
        title: this.feed.Title
      });
      $('#loading').show();
      this.back_button = $(ich.back_button({}));
      this.page.setLeftButton(this.back_button);
      this.back_button.bind('click', __bind(function() {
        return this.stack.pop();
      }, this));
      socket.emit('get', {
        uri: this.feed.Url,
        channel: 'feed'
      });
      socket.on('feed', __bind(function(response) {
        var data, item, sliding, _i, _len, _ref;
        data = response.data;
        _ref = data.itemsElement;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          this.page.append($(ich.table_row({
            Title: item.title,
            Detail: this.formatDate(item.pubDate)
          })).data('feed_item', item));
        }
        sliding = false;
        $('.row').bind('click', __bind(function(e) {
          var feed_item;
          if (!sliding) {
            sliding = true;
            feed_item = new FeedItem(this.feed.Title, $(e.currentTarget).data('feed_item'), this.stack);
            this.stack.push(feed_item);
            return setTimeout(function() {
              return sliding = false;
            }, 1000);
          }
        }, this));
        return $('#loading').hide();
      }, this));
    }
    Feed.prototype.formatDate = function(date) {
      date = new Date(date);
      return "" + (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());
    };
    return Feed;
  })();
}).call(this);
