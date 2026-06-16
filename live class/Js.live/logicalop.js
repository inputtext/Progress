var age = Number(prompt("enter the age :"));
var gender = prompt("enter your gender  :");

if(gender === "F" || gender === "f"){
    if(age>=18 && age<=60){
        console.log("you are eligible for it !, and your age is :",age);
    }
    else{
    console.log("not eligible")
    }
}
else{
    console.log("Not eligible for it , coz you are a mf male!");
}