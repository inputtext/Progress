//prototyple chaining and prototyple inheritance

let college = {
    name:"ABC",
    rating: "A+",
    students : 3000,
    greet : function (){
        console.log("hi");
    },
};

let branch ={
    rating : "B",
    name: "CSE"
};

let student = {
    name :"PK",
    rollno:10,
    id:2324,
};

//prototyple chaining :
student.__proto__=branch;
branch.__proto__=college;

//prototyple inheritance
student.greet(); //finds in branch then finds in the college and prints
console.log(student.students);
