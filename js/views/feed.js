(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Feed = (function() {
    function Feed(feed, stack) {
      this.feed = feed;
      this.stack = stack;
      this.loadFeed = __bind(this.loadFeed, this);;
      this.showFeed = __bind(this.showFeed, this);;
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
      this.refresh_button = $('<div class="refresh"><img src="refresh.png" /></div>');
      this.refresh_button.bind('click', __bind(function() {
        this.page.empty();
        $('#loading').show();
        store.remove(this.feed.Url);
        return this.loadFeed();
      }, this));
      this.page.setRightButton(this.refresh_button);
      this.loadFeed();
      $('#page_feed .row').live('click', __bind(function(e) {
        var feed_item;
        if ($(e.currentTarget).data('feed_item')) {
          feed_item = new FeedItem(this.feed.Title, $(e.currentTarget).data('feed_item'), this.stack);
          return this.stack.push(feed_item);
        }
      }, this));
    }
    Feed.prototype.showFeed = function(data) {
      var item, _i, _len, _ref;
      _ref = data.itemsElement;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        this.page.append($(ich.table_row({
          Title: item.title,
          Detail: this.formatDate(item.pubDate)
        })).data('feed_item', item));
      }
      return $('#loading').hide();
    };
    Feed.prototype.loadFeed = function() {
      if (store.get(this.feed.Url) != null) {
        this.showFeed(JSON.parse(store.get(this.feed.Url)));
        return;
      }
      socket.emit('get', {
        uri: this.feed.Url,
        channel: 'feed'
      });
      return socket.on('feed', __bind(function(response) {
        var data;
        data = response.data;
        if (!(store.get(this.feed.Url) != null)) {
          store.set(this.feed.Url, JSON.stringify(data));
        }
        return this.showFeed(data);
      }, this));
    };
    Feed.prototype.formatDate = function(date) {
      date = new Date(date);
      return "" + (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());
    };
    return Feed;
  })();
}).call(this);
