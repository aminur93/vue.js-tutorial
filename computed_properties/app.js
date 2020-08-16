var myapp = new Vue({
    el: "#my-app",
    data:{
        firstName: "",
        lastName: "",
        meter: "",
        maths: 0,
        science: 0,
        english: 0
    },
    methods: {
        runme: function () {
            console.log("This is first method");
            return "I am method";
        }
    },
    computed: {
        getFullName: function () {
            return this.firstName +" "+ this.lastName;
        },
        convertToCentimeter: function () {
            return this.meter*100;
        },
        TotalMarks: function () {
            return (parseInt(this.maths) + parseInt(this.science) + parseInt(this.english));
        }
    }
});