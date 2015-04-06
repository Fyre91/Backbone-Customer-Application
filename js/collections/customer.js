var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';
    //Customer collection

    MyStore.Collections.Customers = Backbone.Collection.extend({
        model: MyStore.Models.Customer,
        url: '../../json/Customer.json',
        initialize: function () {
            console.log("Collections have been initialized");
        }
    });

})();