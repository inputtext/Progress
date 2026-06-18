const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const users =document.querySelector(".users");
const age =(document.querySelector("#age"));
const url =document.querySelector("#url")

let usersData = [ //add event litenser ismei add karr raha hai dynamically new objects/user and forEach is doing the work of displayin it through iterating on each element/user
    {
    id: 1, //every data has unique id
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    dob: "1998-05-14"
    },
    {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    dob: "2000-11-23"
    },
    {
    id: 3,
    name: "Rohan Patel",
    email: "rohan.patel@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "1997-08-09"
    },
    {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "2001-02-17"
    },
    {
    id: 5,
    name: "Karan Mehta",
    email: "karan.mehta@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "1999-12-30"
    }
];


//7.to display new added values
const repeat = ()=>{ //made this because to repeat the travseral of the loop after adding the new value via input so that it can print, by this loop travserses again if the submit is clicked and new value is added and prints onn the users div
   /*  users.innerHTML="";  */// to solve the repetition problem after adding every new value /user, we emptied the user div fully for each repetition to add a new user at each function call
    usersData.forEach((elem)=>{ //elem  = every object property that array has
    users.innerHTML +=`
            <div class="user-card">
            <div class="img">
                <img src="${elem.imageUrl}" alt="image here ">
            </div>
            <div class="text">
                    <h3>Name: ${elem.name}</h3>
                    <p>E-mail:${elem.email}</p>
                    <h5>Age: ${elem.dob}</h5>
            </div>
            </div>`//elem ke through  array usersData ke each element ko display karwaye
});
};
/* repeat(); */ //already display users , pehle se dikhane ke liye screen pe

form.addEventListener("submit", (events) => {
    events.preventDefault(); // 1.reload hone se bachaye
    //form ki value display karne ke liye :
    let naam = name.value; // 2.form ki value liye
    let mail = email.value;
    let Age = age.value;
    let imgUrl =url.value;
    if (naam.trim() === "" &&  mail.trim() === "" && Age.trim()==="" && imgUrl.trim()==="") return; //3.null safety ,trim(): HOF

    //4.passed the value of the inputes to the usersData array
    usersData.push({
    //  array : inputs  , if key and valus is same , write only one => name:name = name,
        name :naam,
        email : mail,
        dob :Age,
        imageUrl :imgUrl,
    });

    repeat(); // to add new users , 5.add karne ke baad dikhane ke liye screen pe

    form.reset(); //6.resets the form after submits
});

//Notes/todo
/* rewatch and notes the ppints and probleams dealth - ui repeat ko tackle kaise kiya , and write the problems tackled like ui creation reload stopp */

/* process repeat karne ke liye function mei daaldo , because koi bhi proccess in any language ek hi baar chalti hai */

/* for react , we only need FUNCTIONS knowledge to complete the 70% react,
 function has HOF,Lexical scope , parameters and arguments , rest operator (...),props,function calling */















/* 1:itna samaj mei aaya : form.addEventListener("submit", (events) => {
    events.preventDefault();
    //form ki value display karne ke liye :
    let naam = name.value;
    let mail = email.value;
    let Age = age.value;
    if (naam.trim() === "" &&  mail.trim() === "" && Age.trim()==="") return; //null safety ,trim(): HOF
    users.innerHTML +=`
            <div class="user-card">
            <div class="img">
                <img src="https://plus.unsplash.com/premium_photo-1692641346503-730862a6d3a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image here ">
            </div>
            <div class="text">
                    <h3>Name: ${naam}</h3>
                    <p>E-mail:${mail}</p>
                    <h5>Age: ${Age}</h5>
            </div>
            </div>`

    //jab bhi form ke submit button pe click karenge tab users div ke andar user card banenga dynamically   everytime jismei naam honga aur email aur photo hongi then form reset bhi hojayenga

    /* console.log(naam, mail) */;//only prints if filled
   // form.reset(); //resets the form after submits
//});



//basically traversing the array to showing the users data , and for that we are using forEach loop
/* 2: usersData.forEach((elem)=>{ //elem  = every object property that array has
    users.innerHTML +=`
            <div class="user-card">
            <div class="img">
                <img src="${elem.imageUrl}" alt="image here ">
            </div> this says that take the image from the arr ad elem=>imageurl and print through iterating each property  on to the users division making class and section dynamically , elem is pointing to each property inside the object of the array
            <div class="text">
                    <h3>Name: ${elem.name}</h3>
                    <p>E-mail:${elem.email}</p>
                    <h5>Age: ${elem.dob}</h5>
            </div>
            </div>`//elem ke through  array usersData ke each element ko display karwaye
});
 */


/* #:let usersData = [
    {
    id: 1, //every data has unique id
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    dob: "1998-05-14"
    },
    {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    dob: "2000-11-23"
    },
    {
    id: 3,
    name: "Rohan Patel",
    email: "rohan.patel@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "1997-08-09"
    },
    {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "2001-02-17"
    },
    {
    id: 5,
    name: "Karan Mehta",
    email: "karan.mehta@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "1999-12-30"
    }
];
4:
usersData.forEach((elem)=>{ //elem  = every object property that array has
    users.innerHTML +=`
            <div class="user-card">
            <div class="img">
                <img src="${elem.imageUrl}" alt="image here ">
            </div>
            <div class="text">
                    <h3>Name: ${elem.name}</h3>
                    <p>E-mail:${elem.email}</p>
                    <h5>Age: ${elem.dob}</h5>
            </div>
            </div>`//elem ke through  array usersData ke each element ko display karwaye
});


due to similarity in both the function viz,. for each and the addEventListener , we shorten up the process m we follow the DRY - DonotRepeatYourself , so we will pass the value of image mail and age to the array via array.push() => usersData.push({
name (array):naam(input wala) (name jo ki array mei hai usmei naam jayenga jo ki addeventlistener se milenga)
mail : email
Age :dob
imgUrl:imgUrl})
form.addEventListener("submit", (events) => {
    events.preventDefault();
    //form ki value display karne ke liye :
    let naam = name.value;
    let mail = email.value;
    let Age = age.value;
    let imgUrl =url.value;
    if (naam.trim() === "" &&  mail.trim() === "" && Age.trim()==="") return; //null safety ,trim(): HOF
    users.innerHTML +=`
            <div class="user-card">
            <div class="img">
                <img src="${imgUrl}" alt="image here ">
            </div>
            <div class="text">
                    <h3>Name: ${naam}</h3>
                    <p>E-mail:${mail}</p>
                    <h5>Age: ${Age}</h5>
            </div>
            </div>`
    form.reset(); //resets the form after submits
});

 */
