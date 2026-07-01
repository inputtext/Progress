// normal wihtout the prototypel inheritance

class MakeStudents{
    //constructor function:  runs first
    constructor(name , id , contact , verified ){
        this.stdname = name;
        this.stdid= id;
        this.stdcontact=contact;
        this.stdIsVerified= verified;
        this.showProfile = function(){
            if(this.stdIsVerified===true){
                console.log(this.stdname,this.stdid,this.stdcontact);
            }
            else{
                console.log("student is not verified");
            };
        };
    };
};


let std1 = new MakeStudents("piyush",46,897897897,true);
std1.showProfile();

/* - - - - - - - - - - - - - -- - - - - - - */

//with the prototyple inheritance

class CreateStudents {
    constructor(name,id,contact,veri){
        this.stdname = name;
        this.stdid =id;
        this.stdcontact=contact;
        this.ifveri=veri;
    };
};

let showprofiles=function (){
    if(this.ifveri!==false){
        console.log(this.name,this.stdid,this.contact);
    }else{
        console.log("Student isnt verified");
    };
};


CreateStudents.prototype.showprofiles =showprofiles;

let std2 = new CreateStudents("pk",44,89787,false);
std2.showprofiles();


// harr ek std ki prototype mei showprofile ghusa rahe hai 
