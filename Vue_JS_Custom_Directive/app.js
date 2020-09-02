
Vue.directive("custom-owt",{
    bind: function (el,binding,vnode) {
        console.log(el); // Dom element
        el.style.backgroundColor = "blue";
        el.style.fontSize = "20px";
        el.style.color = "green";
        el.title = "Title is now update";
        console.log(binding); // properties of directive
        console.log("Value = "+binding.value);
        console.log("Name = "+binding.value.name);
        console.log("designation = "+binding.value.designation);
    },
    update: function (object1, object2) {
        console.log("Running");
        var data = JSON.parse(JSON.stringify(object2));
        console.log(data);
    },
    unbind: function () {
        
    }
});

var myapp1 = new Vue({
    el: "#my-app",
    data:{
        message: "This is custom call"
    },
    methods: {
        updateValue: function () {
            console.log("Update....");
            this.message = "Value has been updated now";
        }
    },
    computed: {}
});