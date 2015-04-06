var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';
    //Order Model

    MyStore.Models.Order = Backbone.Model.extend({
        intialize: function () {
            console.log("Order has been initialized");
        }
    });
    
})();