/* this : A special key word */
console.log(this);//window




// Good practises

//for normal function : use the camel case while naming the function
function sayHi(){
    console.log("hi");
};


//Constructor function
function SayHi(){
    console.log("hii");
};
/*
it is considered a good practise for a diff developer to
understand that which one is the constructor and normal function */



// constructor function

function BestSongs(){
    this.songName = "Cry for me ";
    this.albumName = "Hurry Up Tommorrow";
    this.artist = " The Weeknd";
    this.duration = [4,"mins"];
    this.isLiked=  true;
};


/* to make it a constructor function : */
let song1 = new BestSongs;
/* console.log(song1); */





function DefaultBooks(bookName,author,noofPages){
    this.bookName = bookName;
    this.author= author;
    this.noofPages = noofPages;
    this.summaryofBook =function(){
        console.log("bookname is :",this.bookName);
        console.log("author is ;",this.author);
        console.log("no of pages are :",this.noofPages);
    };
};

let newBook1 = new DefaultBooks("I am Steve Jobs","Steve Jobs",300);
console.log(newBook1);// gives object of the function
newBook1.summaryofBook();// gives the appropriate things


let newBook2 = new DefaultBooks("Hairy Potter","J.K Rowling", 1000);
console.log(newBook2);
newBook2.summaryofBook();


let newBook3 = new DefaultBooks("abc","abc",10000);
console.log(newBook3);
newBook3.summaryofBook();









/* this method significantly reduces the code length and the repition of the code for each book props */

//new is the keyword that is used to make the instance of the properties
// of the constructor function and returns the object




//---------------------------------------------------------------------------------

//wihout using the prototypel inheritance and adding the showprofile in each studenbts


function MakeStudents(name,id,verified,contact){
    this.stdName = name;
    this.stdid = id;
    this.isVerified = verified;
    this.contact = contact;
    this.showProfile= function(){
        if(this.isVerified===true){
            console.log(`student name is : ${this.stdName},student id is : ${this.stdid},students contact is  : ${this.contact}`)
        }
        else{
            console.log("User/student isnt verified")
        }
    };
};



let std1 = new MakeStudents("Piyush",46,true,89724389724387);
let std2 = new MakeStudents("Raj",60,false,24897243897);

console.log(std1);
std1.showProfile(); //shows

console.log(std2);
std2.showProfile(); //doesnt shows



//-----------------------------------------------------------------------------------

// classes  =  Syntactical sugar : making code easy to read



//-------------------------------------------------------------------------------------

// making the use of prototypel inheritance ; making showprofile a prototype of the makestudents


// contructor function
function MakeStudentss(name,id,verified,contact){
    this.stdName = name;
    this.stdid = id;
    this.isVerified = verified;
    this.contact = contact;
};


//normal function : to make it commmon in all the stds using prototyple inheritance
showProfiles= function(){
        if(this.isVerified===true){
            console.log(`student name is : ${this.stdName},student id is : ${this.stdid},students contact is  : ${this.contact}`)
        }
        else{
            console.log("User/student isnt verified")
        }
};


MakeStudentss.prototype.showProfiles=showProfiles;// adds showProfile in all of the Makestudent's prototype section

/*
MakeStudents.prototype.showProfile=showProfile; made the showProfilea prototype of the
MakeStudents, now it can acccess the contents of the MakeStudents wihtout being called seperately with each students
 */


let std1 = new MakeStudents("Piyush",46,true,89724389724387);
std1.showProfile();// instead of console.log(std1.showProfile)
// std 1 ke obj mei dhundhenga pehle fir nahi mila toh prototype mei se inherit karenga 








