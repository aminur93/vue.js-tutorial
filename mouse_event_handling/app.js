var myapp = new Vue({
    el: "#my-app",
    data:{
        x:0,
        y:0
    },

    methods:{
        movefunction: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        overfunction: function(){
            console.log("This is message i am over");
        },

        outfunction: function () {
            console.log("This message i am out ");
        }
    }
});