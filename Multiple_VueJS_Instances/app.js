var myapp2 = new Vue({
    el: "#my-app2",
    data:{
        author: "Pavel"
    },
    methods:{
        secondApp: function () {
            return "This is second Instance";
        }
    },
    computed: {
        fullname: function () {
            return this.author;
        }
    }
});

var myapp1 = new Vue({
    el: "#my-app1",
    data:{
        title: "Online Web Tutor",
        author: myapp2.author
    },
    methods:{
        secondApp: function () {
            return "This is First Instance";
        },
        thirdAppFn: function () {
            return myapp2.secondApp();
        },
        accessComputedApp2: function () {
            return myapp2.fullname;
        }
    }
});

