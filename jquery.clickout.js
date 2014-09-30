(function($){
  // Custom clickout Event
  $.event.special['click:out'] = {
    setup: function(){
      this.stopPropagation = function(e){
        e.stopPropagation();
      };
      $.event.add(this, 'click', this.stopPropagation);
    },
    teardown: function(){
      $.event.remove(this, 'click', this.stopPropagation);
      $.event.remove(document, 'click', this.handler);
    },
    add: function(handleObj){
      var self = this;
          this.handler = function(e){
            e.target = self;
            handleObj.handler.apply(self, arguments);
          };
      $.event.add(document, 'click', this.handler);
    }
  };
})(jQuery);
