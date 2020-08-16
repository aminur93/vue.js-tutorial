var myapp = new Vue({
    el: "#our-app",
    data: {
        name: "Aminur Rashid",
        post: "Web Developer"
    },

    methods:{
        run: function(message,name){
            return "I am running " + message + " " + name;
        },

        welcome: function(dayTime){
            return "Good " + dayTime;
        },

        valueAccess: function(){
            return this.name + " " + this.post;
        }
    }
});