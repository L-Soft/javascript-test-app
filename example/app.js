/**
 * Created by open on 2017-06-08.
 */
var eventBus = new Vue();
var vm = new Vue ({
    el : "#app",
    data : {
        customers : [],
        customer : []
    },
    mounted : function () {
        this.customers = tmpData.data;
    },
    methods: {
    }
});