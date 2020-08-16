var myapp = new Vue({
    el: "#my-app",
    data: {
        character : "",
        name: "",
        email: ""
    },
    methods: {
        keyPressFunction: function (event) {
            this.character = event.key;
        }
    }
});