var myapp = new Vue({
    el: "#my-app",
    data: {
        isActive: false,
        count: 0
    },
    methods: {
        checkCount: function () {
            this.count++;
        }
    }
});