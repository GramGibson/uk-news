(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Feeds = (function() {
    function Feeds() {
      this.page = new Page({
        top: '46px',
        id: 'page_feeds',
        title: 'UK News'
      });
      this.stack = new Stack('Feeds');
      this.stack.push(this.page);
    }
    Feeds.prototype.init = function() {
      var feeds, item, _i, _len;
      $('#loading').show();
      feeds = [];
      feeds.push({
        Id: 'campus_news',
        Title: 'Campus News',
        Url: 'http://uknow.uky.edu/taxonomy/term/12/0/feed'
      });
      feeds.push({
        Id: 'student_life',
        Title: 'Student Life',
        Url: 'http://uknow.uky.edu/taxonomy/term/24/0/feed'
      });
      feeds.push({
        Id: 'research',
        Title: 'Research',
        Url: 'http://uknow.uky.edu/taxonomy/term/13/0/feed'
      });
      feeds.push({
        Id: 'employee_news',
        Title: 'Employee News',
        Url: 'http://uknow.uky.edu/taxonomy/term/15/0/feed'
      });
      feeds.push({
        Id: 'uk_healthcare',
        Title: 'UK Healthcare',
        Url: 'http://uknow.uky.edu/taxonomy/term/17/0/feed'
      });
      feeds.push({
        Id: 'professional_news',
        Title: 'Professional News',
        Url: 'http://uknow.uky.edu/taxonomy/term/102/0/feed'
      });
      feeds.push({
        Id: 'presidents_blog',
        Title: 'President\'s Blog',
        Url: 'http://uknow.uky.edu/taxonomy/term/18/0/feed'
      });
      feeds.push({
        Id: 'uk_athletics',
        Title: 'UK Athletics',
        Url: 'http://uknow.uky.edu/athleticsRSS'
      });
      feeds.push({
        Id: 'arts_and_culture',
        Title: 'Arts & Culture',
        Url: 'http://uknow.uky.edu/taxonomy/term/16/0/feed'
      });
      for (_i = 0, _len = feeds.length; _i < _len; _i++) {
        item = feeds[_i];
        this.page.append($(ich.table_row({
          Title: item.Title
        })).data('feed', item));
      }
      $('.row').bind('click', __bind(function(e) {
        var feed;
        feed = new Feed($(e.currentTarget).data('feed'), this.stack);
        return this.stack.push(feed);
      }, this));
      return $('#loading').hide();
    };
    return Feeds;
  })();
}).call(this);
