var myapp = new Vue({
    el: "#my-app",
    data: {},
    methods: {
        keyPressFunction: function () {
            console.log("I am Running......");
        },
        keyaltEnterFunction: function () {
            console.log("I am key Alter Enter Function.....");
        },
        keyctrlEnterFunction: function () {
            console.log("I am key Control Enter Function.....");
        },
        keydeleteFunction: function () {
            console.log("I am key Delete  Function.....");
        },
        keyspaceFunction: function () {
            console.log("I am key Space  Function.....");
        },
        keyCodeFunction: function () {
            console.log("I am key Code  Function.....");
        }
    }
});