/* Create */var user= {
    username : "Piyush",
    uptime : false,
    id : 2324
};

/* Read */
console.log(user);


/* Update */

//adding rew property
user.city = "nagpur";
console.log("new property : ",user.city);

//updating an existing one
user.username= "raj";
console.log("updated value :",user.username);

delete user.uptime;
console.log("uptime deleted :",user);

// Accessing all the keys from the obj
var total_keys = Object.keys(user); //keyword object (italic text)
console.log(total_keys);
//it returns all the keys in the form of the array


//accesinng all the values
var total_values = Object.values(user);
console.log(total_values);

//accessing the entires
var total_entries = Object.entries(user);
console.log(total_entries);

/* ---------------------------------------------------------------- */
// taking inputs from the user
/* var user_Name=prompt("enter your name\n");
var age =Number(prompt("enter your age \n:"));

var object = {
    user_Name,
    age
};
console.log(object); */

