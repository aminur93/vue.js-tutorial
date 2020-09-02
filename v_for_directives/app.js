var myapp = new Vue({
    el: "#my-app",
    data: {
        students: ["Rahul","sanjay","Sonam","Sumit","Anim"],
        teachers: [
            {name: "Teacher1", subject: "Subject1", location: {street: "street1", city: "city1"}},
            {name: "Teacher2", subject: "Subject2", location: {street: "street2", city: "city2"}},
            {name: "Teacher3", subject: "Subject3", location: {street: "street3", city: "city3"}},
            {name: "Teacher4", subject: "Subject4", location: {street: "street4", city: "city4"}},
        ]
    },
    methods: {

    }
});