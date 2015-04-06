var MyStore = MyStore || {
    Models: {},
    Collections: {},
    Views: {}
};

(function () {
    'use strict';

    MyStore.Views.IndividualView = Backbone.View.extend({
        el: "#view-container",

        template: _.template($("#orderContainerTemp").html()),

        initialize: function () {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function () {
            var orderModel = this.model.get("orders");
            this.$el.html(this.template(this.model.toJSON()));
            var orderTemp = _.template($("#individualOrder").html());
            var tmpContainer = "";

            for(var i = 0, _len = orderModel.length ; i < _len; i += 1) {
                tmpContainer += "<tr>" + orderTemp(orderModel[i]) + "</tr>";
            }
            
            $("#view-container").find("tbody").append(tmpContainer);
        }
    });
})();