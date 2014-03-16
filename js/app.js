$(function(){
  var Guid = Backbone.Model.extend({
    defaults: function() {
      return {
        guid: "00000000-0000-4000-0000-000000000000"
      };
    },
    getDisplay: function(options) {
      var displayValue = this.get('guid');

      if (options.bUppercase) displayValue = displayValue.toUpperCase();
      if (!options.bDashes) displayValue = displayValue.replace(/-/g,'');
      if (options.bBraces) displayValue = '{' + displayValue + '}';
      if (options.bCommas) displayValue = displayValue + ',';

      return displayValue;
    }
  });

  var GuidList = Backbone.Collection.extend({
    model: Guid,
    seperator: "\n",
    copy: function(options) {
        var result = [];
        this.models.map(function(guid) {
          return result.push(guid.getDisplay(options));
        });
        return result.join(this.seperator);
    }
  });
  
  var Guids = new GuidList;
  
  var GuidView = Backbone.View.extend({
    tagName: 'li',
    render: function(options) {
      this.$el.html(this.model.getDisplay(options));
      return this;
    }
  });

  var AppView = Backbone.View.extend({
    el: $('#guid-app'),

    nQuantity: $('#nQuantity'),
    bUppercase: $('#bUppercase'),
    bDashes: $('#bDashes'),
    bBraces: $('#bBraces'),
    bCommas: $('#bCommas'),
    
    options: {
      bUppercase: false,
      bDashes: true,
      bBraces: false,
      bCommas: false
    },

    events: {
      'click #aGenerate': 'generate',
      'click #bUppercase': 'render',
      'click #bDashes': 'render',
      'click #bBraces': 'render',
      'click #bCommas': 'render'
    },

    initialize: function() {
      this.listenTo(Guids, 'reset', this.render);
      this.setOptions();

      ZeroClipboard.config({moviePath: 'js/ZeroClipboard.swf'});
      this.clipper = new ZeroClipboard(this.$('#aCopy'));
    },

    generate: function() {
      var numberOfGuids = parseInt($('#nQuantity').val());
      Guids.reset(guid(numberOfGuids));
    },

    render: function() {
      this.setOptions();

      var guidList = this.$('#guid-list');
      guidList.empty();
      Guids.each(function(guid) {
        var view = new GuidView({model: guid});
        guidList.append(view.render(this.options).el);
      }, this);

      this.clipper.setText(Guids.copy(this.options));
    },

    copy: function() {
      var guids = Guids.copy(this.options);
      console.log(guids);
    },

    setOptions: function() {
      this.options = {
        bUppercase: this.bUppercase.prop('checked'),
        bDashes: this.bDashes.prop('checked'),
        bBraces: this.bBraces.prop('checked'),
        bCommas: this.bCommas.prop('checked')
      };
    }
  });

  var App = new AppView;
});