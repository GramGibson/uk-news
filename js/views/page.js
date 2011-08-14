(function() {
  window.Page = (function() {
    function Page(args) {
      this.page = ich.page({
        Id: args.id,
        Stack: args.stack,
        Title: args.title
      });
      $(this.page).find('.wrapper').css({
        'top': args.top,
        'bottom': args.bottom || 0
      });
    }
    Page.prototype.append = function(content) {
      return this.page.find('.content').append(content);
    };
    Page.prototype.appendToPage = function(content) {
      return this.page.append(content);
    };
    Page.prototype.empty = function() {
      return this.page.find('.content').empty();
    };
    Page.prototype.setLeftButton = function(content) {
      return $(this.page).find('.header_left').append(content);
    };
    Page.prototype.setRightButton = function(content) {
      return $(this.page).find('.header_right').append(content);
    };
    return Page;
  })();
}).call(this);
