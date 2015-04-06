var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';
    
    MyStore.Views.OrdersView = Backbone.View.extend({
        el: $("#view-container"),

        template: _.template($("#orderViewTmp").html()),

        events: {
            "keyup #search-order-box": "filterProduct"
        },

        //Initialize the OrdersView 
        initialize: function () {
            _.bindAll(this, 'render');
            this.collection.bind('reset', this.render);
        },

        render: function () {
            this.$el.html(this.template());

            var fragment = this.renderOrder(this.collection.models);

            $("tbody", this.el).append(fragment);
            this.getTotal();
        },

        //Renders each order
        renderOrder: function(collection) {

            var fragmentContainer = document.createDocumentFragment();
            var orderView;
            _.each(collection, function (order) {
                orderView = new MyStore.Views.Order({model: order});
                fragmentContainer.appendChild(orderView.render().el);
            });

            return fragmentContainer;
        },

        //Filters all products for the given query
        filterProduct: function () {
            var filterValue = $("#search-order-box").val().toLowerCase();
            if( filterValue  === "") {
                this.render();
                $("#search-order-box").focus();
                return;
            }
            var filteredCollection = this.collection.filter(function (order) {
                return order.get("product").toLowerCase().indexOf(filterValue) === 0;
            });
            
            var fragment = this.renderOrder(filteredCollection);

            $("tbody", this.el).html(fragment);
            this.getTotal();
        },

        //Calculates the total of the products
        getTotal: function () {
            var sum = 0;
            $(".price").each(function (index, elem) {
                sum += Number($(elem).text().split(" ")[1]);
            });
            $("tfoot", this.el).find(".sum").text("$ " + Math.round(sum * 1000) / 1000);
        }
    });
})();