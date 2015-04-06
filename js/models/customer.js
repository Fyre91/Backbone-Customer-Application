var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';

    //Customer Model
    MyStore.Models.Customer = Backbone.Model.extend({
        initialize: function () {
            console.log("Customer Model has been initialized");
        }
    });
})();