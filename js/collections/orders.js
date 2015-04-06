var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';
    //Customer collection

    MyStore.Collections.Orders = Backbone.Collection.extend({
        model: MyStore.Models.Order,
        url: 'json/Customer.json',
        parse: function (response) {
            return _.flatten(_.pluck(response, "orders"));
        }
    });
})();