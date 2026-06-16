/* function counter (){
    var count = 0;

        function increment(){
        return count ++
    };
    return increment ;
};
var inc = counter();
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
 */



function counter (){
    var count =0 ;

    function increment(){
        var a = count ++ //count =-~count
        return a;
    };
    return increment;
};

var result = counter();// result stores the value ofthe counter ();
console.log(result);//full function aayenga jo result mei stored hai , that is counter()
console.log(result());//function call ,initial value 0
console.log(result()); //function call , count ++ , 1




/* function users(){

    var userName ="piyush";

    var obj = {
        changeusername : (a)=>{
            userName = a ;
        },
        getUser : ()=>{
            return userName;
        },
    };
    return obj;
};

var change =users();
change.changeusername("PK")
console.log(change.getUser)
 */
function users (){

    var username = "pk";

    var obj = {
        changeUsername : (a)=>{ // parameter , takes the a as the arguement and changes the username by the lexical scope of username variable
            username = a; // a=username
        },

        getuser: ()=>{
            return username;
        },
    };
    return obj ;
};
console.log("---------------")
var change = users();
console.log(change);
change.changeUsername("Piyush"); //changes the user name
console.log(change.getuser()); //  prints/returns the user name when function is called

change.changeUsername("Piyush.R.kanojiya"); // passed the value to change the user name , Argument
console.log(change.getuser()); //returns the updated username

