var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';

    //Order View
    MyStore.Views.Order = Backbone.View.extend({
        tagName: 'tr',

        template: _.template($("#individualOrder").html()),

        initialize: function () {
            _.bindAll(this, 'render');
        },
        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        }
    });
})();