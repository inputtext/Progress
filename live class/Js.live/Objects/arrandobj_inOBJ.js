var user = {
    name : "Virat Kohli",
    age : 40,
    profession : "Cricketer",
    skills : ["batting","Fielding","Raging"], //array in an obj
    wife : { // obj in obj
        name : "Anushka Sharma",
        age : 20,
        profession : "Actress",
        skills : ["Acting","Delivering babies","clapping"],
    },
};

console.log(user.skills[2]);
console.log(user.wife.age);
