//constructor function => function SayHi() :  Pascal case
// normal function => function sayHi() : Camel Case

//contructor function in ES5
function SayHi(){
    this.artist="The Weeknd";
    this.MostStreamedSong="blinding lights";
    this.age=32;
    this.name="Abel";
    this.intro = function(){
        console.log(`"hi my name is Able Tesfaye , popularly known as "The Weeknd"` );
    };
};


let theArtist = new SayHi;
console.log(theArtist);
theArtist.intro();



//constuructor function with parameter
function MakeBook(name,author,price){
    this.bookName=name;
    this.bookauthor=author;
    this.price=price;
    this.authorIntro = function(){
        console.log(`Hii , I am "${this.bookauthor}",  writer of the book "${this.bookName}"`);
    };
};

MakeBook.prototype.company="TESCOM"; //sets the default company as TESCOM for all of the make books
let b1 = new MakeBook("You can't beat me","David Goggings",100);
console.log(b1);
console.log(b1.company);
b1.authorIntro();




function MakeBok(name,author,price){
    this.bookName=name;
    this.bookauthor=author;
    this.price=price;
};

authorIntro = function(){
        console.log(`Hii , I am "${this.bookauthor}",  writer of the book "${this.bookName}"`);
};


MakeBok.prototype.authorIntro=authorIntro;



let b2= new MakeBok("ef","f",44);
b2.authorIntro();




// without prototyple inheritance
/* function MakeStds(name,id,contact,verify){
    this.stdName = name;
    this.stdId=id;
    this.stdcontact=contact;
    this.isVerified=verify;
    this.showProfile = function(){
        if(this.isVerified!==false){
            console.log(`Logged in successfully ,  your crededentials are : ${this.stdName},${this.stdId},${this.stdcontact} `);
        }else{
            console.log("Std isnt verified");
        };
    };
} */;


/* let std1 =  new MakeStds("Raj",2324,897,false);
console.log(std1);
std1.showProfile();

let std2  =new MakeStds("Piyush",12431243,243243,true);
console.log(std2);
std2.showProfile(); */



//with prototyle inheritance

function MakeStds(name,id,contact,verify){
    this.stdName = name;
    this.stdId=id;
    this.stdcontact=contact;
    this.isVerified=verify;
};




showProfile = function(){
        if(this.isVerified!==false){
            console.log(`Logged in successfully ,  your crededentials are : ${this.stdName},${this.stdId},${this.stdcontact} `);
        }else{
            console.log("Std isnt verified");
        };
};


MakeStds.prototype.showProfile=showProfile;


let std3  = new MakeStds("PK");
console.log(std3);
std3.showProfile();



/* - - - - - - - - - - - - - - - - - - - - - - -  */


//classes

//constructor with class wihout prototyple inheritance
class MakesStds {
    constructor(name,id,veri){
        this.name =name;
        this.id=this.id;
        this.isVeri =veri;
        this.show = function(){
            return this.name;
        };
    };
};


let student1 = new MakesStds("oiyush");
console.log(student1);



/* in constructor function => use .prototype keyword ,o/w use __proto__ */




//constructor with class wiht prototyple inheritance
class StudentInfo {
    constructor(name,id,address,verified){
        this.stdname = name ;
        this.stdid=id;
        this.stdadd=address;
        this.isVerified =verified;
    };
};

let showStudentDetails = function(){
    if(this.isVerified!==false){
        return
        (   ` name : ${this.stdname}
                id : ${this.stdid}
                address: ${this.stdadd}
            `
        );
    }else{
        return "Std isn't verified";
    };
};

StudentInfo.prototype.showStudentDetails=showStudentDetails;

let std = new StudentInfo("Pk",42,4,true);
console.log(std);
std.showStudentDetails();




// class with extends and super keywords

class Userr { //parent class
    constructor(fname,lname,con){
        this.fname =fname;
        this.lname=lname;
        this.contact=con;
    };
    greetUser(){
        return `Welcome ${this.fname} ${this.lname}`;
    };
};

class Adminn extends Userr { //child class :  extends lets Admin inherits the property of User class
    constructor(fname,lname,con){ // does the same thing that parent function does
        super(fname,lname,con) // call this before using this keyword
    }
}

/*
extends: used to create a child class that inherits properties and methods from a parent class.
syntax  : class ChildClass extends ParentClass
this promotes code reusability by eliminating the need of repition of writing the code
 */


/*
super() : It calls the contructor of the parent class
it is called before using this
*/







//full concept revision by my self , Logic
class Admin {
    constructor(name,sur,Aid){
        this.name = name;
        this.surname=sur;
        this.adminId=Aid;
    };
};

//class ChildClass extends ParentClass
class User extends Admin {
    constructor(name,sur,id,uId){
        super(name,sur,id);
        this.userId= uId;
    };
};

let user1=  new User("piyush","Kanojiya",2324,"DDD");
console.log(user1);

let admin = new Admin ("Piyush","kanojiya",101);
console.log(admin);

// mild logic
let greetBoth = function(){
    if(User) return `Hii, ${this.name}`;
    else if (Admin) return `hiii ${this.name}`;
    else return "unexpected user";
};


//applying prototyple inheritance to see function in the prototype
User.prototype.greetBoth=greetBoth;
Admin.prototype.greetBoth=greetBoth;
console.log(user1.greetBoth());
console.log(admin.greetBoth());


















































//prototyple chaining

let dada = {
    land : `100 acre`,
};
let papa = {
    name : "Rajesh",
};
let beta = {
    kaam : "gareeb",
};

beta.__proto__=papa;// beta a prototype papa
papa.__proto__=dada;// papa ka protoype dada
console.log(beta);//object
console.log(beta.name); //Rajesh
console.log(beta.land); //100 acre
