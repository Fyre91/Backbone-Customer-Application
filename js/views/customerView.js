var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';

    //Customer View
    MyStore.Views.Customer = Backbone.View.extend({
        tagName: 'tr',

        template: _.template($("#customerTemp").html()),

        className: 'customerClass',

        events: {
            'click .delete-cust': 'deleteCustomer'
        },

        initialize: function () {
            _.bindAll(this, 'render', 'deleteCustomer');
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        },

        //Deletes the model
        deleteCustomer: function () {
            //Trigger to avoid server call. If server use this.model.destroy();
            this.model.trigger('destroy', this.model);
        }
    });

})();