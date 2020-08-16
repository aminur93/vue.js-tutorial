var myapp = new Vue({
    el: "#my-app",
    data:{
        keydata:""
    },
    methods:{
        keypressfunction: function (event) {
            console.log(event.key);
            this.keydata = event.key;
        },

        keyupfunction: function () {
            console.log("key up....");
        },

        keydownfunction: function () {
            console.log("Key Down.....");
        }
    }
});