var myapp = new Vue({
    el: "#my-app",
    data:{
        counter: 0
    },

    methods:{
        incriment: function(num){
             this.counter = this.counter + num;
        },
        decriment : function(num){
            this.counter = this.counter - num;
        }
    }
});