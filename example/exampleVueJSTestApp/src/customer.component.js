/**
 * Created by open on 2017-06-09.
 */
Vue.filter('customerItem', (value, arrayix, ix) => {
    if ((arrayix * 1) === 1 && ix % 2 === 0) {
        return "-_-;." + value[arrayix * 1];
    }
    return Array.isArray(value) ? value[arrayix * 1] : "";
});

Vue.filter('debug', (value) => {
    return value + ".-_-;";
});

Vue.filter('total', (value) => {
    return `${value[0].slice(0, 2)}:${value[1].slice(0, 2)}:${value[2].slice(0, 2)}`;
});

Vue.component('customer', {
    template : "#template-story-raw",
    props : ['customer', 'ix'],
    methods : {
        deleteCustomer : (customer) => {

        },
        updateCustomer : (customer) => {

        },
        editCustomer : (customer, ix) => {
            vm.$data.customers[ix][3] = true;
            vm.$nextTick(() => {});
        }
    }
});