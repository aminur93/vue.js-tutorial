var myapp = new Vue({
    el: "#my-app",
    data: {
        fname: "",
        lname: "",
        channelName: "OWT"
    },
    methods:{},
    computed:{
        fullname:{
            get: function () { // getter function of fullname
                return this.fname + " " + this.lname;
            },
            set: function () { // Seter function of fullname
                console.log("set function is running");
                this.channelName = "Updated OWT";
            }
        }
    }
});