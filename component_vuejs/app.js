
var data = {
    name: "Online Web Tutor",
    author: "Pavel"
};

Vue.component("owt",{
    template: "<div>" +
    "<p>This is called online web tutor Markup Channel Name : {{ name }}</p> " +
    "<p> Author : {{ author }}</p>" +
    "<p>Method Running: {{ method1() }}</p> " +
    "<p>Computed Running : {{ computed1 }}</p> " +
    "<button @click='FireMe'>Click Me</button>"+
    "</div>",
    data: function () {
        return {
            name: "Online Web Tutor",
            author: "Pavel"
        }
    },
    methods: {
        method1: function () {
            return "This is Vue Component";
        },
        FireMe: function () {
            this.author = "Khan";
        }
    },
    computed: {
        computed1: function () {
            return "This is Computed In vue Component";
        }
    }
});

var myapp1 = new Vue({
    el: "#my-app1",
    data: {},
    methods:{}
});

var myapp2 = new Vue({
    el: "#my-app2",
    data: {},
    methods:{}
});