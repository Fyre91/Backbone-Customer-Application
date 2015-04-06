var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';

    //Customers Collection View
    MyStore.Views.CustomersView = Backbone.View.extend({
        el: $("#view-container"),

        template: _.template($("#custContainerTemp").html()),

        events: {
            "keyup #search-box": "filterName"
        },

        //Initialize Customers  Collection View
        initialize: function (initialCustomers) {
            _.bindAll(this, 'render');
            this.collection.bind('reset', this.render);
            this.listenTo(this.collection, 'remove', this.removeCustomer);
        },

        render: function () {
            this.$el.html(this.template());
            var fragment = this.renderCustomer(this.collection.models);

            $("tbody", this.el).append(fragment);
            this.$el.find(".count").text(this.collection.length);
        },

        filterName: function () {
            var filterValue = $("#search-box").val().toLowerCase();
            if( filterValue  === "") {
                this.render();
                $("#search-box").focus();
                return;
            }
            
            //Filter the collection
            var filteredCollection = this.collection.filter(function (customer) {
                return customer.get("name").toLowerCase().indexOf(filterValue) === 0;
            });
            
            var fragment = this.renderCustomer(filteredCollection);
            
            $("tbody", this.el).html(fragment);
            this.$el.find(".count").text(filteredCollection.length);
        },

        renderCustomer: function (collection) {
            var fragmentContainer = document.createDocumentFragment();
            var custView;

            _.each(collection, function (customer) {
                custView = new MyStore.Views.Customer({model: customer});
                fragmentContainer.appendChild(custView.render().el);
            });
            return fragmentContainer;
        },

        removeCustomer: function () {
            //Update the customer counter
            this.$el.find(".count").text(this.collection.length);
        }
    });
})();