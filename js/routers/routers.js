var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {

    'use strict';

    //MyStore Router

    MyStore.Router = Backbone.Router.extend({
        routes: {
            "customers": "customers",
            "orders": "orders",
            "viewCust/:idx": "viewCust",
            "*notFound": "customers"
        },
        customers: function() {
            //If Customers collection already defined don't fetch data again
            if(typeof MyStore.customers === "undefined") {
                MyStore.customers = new MyStore.Collections.Customers();
                new MyStore.Views.CustomersView({ collection: MyStore.customers });
                MyStore.customers.fetch({reset: true});
            } else {
                MyStore.customers.trigger('reset');
            }
        },
        orders: function () {
            //If Orders collection already defined don't fetch data again
            if(typeof MyStore.orders === "undefined") {
                MyStore.orders = new MyStore.Collections.Orders();
                new MyStore.Views.OrdersView({collection: MyStore.orders});
                MyStore.orders.fetch({reset: true});
            } else {
                MyStore.orders.trigger('reset');
            }
        },
        viewCust: function (idx) {
            if(typeof MyStore.customers !== "undefined") {
                new MyStore.Views.IndividualView({model: MyStore.customers.findWhere({id: parseInt(idx, 10)})});
            } else {
                appRouter.navigate("customers", true);
            }
        }
    });

    var appRouter = new MyStore.Router();
    Backbone.history.start();
})();